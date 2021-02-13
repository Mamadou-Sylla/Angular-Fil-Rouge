export class ProfilSortieModel{
  id: number;
  libelle: string;
  deleted: boolean;


  constructor(id: number,
              libelle: string,
              // tslint:disable-next-line:variable-name
              deleted: boolean
  ) {
    this.id = id;
    this.libelle = libelle;
    this.deleted = deleted;
  }



}

export interface ProfilSortie{
  id: number;
  libelle: string;
  deleted: boolean;
}


export interface ProfilSorties{
  libelle: string;
  deleted: boolean;
}
