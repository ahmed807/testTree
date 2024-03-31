import { Component, OnInit } from '@angular/core';

import { NodeService } from '../../service/nodeservice';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  files!: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
  }
}
