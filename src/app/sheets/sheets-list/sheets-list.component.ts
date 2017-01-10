import { Component, OnInit } from '@angular/core';

import { Sheet } from '../sheet';
import { SheetsService } from '../sheets.service';

@Component({
  selector: 'app-sheets-list',
  templateUrl: './sheets-list.component.html',
  styleUrls: ['./sheets-list.component.css']
})
export class SheetsListComponent implements OnInit {

  errorMessage: string;
  sheets: Sheet[];
  selectedSheet: Sheet;

  constructor(private sheetsService: SheetsService) { }

  ngOnInit() {
    this.getSheets();
  }

  getSheets() {
    this.sheetsService.getSheets()
                      .subscribe(
                        sheets => this.sheets = sheets,
                        error =>  this.errorMessage = <any>error);
  }

  onSelect(sheet: Sheet) {
    this.selectedSheet = sheet;
  }

  onClear() {
    this.selectedSheet = null;
  }

  onNewSheet(newSheet: Sheet) {
    this.sheetsService.addSheet(newSheet)
                      .subscribe(
                        sheet  => { this.getSheets(); this.onSelect(sheet); },
                        error => console.log(error));
  }

    onDeleteSheet(id: String) {
      this.sheetsService.deleteSheet(id)
                        .subscribe(
                          sheet  => { this.getSheets(); this.onClear(); },
                          error => console.log(error));
    }

}
