import {ContactNumber} from './contactNumber';

export interface Contact{
  Id: string;
  Name: string;
  LastName: string;
  Email: string;
  Numbers: ContactNumber[];
}
