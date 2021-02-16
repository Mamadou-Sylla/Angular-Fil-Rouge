
export interface Utilisateur{
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    telephone: string;
    password: string;
    etat: boolean;
    token: string;
    profil: string;
    avatar: Blob;
  }


export interface Etudiant{
    firstname: string;
    lastname: string;
    email: string;
    telephone: string;
    password: string;
    etat: boolean;
    profil: [
      {
        libelle: string;
      }
    ];
    libelle: string;
  }
