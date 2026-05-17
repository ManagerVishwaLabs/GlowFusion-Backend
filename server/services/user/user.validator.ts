import { DocumentId, ValidatorResponse } from "../../core/types";
import { CreateUserType } from "../../database/models/user.model";
import { isEmailAddress, isObjectId } from "../../utils/helperFunctions";

class UserValidator {
  public validateUserId(userId: DocumentId): ValidatorResponse {
    if (!userId) {
      return "GF0030024";
    }

    if (!isObjectId(userId)) {
      return "GF0030025";
    }
  }

  public validateUserIds(userIds: DocumentId[]): ValidatorResponse {
    if (!Array.isArray(userIds)) {
      return "GF0030026";
    }

    if (userIds.length === 0) {
      return "GF0030027";
    }

    for (const id of userIds) {
      if (!isObjectId(id)) {
        return "GF0030028";
      }
    }
  }

  public validateUsername(username: string): ValidatorResponse {
    if (!username) {
      return "GF0030029";
    }

    if (typeof username !== "string") {
      return "GF0030030";
    }

    if (username.trim().length < 3) {
      return "GF0030031";
    }
  }

  public validateCompany(company: string): ValidatorResponse {
    if (!company) {
      return "GF0030032";
    }

    if (typeof company !== "string") {
      return "GF0030033";
    }
  }

  public validateFilter(filter: Partial<CreateUserType>): ValidatorResponse {
    if (!filter || Object.keys(filter).length === 0) {
      return "GF0030034";
    }
  }

  public validateCreateUser({
    body,
  }: {
    body: Partial<CreateUserType>;
  }): ValidatorResponse {
    const { firstName, email, username, company, passwordHash } = body;

    if (!firstName) {
      return "GF0030001";
    }

    if (typeof firstName !== "string") {
      return "GF0030002";
    }

    if (firstName.trim().length < 2) {
      return "GF0030003";
    }

    if (!email) {
      return "GF0030004";
    }

    if (typeof email !== "string") {
      return "GF0030005";
    }

    if (!isEmailAddress(email.trim())) {
      return "GF0030006";
    }

    if (!username) {
      return "GF0030007";
    }

    if (typeof username !== "string") {
      return "GF0030008";
    }

    if (username.trim().length < 3) {
      return "GF0030009";
    }

    if (!company) {
      return "GF0030010";
    }

    if (typeof company !== "string") {
      return "GF0030011";
    }

    if (!passwordHash) {
      return "GF0030012";
    }

    if (typeof passwordHash !== "string") {
      return "GF0030013";
    }

    if (passwordHash.trim().length < 6) {
      return "GF0030014";
    }
  }

  public validateUpdateUser({
    body,
  }: {
    body: Partial<CreateUserType>;
  }): ValidatorResponse {
    const { firstName, email, username, company, passwordHash } = body;

    if (!body || Object.keys(body).length === 0) {
      return "GF0030035";
    }

    if (firstName !== undefined) {
      if (typeof firstName !== "string") {
        return "GF0030015";
      }

      if (firstName.trim().length < 2) {
        return "GF0030016";
      }
    }

    if (email !== undefined) {
      if (typeof email !== "string") {
        return "GF0030017";
      }

      if (!isEmailAddress(email)) {
        return "GF0030018";
      }
    }

    if (username !== undefined) {
      if (typeof username !== "string") {
        return "GF0030019";
      }

      if (username.trim().length < 3) {
        return "GF0030020";
      }
    }

    if (company !== undefined) {
      if (typeof company !== "string") {
        return "GF0030021";
      }
    }

    if (passwordHash !== undefined) {
      if (typeof passwordHash !== "string") {
        return "GF0030022";
      }

      if (passwordHash.trim().length < 6) {
        return "GF0030023";
      }
    }
  }
}

export default new UserValidator();
