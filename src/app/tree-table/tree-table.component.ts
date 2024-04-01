import { Component, OnInit } from '@angular/core';

import { NodeService } from '../../../service/nodeservice';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [TreeTableModule],
  providers: [NodeService],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css',
})
export class TreeTableComponent implements OnInit {
  files!: TreeNode[];

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
  }
}
