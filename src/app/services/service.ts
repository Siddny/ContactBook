import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private URL = '../assets/contacts.json';

  constructor(
    private httpClient: HttpClient
  ) {}

  public getAllContacts(){
    // return localStorage.getItem('contacts');
    this.httpClient.get(this.URL).subscribe(console.log);
  }
}
