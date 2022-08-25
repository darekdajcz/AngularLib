export class RegisterAccountDto {
  firstName: string;
  secondName: string;
  email: string;
  password: string;

  constructor(firstName: string, secondName: string, email: string, password: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.email = email;
    this.password = password;
  }
}
