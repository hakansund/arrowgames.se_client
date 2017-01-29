import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Sheet } from './sheet';
import { SheetsService } from './sheets.service';

@Component({
  selector: 'app-sheets',
  templateUrl: './sheets.component.html',
  styleUrls: ['./sheets.component.css']
})
export class SheetsComponent implements OnInit {

  errorMessage: string;
  sheets: Sheet[];
  sheetForm: FormGroup;
  delete: boolean = false;
  editing: boolean = false;
  editedSheet: Sheet;

  constructor(private formBuilder: FormBuilder, private sheetsService: SheetsService) { }

  ngOnInit() {
    this.getSheets();
    this.buildForm();
  }

  getSheets() {
    this.sheetsService.getSheets()
                      .subscribe(
                        sheets => this.sheets = sheets,
                        error =>  this.errorMessage = <any>error);
  }

  buildForm() {
    this.sheetForm = this.formBuilder.group({
      name: ['', Validators.required],
      archetype: ['', Validators.required],
      appearance: ['', Validators.required],
      skills: this.formBuilder.group({
        fighting: 1,
        movement: 1,
        social: 1,
        learning: 1,
        tech: 1
      })
    });
  }

  resetSheetForm() {
    this.sheetForm = null;
    this.buildForm();
  }

  onSubmitNew() {
    this.sheetsService.addSheet(this.sheetForm.value)
                      .subscribe(
                        sheet  => { this.getSheets(); this.resetSheetForm(); },
                        error => console.log(error));
  }

  deleteSheet(id: string) {
  this.sheetsService.deleteSheet(id)
                    .subscribe(
                      sheet  => { this.getSheets(); this.delete = false; },
                      error => console.log(error));
  }

  editSheet() {
    this.sheetsService.updateSheet(this.editedSheet)
                  .subscribe(
                    sheet => { this.getSheets(); this.reset(); },
                    error => console.log(error));
  }

  edit(sheet: Sheet) {
    this.editedSheet = sheet;
    this.editing = true;
  }

  reset() {
    this.delete = false;
    this.editing = false;
  }

}
