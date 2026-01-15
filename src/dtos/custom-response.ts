
export default interface customResponse<T> {
    success: boolean,
    errors?: string[],
    message?: string;
    errorCode?:string;
    data?: T;
}