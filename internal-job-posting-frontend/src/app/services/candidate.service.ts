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

  getCandidates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  registerCandidate(candidate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidate);
  }
 login(candidate: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, candidate);
  }


}
