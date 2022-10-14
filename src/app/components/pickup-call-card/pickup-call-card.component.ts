import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {
  
  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;


  constructor() { }

  ngOnInit() {}

}
