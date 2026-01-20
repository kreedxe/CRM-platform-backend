import { CreateUserDto, UpdateUserDto } from "../../dtos/user.dto";
import { UserFilterParams } from "../../params/user.params";
import { User, UserRole } from "../../generated/prisma/client";

export interface IUserRepository {
  /**
   * Retrieves a paginated list of users from the database, applying optional filters, sorting, and search criteria.
   *
   * param filters - Optional filtering parameters to narrow down the user results. Supports filtering by email, phone number, role, active status, provider, email/phone verification status, two-factor authentication, first name, last name, and a general search across first name, last name, and email.
   * param page - The page number for pagination (default is 1).
   * param limit - The number of users to return per page (default is 10).
   * param sortBy - The field by which to sort the results (default is 'createdAt').
   * param sortOrder - The order of sorting, either 'asc' for ascending or 'desc' for descending (default is 'desc').
   * returns An object containing the list of users, total count, current page, limit per page, and total number of pages.
   */
  findAll(
    filters?: UserFilterParams,
    page?: number,
    limit?: number,
    sortBy?: string,
    sortOrder?: string
  ): Promise<{
    users: User[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  }>;

  /**
   * Retrieves a user by their unique identifier.
   *
   * param id - The unique identifier of the user to find.
   * returns A promise that resolves to the user if found, or `null` if no user exists with the given id.
   */
  findById(id: string): Promise<User | null>;

  /**
   * Finds a user by their email address.
   *
   * param email - The email address of the user to find.
   * returns A promise that resolves to the user if found, or `null` if no user exists with the given email.
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * Creates a new user in the database.
   *
   * param data - The data required to create a new user.
   * returns A promise that resolves to the created User entity.
   */
  create(data: CreateUserDto): Promise<User>;

  /**
   * Updates a user's information in the database.
   *
   * param id - The unique identifier of the user to update.
   * param data - An object containing the fields to update for the user.
   * returns A promise that resolves to the updated User object.
   */
  update(id: string, data: UpdateUserDto): Promise<User>;

  /**
   * Deletes a user from the database by unique identifier.
   *
   * param id - The unique identifier of the user to delete.
   * returns A promise that resolves to the deleted User object.
   */
  delete(id: string): Promise<User>;

  /**
   * Updates the password hash for a user with the specified ID.
   *
   * param id - The unique identifier of the user whose password is to be updated.
   * param passwordHash - The new hashed password to set for the user.
   * returns A promise that resolves to the updated User object.
   */
  updatePassword(id: string, passwordHash: string): Promise<User>;

  /**
   * Updates the role of a user with the specified ID.
   *
   * param id - The unique identifier of the user whose role is to be updated.
   * param role - The new role to assign to the user.
   * returns A promise that resolves to the updated user object.
   */
  updateRole(id: string, role: UserRole): Promise<User>;

  /**
   * Retrieves a paginated list of users whose `createdAt` date falls within the specified date range.
   *
   * param startDate - The start date of the range (inclusive).
   * param endDate - The end date of the range (inclusive).
   * param page - The page number for pagination (default is 1).
   * param limit - The number of users to return per page (default is 10).
   * returns A promise that resolves to an object containing the array of users and the total count of users matching the criteria.
   */
  findByDateRange(startDate: Date, endDate: Date, page: number, limit: number): Promise<{ users: User[]; total: number }>;
}
