import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  @Input() message: string;
  myFavorite: boolean = false;
  heartIcon: string = 'favorite_border';

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  teste() {
    console.log(this.message);
  }
  
  toggleFavorite(): void {
    let message: string;

    this.myFavorite = !this.myFavorite;

    if (this.myFavorite) 
      message = "Adicionado aos Favoritos";
    else 
      message = "Retirado dos Favoritos";
      
      this.showMessage(message, 'Fechar');
  }

  private showMessage(message: string, action: string): void {
    this._snackBar.open(message, action, {
      duration: 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
}
