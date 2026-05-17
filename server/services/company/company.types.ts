import { DocumentId } from "../../core/types";

type CompanyIdParams = {
  companyId: DocumentId;
};

type CompanyIds = {
  companyIds: DocumentId[];
};

type CompanyParams = {
  company: string;
};

export { CompanyIdParams, CompanyParams, CompanyIds };
