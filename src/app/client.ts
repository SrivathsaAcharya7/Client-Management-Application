export class Client {
  id: number = 0;
  ClientName: string = '';
  Address: string = '';
  Email: string = '';
  Password: string = '';

  constructor(
    id: number,
    clientname: string,
    address: string,
    email: string,
    password: string
  ) {
    this.id = id;
    this.ClientName = clientname;
    this.Address = address;
    this.Email = email;
    this.Password = password;
  }
}
