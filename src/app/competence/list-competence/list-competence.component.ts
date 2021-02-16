import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Competence } from 'src/app/models/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {

  competence: Competence[] | any;

  constructor(private service: CompetenceService, private router: Router) { }

  ngOnInit(): any {
    this.service.getAll().subscribe(
      res => {
        console.log(res);
        this.competence = res;
      });
  }
// tslint:disable-next-line:typedef
  EditProfil(competence: Competence){
    console.log(competence);
  }

  /*OnDelete(id: string): any
  {this.service.delete(id).subscribe(
    () => {
      this.competence = this.competence.filter(
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
  }*/

}
