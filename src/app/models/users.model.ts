export class UserModel{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  etat: boolean;
  token: string;
  password: string;
  profil: string;
  avatar: Blob;

 constructor(id: number,
             firstname: string,
             lastname: string,
             email: string,
             etat: boolean,
             token: string,
             password: string,
             telephone: string,
             profil: string,
             avatar: Blob,
             ) {
   this.id = id;
   this.firstname = firstname;
   this.lastname = lastname;
   this.email = email;
   this.telephone = telephone;
   this.etat = etat;
   this.password = password;
   this.profil = profil;
   this.avatar = avatar;
   this.token = token;
 }

}


export interface User{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  etat: boolean;
  token: string;
  password: string;
  profil: string;
  avatar: Blob;
 }
