import { Component, OnInit } from '@angular/core';
import {PhoneService} from "../services/phone.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-phones-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.scss']
})
export class PhoneDetailsComponent implements OnInit {
  phone: Phone | null = null;
  selectedImg = '';

  constructor(private phoneService: PhoneService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(param => {
        this.phoneService.getPhone(param['phoneId'])
          .subscribe((data) => {
            this.phone = data;
            this.selectedImg = data.images[0];
          });
      });
  }

}
