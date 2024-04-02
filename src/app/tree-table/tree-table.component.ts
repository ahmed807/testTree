import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { NodeService } from '../../../service/nodeservice';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [TreeTableModule, CommonModule, ButtonModule],
  providers: [NodeService],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css',
})
export class TreeTableComponent implements OnInit {
  files!: TreeNode[];
  cols!: Column[];
  selectedFile!: TreeNode;
  text!: string;
  example: TreeNode = {
    data: {
      name: 'editor.app',
      size: '25mb',
      type: 'Application',
    },
  };

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getTreeTableNodes().then((files) => (this.files = files));
    this.cols = [
      { field: 'key', header: 'Level' },
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
      { field: '', header: '' },
    ];
  }
  addChild() {
    if (this.selectedFile && this.text) {
      this.example.label = this.text;
      this.selectedFile.children!.push(this.example);
      console.log(
        'Added child in ',
        this.selectedFile,
        'you can find in',
        this.files
      );
    }
  }
}
