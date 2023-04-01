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

  bothPureAndPalindromeSub: ResponseModel[] = [];
  onlyPalindromeSub: ResponseModel[] = [];
  notPalindromeSub: ResponseModel[] = [];
  private subscription: Subscription[] = [];
  private getSubscriptions(): Subscription[] {
    return [
      this.store.select(state => state.post.bothPureAndPalindrome).subscribe(data => {
        this.bothPureAndPalindromeSub = data;
      }),
      this.store.select(state => state.post.onlyPalindrome).subscribe(data => {
        this.onlyPalindromeSub = data;
      }),
      this.store.select(state => state.post.notPalindrome).subscribe(data => {
        this.notPalindromeSub = data;
      })
    ];
  }

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    const payload = {
      content: ["racecar",
        "A man, a plan, a canal: Panama.",
        "A test"]
    };
    this.store.dispatch(postRequest({ payload }));
    this.subscription = this.getSubscriptions();
  }
  ngOnDestroy(): void {
    this.subscription.forEach(subscription => subscription.unsubscribe())
  }

}
