import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Competence } from 'src/app/models/competence.model';
import { GrpCompetence } from 'src/app/models/groupe-competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.scss']
})
export class ListCompetenceComponent implements OnInit {

  grpcomp: GrpCompetence[] | any;
  Comp: Competence[] | any;
  userId: number | any;
  id = 8 ;
  grpcompetence: any;
  result: any;
  idComp: number | any;
  niveau1: any;
  niveau2: any;
  niveau3: any;
  error: any;
  ok = true;

  constructor(private service: GroupeCompetenceService, private route: ActivatedRoute, private serComp: CompetenceService) { }

  ngOnInit(): any {
    this.userId = this.route.snapshot.params.id;

    this.service.getAll().subscribe(
      res => {
        this.grpcomp = res;
      });
    this.serComp.getAll().subscribe(
        rest => {
          this.Comp = rest;
          console.log(this.Comp);
        });
    this.GetId();
    this.GetCompetence(18);
  }
  GetId(): any
  {

    this.service.getById(this.id).subscribe(
      (res: any) => {
          this.grpcompetence = res;
      }
    );

  }

  GetCompetence(idComp: number): any
  {
    this.serComp.getById(idComp).subscribe(
      (res: any) => {
          this.result = res;
          if (this.result.niveau[0] === undefined && this.result.niveau[1] === undefined && this.result.niveau[2] === undefined) {
            this.error = 'Pas de niveau';
            this.ok = false;
          }
          else
          {
            this.ok = true;
            this.niveau1 =  this.result.niveau[0];
            this.niveau2 =  this.result.niveau[1];
            this.niveau3 =  this.result.niveau[2];
          }
      }
    );
  }

  OnDelete(id: string): any
  {
  this.serComp.delete(id).subscribe(
    () => {
      this.Comp = this.Comp.filter(
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
        confirmButtonText: 'Deleted',

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
