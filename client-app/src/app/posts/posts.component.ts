import { Router } from '@angular/router';
import { HttpService } from './../../../../user-app/src/app/service/data/http.service';
import { Posts } from './../../../../user-app/src/app/posts/posts.model';
import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as i0 from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements AfterViewInit, OnInit {
  displayedColumns = ['id', 'userId', 'title', 'body'];
  dataSource = new MatTableDataSource<Posts>();


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private httpService: HttpService,
              private router: Router){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    console.log(row.id);
    this.router.navigate(['comments/', row.id]);
  }

  ngOnInit() {
    this.viwPosts();
  }

  viwPosts() {
    this.httpService.viewAllPosts().subscribe(
      response => {
        this.dataSource.data = response;
      }
    );
  }
}


