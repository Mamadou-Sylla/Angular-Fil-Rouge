import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Profil, ProfilModel } from 'src/app/models/profils.model';
import { ProfilService } from 'src/app/services/profil.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.scss']
})
export class ListProfilComponent implements OnInit {
  profil: Profil[] | any;

  constructor(private service: ProfilService, private router: Router) { }

  ngOnInit(): any {
      this.service.getAll().subscribe(
      res => {
        this.profil = res;
    });
  }
// tslint:disable-next-line:typedef
EditProfil(profil: Profil){
console.log(profil);
}

  OnDelete(id: number): any
  {this.service.delete(id).subscribe(
    () => {
      this.profil = this.profil.filter(
        (std: { id: number; }) => std.id !== id
      );
    });


   Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deleted'

    }
    ).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }

}
