import { UserRole } from "../generated/prisma/client";

export interface UserDto {
  id: string;
  email: string;
  passwordHash?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  dateOfBirth?: Date | null;
  role?: UserRole;
  createdAt: Date;
  updatedAt?: Date | null;
}

export interface CreateUserDto {
  email: string;
  passwordHash?: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  role?: UserRole;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}
