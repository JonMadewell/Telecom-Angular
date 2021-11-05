import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../Models/user.model';
import { Plan } from '../Models/plan.model';
import { Device} from '../Models/device.model';
import { Person } from '../Models/person.model';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor( private httpClient: HttpClient, private _auth: AuthenticationService) { }

  registerPerson(Person: Person):Observable<Person>{
    return this.httpClient.post<Person>("https://telecomprojectapijmrt.azurewebsites.net/api/people", Person,)
  }

  // getUser( UserName: string, Password: string){
    
  //     const headers = new HttpHeaders({Authorization: 'basic' + btoa(UserName + ':' + Password)});
  //     return this.httpClient.post<User>("https://telecomprojectapijmrt.azurewebsites.net/api/people/ViewInfo", {headers})
  // }

  getInfo(): Observable<Person>{
    return this.httpClient.get<Person>("https://telecomprojectapijmrt.azurewebsites.net/api/People/ViewInfo")
  }

  getPlans(): Observable<Plan[]>{
    return this.httpClient.get<Plan[]>("https://telecomprojectapijmrt.azurewebsites.net/api/Plans");
  }

  getPlan(PlanId: number): Observable<Plan>{
    return this.httpClient.get<Plan>("https://telecomprojectapijmrt.azurewebsites.net/api/Plans");
  }

  getDevices(): Observable<Device[]>{
    return this.httpClient.get<Device[]>("https://telecomprojectapijmrt.azurewebsites.net/api/Devices");
  }

  getNums(){
    return this.httpClient.get<string[]>(`https://telecomprojectapijmrt.azurewebsites.net/api/People/GetPhoneNumbe`);
  }
}
