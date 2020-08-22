import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Input() inputSideNav: MatSidenav;
  myFavorite: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  
  toggleFavorite(message: string, actionMessage: string): void {
    this.myFavorite = !this.myFavorite;
    this.showMessage(message, actionMessage);
  }

  private showMessage(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
