import { DocumentId, ValidatorResponse } from "../../core/types";

import { CreateCompanyType } from "../../database/models/company.model";
import { isEmailAddress, isObjectId } from "../../utils/helperFunctions";

class CompanyValidator {
  public validateCompanyId(companyId: DocumentId): ValidatorResponse {
    if (!companyId) {
      return "GF0040001";
    }

    if (!isObjectId(companyId)) {
      return "GF0040002";
    }
  }

  public validateCompanyIds(companyIds: DocumentId[]): ValidatorResponse {
    if (!Array.isArray(companyIds)) {
      return "GF0040003";
    }

    if (companyIds.length === 0) {
      return "GF0040004";
    }

    for (const companyId of companyIds) {
      if (!isObjectId(companyId)) {
        return "GF0040005";
      }
    }
  }

  public validateCompany(company: string): ValidatorResponse {
    if (!company) {
      return "GF0040006";
    }

    if (typeof company !== "string") {
      return "GF0040007";
    }

    if (company.trim().length < 2) {
      return "GF0040008";
    }
  }

  public validateFilter(
    filterConditions: Partial<CreateCompanyType>,
  ): ValidatorResponse {
    if (!filterConditions || Object.keys(filterConditions).length === 0) {
      return "GF0040009";
    }
  }

  public validateCreateCompany({
    body,
  }: {
    body: Partial<CreateCompanyType>;
  }): ValidatorResponse {
    const { company, name, contactEmail, companySize } = body;

    if (!company) {
      return "GF0040010";
    }

    if (typeof company !== "string") {
      return "GF0040011";
    }

    if (company.trim().length < 2) {
      return "GF0040012";
    }

    if (!name) {
      return "GF0040013";
    }

    if (typeof name !== "string") {
      return "GF0040014";
    }

    if (name.trim().length < 2) {
      return "GF0040015";
    }

    if (!contactEmail) {
      return "GF0040019";
    }

    if (typeof contactEmail !== "string") {
      return "GF0040020";
    }

    if (!isEmailAddress(contactEmail)) {
      return "GF0040021";
    }

    if (companySize !== undefined) {
      if (typeof companySize !== "number") {
        return "GF0040024";
      }

      if (companySize < 1) {
        return "GF0040025";
      }
    }
  }

  public validateUpdateCompany({
    body,
  }: {
    body: Partial<CreateCompanyType>;
  }): ValidatorResponse {
    const {
      company,
      name,
      address,
      contactEmail,
      contactPhone,
      companyLogoUrl,
      companySize,
    } = body;

    if (!body || Object.keys(body).length === 0) {
      return "GF0040027";
    }

    if (company !== undefined) {
      if (typeof company !== "string") {
        return "GF0040028";
      }

      if (company.trim().length < 2) {
        return "GF0040029";
      }
    }

    if (name !== undefined) {
      if (typeof name !== "string") {
        return "GF0040030";
      }

      if (name.trim().length < 2) {
        return "GF0040031";
      }
    }

    if (address !== undefined) {
      if (typeof address !== "string") {
        return "GF0040032";
      }

      if (address.trim().length < 5) {
        return "GF0040033";
      }
    }

    if (contactEmail !== undefined) {
      if (typeof contactEmail !== "string") {
        return "GF0040034";
      }

      if (!isEmailAddress(contactEmail)) {
        return "GF0040035";
      }
    }

    if (contactPhone !== undefined) {
      if (typeof contactPhone !== "string") {
        return "GF0040036";
      }
    }

    if (companyLogoUrl !== undefined) {
      if (typeof companyLogoUrl !== "string") {
        return "GF0040037";
      }
    }

    if (companySize !== undefined) {
      if (typeof companySize !== "number") {
        return "GF0040038";
      }

      if (companySize < 1) {
        return "GF0040039";
      }
    }
  }
}

export default new CompanyValidator();
