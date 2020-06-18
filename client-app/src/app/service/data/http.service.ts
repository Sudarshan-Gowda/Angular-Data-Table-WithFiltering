import { Comment } from './../../posts/comments/comments.model';
import { API_URL } from '../../app.constants';
import { Posts } from '../../posts/posts.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  viewAllPosts() {
    return this.http.get<Posts[]>(`${API_URL}/posts`);
  }

  viewIndividualPosts(postId: number) {
    return this.http.get<Posts>(`${API_URL}/posts/${postId}`);
  }

  viewCommentsForPosts(postId: number) {
    return this.http.get<Comment[]>(`${API_URL}/comments?postId=${postId}`);
  }



}
