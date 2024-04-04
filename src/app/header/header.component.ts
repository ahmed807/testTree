import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  pageTitle: string = 'Bill of Quantities List';
  activeTab: string = 'Tab1'; // Initially active tab
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(tabName: string): void {
    this.activeTab = tabName;
  }

}
