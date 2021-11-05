import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Devices } from 'src/app/devices.model';
import { Device } from 'src/app/Models/device.model';
import { Person } from 'src/app/Models/person.model';
import { Plan } from 'src/app/Models/plan.model';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { HttpClientService } from 'src/app/Services/http-client.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit{
 person: Person = new Person;
 plans: Plan []= [];
 allPlans: Plan []= [];
 plan: Plan= new Plan;
 devices: Device[]= [];
 pDevice: Device[]=[];
 allDevices: Device []= [];
 numbers: string []= [];
 device: Device = new Device;
  constructor(private _auth: AuthenticationService, private httpService: HttpClientService) {
   this.person= this._auth.userValue
    
  }

  ngOnInit(): void { 
    var user = JSON.parse(JSON.stringify(this.person));
    this.person.FirstName = user.firstName;
    this.person.LastName= user.lastName;
    this.person.Email = user.email;
    this.person.account.accountId= user.account.accountId;
    this.person.account.personId = user.account.personId;
    this.plans= user.account.plans;
    this.devices= user.devices;
    this.httpService.getNums().subscribe(
      ( response: any) => this.handleSuccessfulResponseNum(response),
    );
    this.httpService.getPlans().subscribe(
      ( response: any) => this.handleSuccessfulResponse(response),
    );
    
  }

  selectChangeHandler (event: any) {
    //update the ui
    this.plan = this.plans[event.target.value];
    for(let i =this.plan.deviceLimit; i>=0; i--){
        this.pDevice[i]= this.devices[i];
    }
  }
    
  handleSuccessfulResponseNum(response: string[]){
    this.numbers= response;
  }
  handleSuccessfulResponse(response: Plan[]){
    this.allPlans= response;
  }
}
