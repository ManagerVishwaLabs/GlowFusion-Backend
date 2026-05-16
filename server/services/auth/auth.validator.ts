import { ValidatorResponse } from "../../core/types";
import { LoginRequestBody } from "./types";

class AuthValidator {
  public validateLogin({
    body,
  }: {
    body: Partial<LoginRequestBody>;
  }): ValidatorResponse {
    const { username, password } = body;

    if (!username) {
      return "GF0020001";
    }

    if (typeof username !== "string") {
      return "GF0020002";
    }

    if (username.trim().length < 3) {
      return "GF0020003";
    }
    if (!password) {
      return "GF0020004";
    }

    if (typeof password !== "string") {
      return "GF0020005";
    }

    if (password.trim().length < 4) {
      return "GF0020006";
    }
  }
}

export default new AuthValidator();
