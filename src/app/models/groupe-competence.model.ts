

export class GrpCompetence{
    id: number | undefined;
    libelle: string | undefined;
    descriptif: string | undefined;
    competence:
       [
         {
          id: number;
          libelle: string;
          niveau: [];
        }
      ]
     | undefined;
    tag: string | undefined;
  }
