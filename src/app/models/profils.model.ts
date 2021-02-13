export class ProfilModel{
  id: number;
  libelle: string;
  // tslint:disable-next-line:variable-name
  is_deleted: boolean;


  constructor(id: number,
              libelle: string,
              // tslint:disable-next-line:variable-name
              is_deleted: boolean
  ) {
   this.id = id;
   this.libelle = libelle;
   this.is_deleted = is_deleted;
  }



}

export interface Profil{
  id: number;
  libelle: string;
  is_deleted: boolean;
}

export interface Profile{
  libelle: string;
  is_deleted: boolean;
  etat: boolean;
}
