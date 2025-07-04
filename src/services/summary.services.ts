import { getSummaryByDocument } from "../repositories/summary.repositories";


export async function getSummaryByDocumentServices(document: string) {
    try {
        const summary = await getSummaryByDocument(document);
        
        return summary;
    } catch (err) {
        
        throw new Error("Error fetching summary");
    }
}
