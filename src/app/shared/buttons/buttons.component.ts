import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {


  @Input() btnTitle: string;
  @Input() btnURL: string;
  @Input() customClass: string;
  @Input() icon: string;


  constructor() { }

  ngOnInit() { }

}
