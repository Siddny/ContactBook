import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "contact-details",
  templateUrl: "./contact-details.component.html",
  styleUrls: ["./contact-details.component.css"]
})
export class ContactDetailsComponent implements OnInit {
  public details: Detail;
  public all_details: any;
  public itemKey: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.itemKey = params["itemKey"];
    });

    this.all_details = JSON.parse(localStorage.getItem(`contactList`));
    this.details = this.all_details[this.itemKey];

    console.log(this.details);
  }

  updateDetails() {}
}

export class Detail {
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
}
