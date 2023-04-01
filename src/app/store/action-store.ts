import { createAction, props } from '@ngrx/store';
import { ResponseModel } from '../models/response-model';

export const postRequest = createAction('[Post Component] Post Request', props<{ payload: { content: string[] } }>());

export const postSuccess = createAction(
    '[Post Service] Post Success',
    props<{ response: ResponseModel[] }>()
);
export const postFailure = createAction(
    '[Post Service] Post Failure',
    props<{ error: any }>()
);