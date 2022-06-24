import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=1');
  }
  updateData() {
    const model = {
      data: {
        name: 'morpheus',
        job: 'zion resident',
      },
    };
    return this.http.put('https://reqres.in/api/users/2', model);
  }
  deleteData() {
    return this.http.delete('https://reqres.in/api/users/2');
  }
}
