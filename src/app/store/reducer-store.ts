import { createReducer, on } from '@ngrx/store';
import { ResponseModel } from '../models/response-model';
import { postFailure, postSuccess } from './action-store';
import { AppState } from './app-state-model';

export const initialState: AppState['post'] = {
    bothPureAndPalindrome: [],
    onlyPalindrome: [],
    notPalindrome: []
};
export const postReducer = createReducer(
    initialState,

    on(postSuccess, (state, { response }) => {
        return {
            ...state,
            bothPureAndPalindrome: response.filter((resBody: ResponseModel) => resBody.is_pure_palindrome),
            onlyPalindrome: response.filter((resBody: ResponseModel) => !resBody.is_pure_palindrome && resBody.is_palindrome),
            notPalindrome: response.filter((resBody: ResponseModel) => !resBody.is_palindrome)
        };
    }),
    on(postFailure, (state, { error }) => ({
        ...state,
        error

    }))
);
