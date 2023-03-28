import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { ResponseModel } from 'src/app/models/response-model';
import { postRequest } from 'src/app/store/action-store';
import { AppState } from 'src/app/store/app-state-model';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  bothPureAndPalindrome$: ResponseModel[] = [];
  onlyPalindrome$: ResponseModel[] = [];
  notPalindrome$: ResponseModel[] = [];

  private bothPureAndPalindromeSub: Subscription = new Subscription();
  private onlyPalindromeSub: Subscription = new Subscription();
  private notPalindromeSub: Subscription = new Subscription();


  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const payload = {
      content: ["racecar",
        "A man, a plan, a canal: Panama.",
        "A test"]
    };
    this.store.dispatch(postRequest({ payload }));

    this.bothPureAndPalindromeSub = this.store.select(state => state.post.bothPureAndPalindrome).subscribe(data => {
      this.bothPureAndPalindrome$ = data;
    });
    this.onlyPalindromeSub = this.store.select(state => state.post.onlyPalindrome).subscribe(data => {
      this.onlyPalindrome$ = data;
    });
    this.notPalindromeSub = this.store.select(state => state.post.notPalindrome).subscribe(data => {
      this.notPalindrome$ = data;
    });
  }
  ngOnDestroy(): void {
    this.bothPureAndPalindromeSub.unsubscribe();
    this.onlyPalindromeSub.unsubscribe();
    this.notPalindromeSub.unsubscribe();
  }

}
