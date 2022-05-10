import { Injectable } from '@angular/core';


import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

const BASE_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  constructor(private httpClient: HttpClient) { }

  getPhones() {
    return this.httpClient.get<Phones[]>(BASE_URL);
  }

  getPhone(id:string) {
    return this.httpClient.get<Phone>(`${BASE_URL}${id}`);
  }
}
