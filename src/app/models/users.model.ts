export class UserModel{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  telephone: string;
  etat: boolean;
  token: string;

 constructor(id: number,
             firstname: string,
             lastname: string,
             email: string,
             telephone: string,
             etat: boolean,
             token: string) {
   this.id = id;
   this.firstname = firstname;
   this.lastname = lastname;
   this.email = email;
   this.telephone = telephone;
   this.etat = etat;
   this.token = token;

 }

}
