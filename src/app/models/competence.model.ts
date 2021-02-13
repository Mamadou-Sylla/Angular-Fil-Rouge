

export class Competence
{
    id: number | undefined;
    libelle: string | undefined;
    niveau: [
        {
            libelle: string | undefined;
            critereEvalution: string | undefined;
            groupeAction: string | undefined;
        }
    ] | undefined;
  }
