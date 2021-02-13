export class ReferentielModel{
    id: number;
    libelle: string;
    presentation: string;
    programme: Blob;
    // tslint:disable-next-line:variable-name
    critere_admission: string;
    // tslint:disable-next-line:variable-name
    critere_evaluation: string;

    constructor(id: number,
                libelle: string,
                presentation: string,
                programme: Blob,
                // tslint:disable-next-line:variable-name
                critere_admission: string,
                // tslint:disable-next-line:variable-name
                critere_evaluation: string
    ) {
      this.id = id;
      this.libelle = libelle;
      this.presentation = presentation;
      this.programme = programme;
      this.critere_admission = critere_admission;
      this.critere_evaluation = critere_evaluation;
    }

  }

export interface Referentiel{
   id: number;
    libelle: string;
    presentation: string;
    programme: Blob;
    critere_admission: string;
    critere_evaluation: string;
  }
