import { Component, OnInit } from '@angular/core';

import { NodeService } from '../../service/nodeservice';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeTableModule],
  providers: [NodeService],
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
