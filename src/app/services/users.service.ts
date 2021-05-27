import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../models/IUser";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpClient: HttpClient) {

  }
  getUsers():Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }

}
