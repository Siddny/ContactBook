import { Component, OnInit } from "@angular/core";
import * as contacts from "../../_files/contacts.json";
// import { AppService } from '../../services/service';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public contactsList: {
    firstName: string;
    lastName: string;
    mobile: string;
  }[] = contacts;

  selectDelete: boolean = false;
  listView: boolean = true;
  public storedContactList: [];

  constructor() {} // public _service: AppService,

  ngOnInit() {
    localStorage.setItem("contactList", JSON.stringify(this.contactsList));

    var contactNames = JSON.parse(localStorage.getItem("contactList"));
    this.storedContactList = contactNames.sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    // console.log(this.storedContactList);
  }

  switchView() {
    this.listView = !this.listView;
  }

  selectToDelete() {
    this.selectDelete = !this.selectDelete;
  }
}
