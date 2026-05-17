import { Request, Response } from "express";

import UserValidator from "./user.validator";

import UserController from "./user.controller";

import { ResponseHandler } from "../../core/response.middleware";

class UserProxy {
  public async createUser(req: Request, res: Response): Promise<void> {
    const validationResponse = UserValidator.validateCreateUser({
      body: req.body,
    });

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,
        res,
      });

      return;
    }

    const controllerResponse = await UserController.createUser(req.body);

    ResponseHandler.send({
      response: controllerResponse,
      res,
    });
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;

    const controllerResponse = await UserController.getUserById(userId as string);

    ResponseHandler.send({
      response: controllerResponse,

      res,
    });
  }


  public async updateUser(req: Request, res: Response): Promise<void> {
    const validationResponse = UserValidator.validateUpdateUser({
      body: req.body,
    });

    if (validationResponse) {
      ResponseHandler.send({
        response: validationResponse,

        res,
      });

      return;
    }

    const { userId } = req.params;

    const controllerResponse = await UserController.updateUserById(
      userId as string,
      req.body,
    );

    ResponseHandler.send({
      response: controllerResponse,

      res,
    });
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;

    const controllerResponse = await UserController.deleteUserById(userId as string);

    ResponseHandler.send({
      response: controllerResponse,

      res,
    });
  }
}

export default new UserProxy();
