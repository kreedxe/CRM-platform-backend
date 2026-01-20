import { UserRole } from "../generated/prisma/client";

export interface UserFilterParams {
  email?: string;
  role?: UserRole;
  firstName?: string;
  lastName?: string;
  search?: string; // Search in firstName, lastName or email
}
