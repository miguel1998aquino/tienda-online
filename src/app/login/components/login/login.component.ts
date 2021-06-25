import { Component, OnInit } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide =true;
  constructor(
    public Af:AngularFireAuth,
    public auth: AuthService,
    private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  register(){
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: '270px',
      panelClass:'custom'
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }

  loginGoogle(){
    this.auth.logear()
  }


}
