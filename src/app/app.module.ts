import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ContactDetailsComponent } from "./components/contact-details/contact-details.component";

//routing module
import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
