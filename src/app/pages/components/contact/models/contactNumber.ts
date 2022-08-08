export interface ContactNumber{
  Id: number;
  Name: string;
  Value: string;
  ContactId: string;
}


export interface  Type{
   Name: string;
}


export const TypeData: Type[] = [
    {
      Name: 'Mobile'
    },
    {
      Name: 'Home'
    },
    {
      Name: 'Office'
    },
    {
      Name: 'Fax'
    }
]
