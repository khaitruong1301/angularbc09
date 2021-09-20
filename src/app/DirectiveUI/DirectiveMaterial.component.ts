import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive-material',
    template: `
        <div class="container">
            <h3>Directive material</h3>
            <section>
            <div class="example-label">Icon</div>
            <div class="example-button-row">
                <div class="example-flex-container">
                <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
                    <mat-icon>more_vert</mat-icon>
                </button>
                <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
                    <mat-icon>home</mat-icon>
                </button>
                <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
                    <mat-icon>menu</mat-icon>
                </button>
                <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
                    <mat-icon>favorite</mat-icon>
                </button>
                <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
                    <mat-icon>open_in_new</mat-icon>
                </button>
                </div>
            </div>
            </section>
            <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

  <!--- Note that these columns can be defined in any order.
        The actual rendered columns are set as a property on the row definition" -->

  <!-- Position Column -->
  <ng-container matColumnDef="position">
    <th mat-header-cell *matHeaderCellDef> No. </th>
    <td mat-cell *matCellDef="let element" > {{element.position}} </td>
  </ng-container>

  <!-- Name Column -->
  <ng-container matColumnDef="name">
    <th mat-header-cell *matHeaderCellDef> Name </th>
    <td mat-cell *matCellDef="let element"> {{element.name}} </td>
  </ng-container>

  <!-- Weight Column -->
  <ng-container matColumnDef="weight">
    <th mat-header-cell *matHeaderCellDef> Weight </th>
    <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
  </ng-container>

  <!-- Symbol Column -->
  <ng-container matColumnDef="symbol">
    <th mat-header-cell *matHeaderCellDef> Symbol </th>
    <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
  <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
</table>

        </div>
    `,
    styles: [`
        section {
        display: table;
        }

            .example-label {
            display: table-cell;
            font-size: 14px;
            margin-left: 8px;
            min-width: 120px;
            }

            .example-button-row {
            display: table-cell;
            width: 490px;
            }

            .example-button-row .mat-button-base {
            margin: 8px 8px 8px 0;
            }

            .example-flex-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            }

            .example-button-container {
            display: flex;
            justify-content: center;
            width: 120px;
            }
    `]
})

export class DirectiveMaterialComponent implements OnInit {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    constructor() { }

    ngOnInit() { }
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];
  

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }