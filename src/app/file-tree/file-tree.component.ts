// file-tree.component.ts
import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { FileService } from '../file.service';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss']
})
export class FileTreeComponent implements OnInit {
  files: TreeNode[] = [];
  
  constructor(private fileService:FileService){

  }

  ngOnInit(): void {

    this.fileService.getFileTree().subscribe({
      next:(res:any)=>{
        this.files = this.buildTree(res.tree).reverse();
        console.log(this.files)
      },
      error:(error)=>{
        console.log()
      }
    });
  }

  getRandomNumber(){
    return Math.floor(Math.random() * 1000000);
  }

  buildTree(files:any,i=0){
    let file_tree_keys = Object.keys(files);
    const file_tree:any = [];
    file_tree_keys.forEach((file,index)=>{
      if(files[file] !== null){
        let obj = {
          key: String(this.getRandomNumber()),
          label: file,
          data: 'Folder - '+ file,
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children:this.buildTree(files[file])
      }
      file_tree.push(obj);
      }else{
        file_tree.push({
          key:String(this.getRandomNumber()),
          label: file,
          icon: 'pi pi-file',
          data: 'File - '+ file
      })
      }
    })

    return file_tree;
  }
}
