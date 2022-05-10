import { Component, OnInit } from '@angular/core';
import { PhoneService } from "../services/phone.service";

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.scss']
})
export class PhonesComponent implements OnInit {
  phones: Phones[] = [];

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneService.getPhones()
      .subscribe(data => this.phones = data);
  }
}
