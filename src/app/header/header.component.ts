import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private scroller: ViewportScroller) {}
  Home() {
    this.scroller.scrollToAnchor("Home");
  }
  Purpose() {
    this.scroller.scrollToAnchor("Purpose");
  }
  Standard() {
    this.scroller.scrollToAnchor("Standard");
  }
  Customer() {
    this.scroller.scrollToAnchor("Customer");
  }
  Comment() {
    this.scroller.scrollToAnchor("Comment");
  }
  Contact() {
    this.scroller.scrollToAnchor("Contact");
  }
  smoothScrollTo(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }
}
