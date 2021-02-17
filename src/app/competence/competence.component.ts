import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrpCompetence } from '../models/groupe-competence.model';
import { CompetenceService } from '../services/competence.service';
import { GroupeCompetenceService } from '../services/groupe-competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  grpcomp: GrpCompetence[] | any;
  userId: number | any;
  id = 8 ;
  grpcompetence: any;
  result: any;
  idComp: number | any;
  niveau1: any;
  niveau2: any;
  niveau3: any;
  error: any;

  constructor(private service: GroupeCompetenceService, private route: ActivatedRoute, private serComp: CompetenceService) { }

  ngOnInit(): any {
    this.userId = this.route.snapshot.params.id;

    this.service.getAll().subscribe(
      res => {
        this.grpcomp = res;
      });
    this.GetId();
    this.GetCompetence(this.idComp);
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
          }
          this.niveau1 =  this.result.niveau[0];
          this.niveau2 =  this.result.niveau[1];
          this.niveau3 =  this.result.niveau[2];
      }
    );
  }

  OnDelete(ok: string): any
  {

  }
}
