import { Router } from "express";

import CompanyProxy from "./company.proxy";

const companyRouter = Router();

companyRouter.post("/createCompany", CompanyProxy.createCompany);

companyRouter.get("/getCompanyById/:companyId", CompanyProxy.getCompanyById);

companyRouter.post("/getCompaniesByIds", CompanyProxy.getCompaniesByIds);

companyRouter.get(
  "/getCompanyByCompany/:company",
  CompanyProxy.getCompanyByCompany,
);

companyRouter.patch(
  "/updateCompanyById/:companyId",
  CompanyProxy.updateCompanyById,
);

companyRouter.patch("/updateCompaniesByIds", CompanyProxy.updateCompaniesByIds);

companyRouter.patch("/updateCompany", CompanyProxy.updateCompany);

companyRouter.patch("/updateCompanies", CompanyProxy.updateCompanies);

companyRouter.delete(
  "/deleteCompanyById/:companyId",
  CompanyProxy.deleteCompanyById,
);

companyRouter.delete(
  "/deleteCompaniesByIds",
  CompanyProxy.deleteCompaniesByIds,
);

companyRouter.delete("/deleteCompany", CompanyProxy.deleteCompany);

companyRouter.delete("/deleteCompanies", CompanyProxy.deleteCompanies);

companyRouter.delete(
  "/deleteCompanyByCompany/:company",
  CompanyProxy.deleteCompanyByCompany,
);

export default companyRouter;
