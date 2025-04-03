import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private apiUrl = `${environment.apiBaseUrl}/candidates`;

  constructor(private http: HttpClient) {}

  register(name: string,email: string,password: string,experience: string,resumeurl:string): Observable<string> {
    const registerdata = {name,email,password,experience,resumeurl};
    return this.http.post<any>(this.apiUrl, registerdata,{ responseType: 'text' as 'json' });
  }
 login(email: string, password: string) {
  const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}\login`, loginData,{ responseType: 'text' as 'json' });
  }
  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  registerCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

}
