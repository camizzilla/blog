import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(private httpClient: HttpClient) { }
  public sendEmail(data) {
    return this.httpClient.post('/backend/mail.php', data, { responseType: 'text' });
  }
}
