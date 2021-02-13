import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../services/profil.service';
import {Router} from '@angular/router';
import {ProfilSortie} from '../../models/profil-sortie.model';
import { ProfilSortieService } from 'src/app/services/profil-sortie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.scss']
})
export class ListProfilSortieComponent implements OnInit {

  profil: ProfilSortie[] | any;

  constructor(private service: ProfilSortieService, private router: Router) { }

  ngOnInit(): any {
    this.service.getAll().subscribe(
      res => {
        this.profil = res;
      });
  }

  EditProfil(profil: ProfilSortie): any{
    console.log(profil);
    }

      OnDelete(id: string): any
      {this.service.delete(id).subscribe(
        () => {
          this.profil = this.profil.filter(
            (std: { id: string; }) => std.id !== id
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
