import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Referentiel } from 'src/app/models/referentiel.model';
import { ReferentielService } from 'src/app/services/referentiel.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.scss']
})
export class ListReferentielComponent implements OnInit {

  referentiel: Referentiel[] | any;

  constructor(private service: ReferentielService, private router: Router) { }

  ngOnInit(): any {
    this.service.getAll().subscribe(
      res => {
        console.log(res);
        this.referentiel = res;
      });
  }
// tslint:disable-next-line:typedef
  EditProfil(referentiel: Referentiel){
    console.log(referentiel);
  }

  OnDelete(id: string): any
  {this.service.delete(id).subscribe(
    () => {
      this.referentiel = this.referentiel.filter(
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
