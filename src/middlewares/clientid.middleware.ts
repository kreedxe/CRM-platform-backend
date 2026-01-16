import { Request, Response, NextFunction } from "express";
import customResponse from "../dtos/custom-response";
import PlainDto from "../dtos/plain.dto";

class ClientIdMiddleware {

    verify(req: Request, res: Response, next: NextFunction) {
        const clientId: string = Array.isArray(req.headers["clientid"])
            ? req.headers["clientid"][0]
            : req.headers["clientid"] || "";

        const _clientId = process.env.CLIENT_ID;

        if (!clientId && process.env.SITE_MODE !== "local") {
            const response: customResponse<PlainDto> = {
                success: false,
                message: "ClientId header is missing"
            };

            res.status(401).json(response);
            return;
        }

        if (clientId !== _clientId && process.env.SITE_MODE !== "local") {
            const response: customResponse<PlainDto> = {
                success: false,
                message: "Invalid Client Id"
            }

            res.status(401).json(response);
        }

        req.headers["clientid"] = clientId;

        next();
    }
}

export default new ClientIdMiddleware;
