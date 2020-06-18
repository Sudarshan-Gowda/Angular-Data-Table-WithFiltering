import { Posts } from './../posts.model';
import { Comment } from './comments.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from './../../service/data/http.service';
import * as i0 from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit , AfterViewInit{

  constructor(private httpService: HttpService,
              private route: ActivatedRoute,
              private router: Router) { }

  postId: number;
  comments: Comment[];
  post: Posts;
  isLoading = false;
  error: string = null;

  dataSource = new MatTableDataSource<Comment>();

  displayedColumns = ['id', 'name', 'email', 'body'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {

    // tslint:disable-next-line:no-string-literal
    this.postId = this.route.snapshot.params['id'];
    if (this.postId != null) {

      this.httpService.viewIndividualPosts(this.postId).subscribe(
        data => {
          this.post = data;
          this.isLoading = true;
        }
      );

      this.httpService.viewCommentsForPosts(this.postId).subscribe(
        response => {
             this.dataSource.data = response;
             this.isLoading = true;
        },
        errorMessage => {
          console.log(errorMessage);
          this.isLoading = true;
      }
      );

    }
  }

}
