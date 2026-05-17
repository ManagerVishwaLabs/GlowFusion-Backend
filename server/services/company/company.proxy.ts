import { Request, Response } from "express";

import CompanyValidator from "./company.validator";
import CompanyController from "./company.controller";

import { ResponseHandler } from "../../core/response.middleware";
import { CompanyIdParams, CompanyIds, CompanyParams } from "./company.types";

class CompanyProxy {
  public async createCompany(req: Request, res: Response): Promise<void> {
    const validationResponse = CompanyValidator.validateCreateCompany({
      body: req.body,
    });

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse = await CompanyController.createCompany(req.body);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async getCompanyById(
    req: Request<CompanyIdParams>,
    res: Response,
  ): Promise<void> {
    const { companyId } = req.params;

    const validationResponse = CompanyValidator.validateCompanyId(companyId);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.getCompanyById(companyId);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async getCompaniesByIds(
    req: Request<object, object, CompanyIds>,
    res: Response,
  ): Promise<void> {
    const { companyIds } = req.body;

    const validationResponse = CompanyValidator.validateCompanyIds(companyIds);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.getCompaniesByIds(companyIds);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async getCompanyByCompany(
    req: Request<CompanyParams>,
    res: Response,
  ): Promise<void> {
    const { company } = req.params;

    const validationResponse = CompanyValidator.validateCompany(company);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.getCompanyByCompany(company);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async updateCompanyById(
    req: Request<CompanyIdParams>,
    res: Response,
  ): Promise<void> {
    const { companyId } = req.params;

    const idValidation = CompanyValidator.validateCompanyId(companyId);

    if (idValidation) {
      ResponseHandler.send({
        response: idValidation,
        res,
      });

      return;
    }

    const bodyValidation = CompanyValidator.validateUpdateCompany({
      body: req.body,
    });

    if (bodyValidation) {
      ResponseHandler.send({
        response: bodyValidation,
        res,
      });

      return;
    }

    const controllerResponse = await CompanyController.updateCompanyById(
      companyId,
      req.body,
    );

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async updateCompaniesByIds(
    req: Request,
    res: Response,
  ): Promise<void> {
    const { companyIds, updateData } = req.body;

    const idsValidation = CompanyValidator.validateCompanyIds(companyIds);

    if (idsValidation) {
      ResponseHandler.send({
        response: idsValidation,
        res,
      });

      return;
    }

    const bodyValidation = CompanyValidator.validateUpdateCompany({
      body: updateData,
    });

    if (bodyValidation) {
      ResponseHandler.send({
        response: bodyValidation,
        res,
      });

      return;
    }

    const controllerResponse = await CompanyController.updateCompaniesByIds(
      companyIds,
      updateData,
    );

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async updateCompany(req: Request, res: Response): Promise<void> {
    const { filterConditions, updateData } = req.body;

    const filterValidation = CompanyValidator.validateFilter(filterConditions);

    if (filterValidation) {
      ResponseHandler.send({
        response: filterValidation,
        res,
      });

      return;
    }

    const bodyValidation = CompanyValidator.validateUpdateCompany({
      body: updateData,
    });

    if (bodyValidation) {
      ResponseHandler.send({
        response: bodyValidation,
        res,
      });

      return;
    }

    const controllerResponse = await CompanyController.updateCompany(
      filterConditions,
      updateData,
    );

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async updateCompanies(req: Request, res: Response): Promise<void> {
    const { filterConditions, updateData } = req.body;

    const filterValidation = CompanyValidator.validateFilter(filterConditions);

    if (filterValidation) {
      ResponseHandler.send({
        response: filterValidation,
        res,
      });

      return;
    }

    const bodyValidation = CompanyValidator.validateUpdateCompany({
      body: updateData,
    });

    if (bodyValidation) {
      ResponseHandler.send({
        response: bodyValidation,
        res,
      });

      return;
    }

    const controllerResponse = await CompanyController.updateCompanies(
      filterConditions,
      updateData,
    );

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async deleteCompanyById(
    req: Request<CompanyIdParams>,
    res: Response,
  ): Promise<void> {
    const { companyId } = req.params;

    const validationResponse = CompanyValidator.validateCompanyId(companyId);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.deleteCompanyById(companyId);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async deleteCompaniesByIds(
    req: Request,
    res: Response,
  ): Promise<void> {
    const { companyIds } = req.body;

    const validationResponse = CompanyValidator.validateCompanyIds(companyIds);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.deleteCompaniesByIds(companyIds);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async deleteCompany(req: Request, res: Response): Promise<void> {
    const { filterConditions } = req.body;

    const validationResponse =
      CompanyValidator.validateFilter(filterConditions);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.deleteCompany(filterConditions);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async deleteCompanies(req: Request, res: Response): Promise<void> {
    const { filterConditions } = req.body;

    const validationResponse =
      CompanyValidator.validateFilter(filterConditions);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.deleteCompanies(filterConditions);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async deleteCompanyByCompany(
    req: Request<CompanyParams>,
    res: Response,
  ): Promise<void> {
    const { company } = req.params;

    const validationResponse = CompanyValidator.validateCompany(company);

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse =
      await CompanyController.deleteCompanyByCompany(company);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }
}

export default new CompanyProxy();
