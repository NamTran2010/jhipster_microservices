import { IDocumentType } from 'app/entities/employee/document-type/document-type.model';
import { IEmployee } from 'app/entities/employee/employee/employee.model';

export interface IDocument {
  id?: number;
  documentName?: string;
  description?: string | null;
  documentType?: IDocumentType | null;
  employee?: IEmployee | null;
}

export class Document implements IDocument {
  constructor(
    public id?: number,
    public documentName?: string,
    public description?: string | null,
    public documentType?: IDocumentType | null,
    public employee?: IEmployee | null
  ) {}
}

export function getDocumentIdentifier(document: IDocument): number | undefined {
  return document.id;
}
