import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() data: any;
  @Input() index: number;
  constructor() {}

  ngOnInit() {}
}
