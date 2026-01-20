import { Request, Response, NextFunction } from "express";
import customResponse from "../dtos/custom-response";
import PlainDto from "../dtos/plain.dto";

export default function notFound(req: Request, res: Response, next: NextFunction) {

    const response: customResponse<PlainDto> = {
        success: false,
        message: "Page not found"
    };

    res.status(404).json(response);
}
