import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DefaultComponent } from './default/default.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilComponent } from './profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { ProfilsSortieComponent } from './profils-sortie/profils-sortie.component';
import { AddProfilSortieComponent } from './profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { ListProfilSortieComponent } from './profils-sortie/list-profil-sortie/list-profil-sortie.component';
import { EditProfilSortieComponent } from './profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { LogoutComponent } from './logout/logout.component';
import { CompetenceComponent } from './competence/competence.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { GroupeCompetenceComponent } from './groupe-competence/groupe-competence.component';
import { AddGroupeCompetenceComponent } from './groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { ListGroupeCompetenceComponent } from './groupe-competence/list-groupe-competence/list-groupe-competence.component';
import { EditGroupeCompetenceComponent } from './groupe-competence/edit-groupe-competence/edit-groupe-competence.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { FormateurComponent } from './formateur/formateur.component';
import { CmComponent } from './cm/cm.component';
import { AuthService } from './services/auth.service';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { InterceptorService } from './services/interceptor.service';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { InterceptorService } from './services/interceptor.service';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import {AutocompleteLibModule} from 'angular-ng-autocomplete';
// import {NgAutoCompleteModule} from 'ng-auto-complete';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';









@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DefaultComponent,
    UsersComponent,
    AdminComponent,
    ProfilComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    ListProfilComponent,
    AddProfilComponent,
    EditProfilComponent,
    ProfilsSortieComponent,
    AddProfilSortieComponent,
    ListProfilSortieComponent,
    EditProfilSortieComponent,
    LogoutComponent,
    CompetenceComponent,
    AddCompetenceComponent,
    ListCompetenceComponent,
    EditCompetenceComponent,
    GroupeCompetenceComponent,
    AddGroupeCompetenceComponent,
    ListGroupeCompetenceComponent,
    EditGroupeCompetenceComponent,
    ApprenantComponent,
    FormateurComponent,
    CmComponent,
    ReferentielComponent,
    AddReferentielComponent,
    ListReferentielComponent,
    EditReferentielComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule
    // AutocompleteLibModule,
    // NgAutoCompleteModule
    // AngularMultiSelectModule
  ],

  providers: [
    AuthService,
   {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
