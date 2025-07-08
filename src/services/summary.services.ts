import { getSummaryByDocument } from "../repositories/summary.repositories";


export async function getSummaryByDocumentServices(document: string) {

    const summary = await getSummaryByDocument(document);

    return summary;

}
