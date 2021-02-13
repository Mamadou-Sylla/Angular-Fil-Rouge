import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilSortieService } from 'src/app/services/profil-sortie.service';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.scss']
})
export class AddProfilSortieComponent implements OnInit {

  hide = true;
  data = {
    libelle: ''
  };
  tokenUser: any;

  constructor(private service: ProfilSortieService, private router: Router) { }

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
