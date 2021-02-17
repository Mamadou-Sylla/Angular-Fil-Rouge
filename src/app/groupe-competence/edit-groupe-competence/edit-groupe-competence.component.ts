import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { GrpCompetence } from 'src/app/models/groupe-competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';

@Component({
  selector: 'app-edit-groupe-competence',
  templateUrl: './edit-groupe-competence.component.html',
  styleUrls: ['./edit-groupe-competence.component.scss']
})
export class EditGroupeCompetenceComponent implements OnInit {

  grpcomp: GrpCompetence[] | any;

  isUpdate = false;
  userId: number | any;
  routes: Router | any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings | any;

  data: GrpCompetence[] = [];
  tmp = [];
  cpt = [];
  result = [];

  constructor(private servicesComp: CompetenceService,
              private services: GroupeCompetenceService,
              private route: ActivatedRoute, private http: HttpClient) { }


  ngOnInit(): void {

    this.userId = this.route.snapshot.params.id;
    this.services.getById(this.userId).subscribe(
      (res: any) => {
        // console.log(res);
        this.grpcomp = res;
        this.result = this.grpcomp.competence;
       // console.log(this.result);
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.result.length; j++) {
          // this.tmp.push({ id: res[i].id, libelle: res[i].libelle });
          // console.log(this.result[i].libelle);
          this.cpt.push({ id: '/api/admin/competences/' + this.result[j].id, libelle: this.result[j].libelle});
        }
      });

    this.servicesComp.getAll().subscribe(
      ok => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < ok.length; i++) {
          // this.tmp.push({ id: res[i].id, libelle: res[i].libelle });
          this.tmp.push({ id: '/api/admin/competences/' + ok[i].id, libelle: ok[i].libelle});
        }
        this.dropdownList = this.tmp;
        this.selectedItems = this.cpt;
       // console.log( this.selectedItems);
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
       textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };
}

onItemSelect(item: any): any
{
  console.log(item);
}
onSelectAll(items: any): any
{
  console.log(items);
}


OnSubmit(form: NgForm): any

{
    this.data.libelle = form.value.libelle;
    this.data.descriptif = form.value.descriptif;
    this.data.competence = form.value.competence;
    this.data.competence.push({libelle: form.value.competences});
   // console.log(this.data);
    const id = this.userId;
    this.services.update(this.data, id).subscribe(
        (res: any) => {
          console.log(res);
          this.data.id = id;
          return this.data;
      });
    location.reload();
  }
// tslint:disable-next-line:no-unused-expression
}
