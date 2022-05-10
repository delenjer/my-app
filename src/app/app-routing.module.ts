import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonesComponent } from "./phones/phones.component";
import { MainComponent } from "./main/main.component";
import { PhoneDetailsComponent } from "./phone-details/phone-details.component";

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'phones', component: PhonesComponent },
  { path: 'phones/:phoneId', component: PhoneDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
