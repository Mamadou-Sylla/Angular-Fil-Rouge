import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.scss']
})
export class ListProfilSortieComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  EditProfil(){
    alert('voulez vous modifier cette users');
  }

  // tslint:disable-next-line:typedef
  RemoveProfil(){
    alert('voulez vous supprimer cette users');
  }
}
