import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Competence } from 'src/app/models/competence.model';
import { GrpCompetence } from 'src/app/models/groupe-competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

  grpcomp: GrpCompetence[] | any;
  data = {
    libelle: '',
    niveau:
    [
      /*libelle:'',
      critereEvalution:'',
      groupeAction:''*/
    ],
    groupecompetence: 0
  };

  constructor(private service: CompetenceService, private router: Router, private servicesGrpComp: GroupeCompetenceService) { }


  ngOnInit(): void {
    this.servicesGrpComp.getAll().subscribe(
      res => {
        this.grpcomp = res;
      });
  }


  OnSubmit(form: NgForm): any
  {
   // console.log(form.value.libelle1);
   this.data.libelle = form.value.libelle;
   this.data.groupecompetence = form.value.groupeCompetence;
   this.data.niveau.push({libelle: form.value.libelle1 , critereEvalution: form.value.critereEvalution1,
    groupeAction: form.value.groupeAction1});
   this.data.niveau.push({libelle: form.value.libelle2, critereEvalution: form.value.critereEvalution2,
      groupeAction: form.value.groupeAction2});
   this.data.niveau.push({libelle: form.value.libelle3, critereEvalution: form.value.critereEvalution3,
        groupeAction: form.value.groupeAction3});
   console.log(this.data);
   this.service.create(this.data).subscribe(
    (res: any) => console.log(res)
);
   location.reload();
  }
}
