import { DocumentId } from "../../core/types";

type Username = { username: string };
type Company = { company: string };

type UserIdParams = {
  userId: DocumentId;
};

export { Username, Company, UserIdParams };
