import { Address } from "./Address";

export interface Employee {
  Id: number;
  Name: string;
  First: string;
  Lastname: string;
  Birthdate: Date;
  Phone: string;
  Address: Address;
}
