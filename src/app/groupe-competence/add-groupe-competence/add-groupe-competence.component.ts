import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Competence } from 'src/app/models/competence.model';
import { CompetenceService } from 'src/app/services/competence.service';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutoCompleteComponent} from 'ng-auto-complete';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';


@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.scss']
})
export class AddGroupeCompetenceComponent implements OnInit {

  competence: Competence[] | any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings | any;
  tmp = [];
  data = {
    libelle: '',
    descriptif: '',
    competence:
    [
      {
        libelle: ''
      }
    ],
    groupecompetence: 0
  };

  constructor(private service: CompetenceService, private router: Router, private servicesGrpComp: GroupeCompetenceService) { }


  ngOnInit(): void {
    this.service.getAll().subscribe(
      res => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < res.length; i++) {
          // this.tmp.push({ id: res[i].id, libelle: res[i].libelle });
          this.tmp.push({ id: '/api/admin/competences/' + res[i].id, libelle: res[i].libelle});
        }
        this.dropdownList = this.tmp;
        /*this.competence = res;
        console.log(this.competence);*/
      });

    // this.dropdownList = this.competence;

    this.dropdownSettings = {
        singleSelection: false,
        idField: 'id',
         textField: 'libelle',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: true
      };
  }

  onItemSelect(item: any): any {
    console.log(item);
  }
  onSelectAll(items: any): any {
    console.log(items);
  }

  OnSubmit(form: NgForm): any {
  this.data.libelle = form.value.libelle;
  this.data.descriptif = form.value.descriptif;
  this.data.competence = form.value.competence;
  this.data.competence.push({libelle: form.value.competences});
  console.log(this.data);
  this.servicesGrpComp.create(this.data).subscribe(
    (res: any) => console.log(res)
);
  location.reload();
  }
}
