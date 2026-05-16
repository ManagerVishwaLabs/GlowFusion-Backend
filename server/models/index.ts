import User, { UserType, CreateUserType } from "../models/user.model";
import companyModel, { CompanyType, CreateCompanyType } from "./company.model";

export const models = {
  User,
  companyModel,
};

export interface ModelRegistry {
  User: {
    schema: UserType;
    create: CreateUserType;
  };
  Company: {
    schema: CompanyType;
    create: CreateCompanyType;
  };
}
