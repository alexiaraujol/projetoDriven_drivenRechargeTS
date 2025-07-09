import db from "../database/database";
import { PhoneWithDetails, Summary } from "../protocols/types";




export async function getSummaryByDocument(document: string): Promise<Summary | null>  {
    const result = await db.query(
        `SELECT 
            c.document,
            p.id as phone_id, p.number,
            o.id as carrier_id, o.name as carrier_name,
            r.id as recharge_id, r.amount as amount, r.created_at as recharge_created_at
        FROM client c
        JOIN phones p ON p.client_id = c.id
        JOIN carriers o ON o.id = p.carrier_id
        LEFT JOIN recharges r ON r.phone_id = p.id
        WHERE c.document = $1
        ORDER BY p.id, r.created_at DESC`,
        [document]
    );

    const rows = result.rows;

    if (!rows.length) return null;

    const summary: Summary = {
        document: rows[0].document,
        phones: []
    };

    const phonesMap: Record<number, PhoneWithDetails> = {};

    for (const row of rows) {
        if (!phonesMap[row.phone_id]) {
            phonesMap[row.phone_id] = {
                id: row.phone_id,
                number: row.number,
                carrier: {
                    id: row.carrier_id,
                    name: row.carrier_name
                },
                recharges: []
            };
            summary.phones.push(phonesMap[row.phone_id]);
        }
        if (row.recharge_id) {
            phonesMap[row.phone_id].recharges.push({
                id: row.recharge_id,
                value: row.recharge_value,
                date: row.recharge_date
            });
        }
    }

     

    return summary;
}