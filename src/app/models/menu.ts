
export interface Menu {
  label: string;
  icon: string;
  url: string;
  active: boolean;
}

export interface SideMenu{
  label: string;
  icon: string;
  url: string;
  active: boolean;
  child: Menu[] | null | undefined ;
}
