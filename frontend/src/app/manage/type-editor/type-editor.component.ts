import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-editor',
  templateUrl: './type-editor.component.html',
  styleUrls: ['./type-editor.component.scss'],
})
export class TypeEditorComponent implements OnInit {
  html: string = '';

  gridStyle = {
    width: '100%',
    textAlign: 'left',
  };

  constructor() {}

  ngOnInit() {}

  transfer(content) {
    this.html = content;
  }
}
