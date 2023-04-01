import { ResponseModel } from "../models/response-model";

export interface AppState {

    post: {
        bothPureAndPalindrome: ResponseModel[],
        onlyPalindrome: ResponseModel[],
        notPalindrome: ResponseModel[],
        error?: any
    }
}