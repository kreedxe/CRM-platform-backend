import { Request, Response, NextFunction } from "express";
import CustomError from "../exceptions/custom-error";
import customResponse from "../dtos/custom-response";
import PlainDto from "../dtos/plain.dto";
import ResponseErrorDto from "../dtos/response-error.dto";

export default function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {

    if (!(err instanceof CustomError)) {

        const response: customResponse<PlainDto> = {
            success: false,
            message: process.env.NODE_ENV === "development" ? err.message : "Server error, please try again later"
        };

        res.status(500).json(response);
    
    } else {

        const customError = err as CustomError;

        let response = {
            message: customError.message
        } as ResponseErrorDto;

        const jsonResponse: customResponse<PlainDto> = {
            success: false,
            message: response.message,
            errors: response.additionalInfo ? [response.additionalInfo] : undefined
        };

        res.status(customError.status).json(jsonResponse);
    }
}
