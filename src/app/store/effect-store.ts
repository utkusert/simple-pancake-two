import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { PostService } from '../services/post.service';
import { postFailure, postRequest, postSuccess } from './action-store';

@Injectable()
export class PostEffects {

    constructor(private actions$: Actions, private postService: PostService) { }

    postRequest$ = createEffect(() =>
        this.actions$.pipe(
            ofType(postRequest),
            map(action$ => action$.payload),
            switchMap((payload) =>
                this.postService.postData(payload).pipe(
                    map(response => postSuccess({ response })),
                    catchError(error => of(postFailure({ error })))
                )
            )
        )
    );
}


