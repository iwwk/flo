import { NoteAttachment } from "./note-attachment.model";

export interface Note {
    id: number,
    subject: string,
    body: string,
    emails: string[];
    patientId: number,
    attachments: NoteAttachment[],
    files: File[],
    createdByName: string,
    createdDateTime: Date
}