import { Address } from "./Address";

export interface Employee {
  id: number;
  name: string;
  first: string;
  lastname: string;
  // birthdate: Date;
  birthdate: string;
  phone: string;
  address: Address;
}
