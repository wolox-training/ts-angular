export class User {
  constructor(private firstName: string, private lastName: string, private email: string, private password: string, private confirmPassword: string) {
    this.firstName: = firstName;
    this.lastName: = lastName;
    this.email: = email;
    this.password: = password;
    this.confirmPassword: = confirmPassword;
    this.locale = "en";
  }
}
