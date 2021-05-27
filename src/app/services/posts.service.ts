import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url='https://jsonplaceholder.typicode.com/posts';

  constructor(private httpCliet: HttpClient) {

  }
  getPosts():Observable<IPost[]>{
    return this.httpCliet.get<IPost[]>(this.url);
  }
}
