import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { NodeService } from '../../../service/nodeservice';
import { TreeNode } from 'primeng/api';
import { TreeTableModule } from 'primeng/treetable';

interface Column {
  field: string;
  header: string;
}
interface NodeEvent {
  originalEvent: Event;
  node: TreeNode;
}
@Component({
  selector: 'app-tree-table',
  standalone: true,
  imports: [
    TreeTableModule,
    ButtonModule,
    MultiSelectModule,
    FormsModule,
    CommonModule,
  ],
  providers: [NodeService],
  templateUrl: './tree-table.component.html',
  styleUrl: './tree-table.component.css',
})
export class TreeTableComponent implements OnInit {
  files!: TreeNode[];
  cols!: Column[];
  selectedColumns!: Column[];
  selectedFile!: TreeNode;
  example: TreeNode = {
    data: {
      name: 'ssssssss.app',
      size: '25mb',
      type: 'Application',
    },
  };

  constructor(
    private nodeService: NodeService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then((files) => (this.files = files));
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' },
    ];
    this.selectedColumns = this.cols;
  }
  addChild() {
    // console.log(event.node.children);
    // event.node.children!.push(this.example);
    if (this.selectedFile) {
      let temp: TreeNode = {
        data: {
          name: this.selectedFile.data.name,
          size: '25mb',
          type: 'Application',
        },
      };

      this.selectedFile.children!.push(this.example);
      this.files = [...this.files];
      this.cd.markForCheck();
      // console.log("Added child in ",this.selectedFile,"you can find in",this.filesTree2);
    }
    // if (this.selectedFile && this.text) {
    //   this.example.label = this.text;
    //   this.selectedFile.children!.push(this.example);
    //   console.log(
    //     'Added child in ',
    //     this.selectedFile,
    //     'you can find in',
    //     this.files
    //   );
    // }
  }
}
