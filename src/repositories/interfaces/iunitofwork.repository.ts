import { IUserRepository } from "./iuser.repository";
import { Prisma } from "../../generated/prisma/client";

export default interface IUnitOfWork {

    User: IUserRepository;

    transaction<T>(callback: (prisma: Prisma.TransactionClient) => Promise<T>): Promise<T>;

}