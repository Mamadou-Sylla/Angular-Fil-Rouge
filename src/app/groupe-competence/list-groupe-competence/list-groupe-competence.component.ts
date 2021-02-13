import { Component, OnInit } from '@angular/core';
import {Profil} from '../../models/profils.model';
import {ProfilService} from '../../services/profil.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { GrpCompetence } from 'src/app/models/groupe-competence.model';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.scss']
})
export class ListGroupeCompetenceComponent implements OnInit {
  grpcomp: GrpCompetence[] | any;

  constructor(private service: GroupeCompetenceService, private router: Router) { }

  ngOnInit(): any {
    this.service.getAll().subscribe(
      res => {
        console.log(res);
        this.grpcomp = res;
      });
  }
// tslint:disable-next-line:typedef
  EditProfil(grpcomp: GrpCompetence){
    console.log(grpcomp);
  }

  OnDelete(id: string): any
  {this.service.delete(id).subscribe(
    () => {
      this.grpcomp = this.grpcomp.filter(
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
