import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {ProfilService} from '../../services/profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.scss']
})
export class AddProfilComponent implements OnInit {

  hide = true;
  data = {
    libelle: ''
  };
  tokenUser: any;

  constructor(private service: ProfilService, private router: Router) { }

    private role = '';


  ngOnInit(): void {
  }

  OnSubmit(form: NgForm): any{
    this.data.libelle = form.value.libelle;
    console.log(this.data);
    this.service.create(this.data).subscribe(
        (res: any) => console.log(res)
    );
    location.reload();
  }



}
