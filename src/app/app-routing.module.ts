import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { AuthComponent } from './auth/auth.component';
import { CmComponent } from './cm/cm.component';
import { AddCompetenceComponent } from './competence/add-competence/add-competence.component';
import { CompetenceComponent } from './competence/competence.component';
import { EditCompetenceComponent } from './competence/edit-competence/edit-competence.component';
import { ListCompetenceComponent } from './competence/list-competence/list-competence.component';
import { DefaultComponent } from './default/default.component';
import { FormateurComponent } from './formateur/formateur.component';
import { AddGroupeCompetenceComponent } from './groupe-competence/add-groupe-competence/add-groupe-competence.component';
import { EditGroupeCompetenceComponent } from './groupe-competence/edit-groupe-competence/edit-groupe-competence.component';
import { GroupeCompetenceComponent } from './groupe-competence/groupe-competence.component';
import { ListGroupeCompetenceComponent } from './groupe-competence/list-groupe-competence/list-groupe-competence.component';
import { LayoutComponent } from './layout/layout.component';
import { LogoutComponent } from './logout/logout.component';
import { AddProfilComponent } from './profil/add-profil/add-profil.component';
import { EditProfilComponent } from './profil/edit-profil/edit-profil.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { ProfilComponent } from './profil/profil.component';
import { AddProfilSortieComponent } from './profils-sortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './profils-sortie/edit-profil-sortie/edit-profil-sortie.component';
import { ListProfilSortieComponent } from './profils-sortie/list-profil-sortie/list-profil-sortie.component';
import { ProfilsSortieComponent } from './profils-sortie/profils-sortie.component';
import { AddReferentielComponent } from './referentiel/add-referentiel/add-referentiel.component';
import { EditReferentielComponent } from './referentiel/edit-referentiel/edit-referentiel.component';
import { ListReferentielComponent } from './referentiel/list-referentiel/list-referentiel.component';
import { ReferentielComponent } from './referentiel/referentiel.component';
import { AddUsersComponent } from './users/add-users/add-users.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: AuthComponent
  },
  {
      path: 'default',
      component: DefaultComponent,
      children: [
          {
          path: 'layout',
          component: LayoutComponent
        },
        {
          path: 'admin',
          component: AdminComponent
        },
        {
          path: 'profils',
          component: ProfilComponent,
          children: [
            {
              path: 'edit',
              component: EditProfilComponent
            }
          ]
        },
        {
          path: 'users',
          component: UsersComponent,
        },
        {
          path: 'users/list',
          component: ListUsersComponent
        },
        {
          path: 'users/list/add-user',
          component: AddUsersComponent
        },
        {
          path: 'users/list/edit-user',
          component: EditUsersComponent
        },
        {
          path: 'profils/list',
          component: ListProfilComponent
        },
        {
          path: 'profils/add-profil',
          component: AddProfilComponent
        },
        {
          path: 'profil-sortie',
          component: ProfilsSortieComponent,
          children: [
            {
              path: 'edit',
            component: EditProfilSortieComponent
            }
          ]
        },
        {
          path: 'profil-sortie/list',
        component: ListProfilSortieComponent
        },
        {
          path: 'profil-sortie/add',
        component: AddProfilSortieComponent
        },
        {
          path: 'competence',
          component: CompetenceComponent,
          children: [
              {
                path: 'list',
              component: ListCompetenceComponent
              },
              {
                path: 'edit',
              component: EditCompetenceComponent
              }
          ]
        },
        {
          path: 'competence/add',
        component: AddCompetenceComponent
        },
        {
          path: 'grpecompetence',
          component: GroupeCompetenceComponent,
        },
        {
          path: 'grpecompetence/list',
        component: ListGroupeCompetenceComponent
        },
        {
          path: 'grpecompetence/edit',
        component: EditGroupeCompetenceComponent
        },
        {
          path: 'grpecompetence/add',
        component: AddGroupeCompetenceComponent
        },
        {
          path: 'logout',
        component: LogoutComponent
        },
        {
          path: 'formateur',
        component: FormateurComponent
        },
        {
          path: 'apprenant',
        component: ApprenantComponent
        },
        {
          path: 'cm',
        component: CmComponent
        },
        {
          path: 'referentiel',
        component: ReferentielComponent
        },
        {
          path: 'referentiel/add',
        component: AddReferentielComponent
        },
        {
          path: 'referentiel/list',
        component: ListReferentielComponent
        },
        {
          path: 'referentiel/edit',
        component: EditReferentielComponent
        }
    ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
