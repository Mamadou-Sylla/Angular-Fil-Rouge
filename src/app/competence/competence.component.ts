import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GrpCompetence } from '../models/groupe-competence.model';
import { GroupeCompetenceService } from '../services/groupe-competence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  grpcomp: GrpCompetence[] | any;

  constructor(private service: GroupeCompetenceService, private router: Router) { }

  ngOnInit(): any {
    this.service.getAll().subscribe(
      res => {
        this.grpcomp = res;
        console.log(this.grpcomp);
      });
  }

}
