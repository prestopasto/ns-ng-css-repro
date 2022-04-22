import { Component, OnInit } from "@angular/core";

@Component({
  selector: "Home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public dynamicStyle = "background-color:yellow;";

  public dynamicProperty = "--dynamic-color:blue;";

  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }
}
