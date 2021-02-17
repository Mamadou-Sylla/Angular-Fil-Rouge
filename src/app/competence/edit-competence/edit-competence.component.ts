import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompetenceService } from 'src/app/services/competence.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {
  userId: any;
  result: any;
  data = {
    libelle: '',
    niveau:
    [
      /*libelle:'',
      critereEvalution:'',
      groupeAction:''*/
    ]
  };
  niveau1: any;
  niveau2: any;
  niveau3: any;

  constructor(private services: CompetenceService,
              private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params.id;
    this.services.getById(this.userId).subscribe(
      (res: any) => {
        this.result = res;
        this.niveau1 =  this.result.niveau[0]; console.log( this.niveau1);
        this.niveau2 =  this.result.niveau[1]; console.log( this.niveau2);
        this.niveau3 =  this.result.niveau[2]; console.log( this.niveau3);
  });
  }

  OnSubmit(form: NgForm): any
  {
      // console.log(form.value.libelle1);
  this.data.libelle = form.value.libelle;
  this.data.niveau.push({libelle: form.value.libelle1 , critereEvalution: form.value.critereEvalution1,
    groupeAction: form.value.groupeAction1});
  this.data.niveau.push({libelle: form.value.libelle2, critereEvalution: form.value.critereEvalution2,
      groupeAction: form.value.groupeAction2});
  this.data.niveau.push({libelle: form.value.libelle3, critereEvalution: form.value.critereEvalution3,
        groupeAction: form.value.groupeAction3});
  const id = this.userId;
  this.services.update(this.data, id).subscribe(
    (res: any) => {
      this.data.id = id;
      console.log(this.data);
      return this.data;
  });
  }

}
