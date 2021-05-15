import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-delivery-costs',
  templateUrl: './delivery-costs.component.html'
})
export class DeliveryCostsComponent implements OnInit {

  @Input()
  deliveryCost: number;

  @Input()
  itemsTotal: number;

  constructor() { }

  ngOnInit() {
  }

  total() : number {
    return this.deliveryCost + this.itemsTotal;
  }

}
