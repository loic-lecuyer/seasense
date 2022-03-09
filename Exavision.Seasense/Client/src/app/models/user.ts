export enum Role {
  User = "User"
  , Admin = "Admin"
  , Sav = "Sav"

}
export class User {
  public id: string = "";
  public login: string = "";
  public passwordHash: string = "";
  public role: Role = Role.User;
 
}
