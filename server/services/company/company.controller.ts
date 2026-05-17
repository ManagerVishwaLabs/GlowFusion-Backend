import { QueryFilter } from "mongoose";

import { ControllerResponse, DocumentId } from "../../core/types";

import DBModule from "../../database/db.module";

import { CreateCompanyType } from "../../database/models/company.model";

class CompanyController {
  private companyModel;

  constructor() {
    this.companyModel = DBModule.createModel("Company");
  }

  public async createCompany(
    companyData: CreateCompanyType,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.insertOne(companyData);

    return {
      data: company,
    };
  }

  public async getCompanyById(
    companyId: DocumentId,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.findById(companyId);

    return {
      data: company,
    };
  }

  public async getCompaniesByIds(
    companyIds: DocumentId[],
  ): Promise<ControllerResponse> {
    const companies = await this.companyModel.findByIds(companyIds);

    return {
      data: companies,
    };
  }

  public async getCompanyByCompany(
    company: string,
  ): Promise<ControllerResponse> {
    const foundCompany = await this.companyModel.findOne({
      company,
    });

    return {
      data: foundCompany,
    };
  }

  public async updateCompanyById(
    companyId: DocumentId,
    updateData: Partial<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.updateById(companyId, updateData);

    return {
      data: company,
    };
  }

  public async updateCompaniesByIds(
    companyIds: DocumentId[],
    updateData: Partial<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const companies = await this.companyModel.updateByIds(
      companyIds,
      updateData,
    );

    return {
      data: companies,
    };
  }

  public async updateCompany(
    filterConditions: QueryFilter<CreateCompanyType>,
    updateData: Partial<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.updateOne(
      filterConditions,
      updateData,
    );

    return {
      data: company,
    };
  }

  public async updateCompanies(
    filterConditions: QueryFilter<CreateCompanyType>,
    updateData: Partial<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const companies = await this.companyModel.updateMany(
      filterConditions,
      updateData,
    );

    return {
      data: companies,
    };
  }

  public async deleteCompanyById(
    companyId: DocumentId,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.deleteById(companyId);

    return {
      data: company,
    };
  }

  public async deleteCompaniesByIds(
    companyIds: DocumentId[],
  ): Promise<ControllerResponse> {
    const companies = await this.companyModel.deleteByIds(companyIds);

    return {
      data: companies,
    };
  }

  public async deleteCompany(
    filterConditions: QueryFilter<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const company = await this.companyModel.deleteOne(filterConditions);

    return {
      data: company,
    };
  }

  public async deleteCompanies(
    filterConditions: QueryFilter<CreateCompanyType>,
  ): Promise<ControllerResponse> {
    const companies = await this.companyModel.deleteMany(filterConditions);

    return {
      data: companies,
    };
  }

  public async deleteCompanyByCompany(
    company: string,
  ): Promise<ControllerResponse> {
    const deletedCompany = await this.companyModel.deleteOne({
      company,
    });

    return {
      data: deletedCompany,
    };
  }
}

export default new CompanyController();
