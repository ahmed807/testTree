import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent implements OnInit {
  // ShowPopup
  @Input() showPopup: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
