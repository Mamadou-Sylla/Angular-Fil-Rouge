
export class Referentiel{
    id: number | undefined;
    libelle: string | undefined;
    presentation: string | undefined;
    programme: Blob | undefined;
    critereAdmission: string | undefined;
    critereEvaluation: string | undefined;
    groupecompetence:
    [
        {
          id: number;
          libelle: string;
          descriptif: string;
          competence: [];
        }
      ] | undefined;
  }

