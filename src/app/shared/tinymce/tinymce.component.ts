import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output } from '@angular/core';

declare var tinymce: any;

@Component({
  selector: 'app-tinymce',
  templateUrl: './tinymce.component.html',
  styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements AfterViewInit, OnDestroy {

  @Input() elementId: String;
  @Input() content: string;
  @Output() onEditorKeyup = new EventEmitter<any>();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
    if (this.content) {
      tinymce.activeEditor.setContent(this.content);
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
