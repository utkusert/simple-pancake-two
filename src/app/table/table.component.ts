import { Component, OnInit } from '@angular/core';
import { ResponseModel } from '../models/response-model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  bothPureAndPalindrome: ResponseModel[] = [];
  onlyPalindrome: ResponseModel[] = [];
  notPalindrome: ResponseModel[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  postData() {

    this.postService.postData().subscribe((res: any) => {
      this.bothPureAndPalindrome = res.filter((resBody: ResponseModel) => resBody.is_pure_palindrome);
      this.onlyPalindrome = res.filter((resBody: ResponseModel) => !resBody.is_pure_palindrome && resBody.is_palindrome);
      this.notPalindrome = res.filter((resBody: ResponseModel) => !resBody.is_palindrome);
      console.log("Pure : ", this.bothPureAndPalindrome);
      console.log("OnlyPalindrome : ", this.onlyPalindrome);
      console.log("Not : ", this.notPalindrome);

    });
  };
}
