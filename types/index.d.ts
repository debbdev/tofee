export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface Payment {
  id: string;
  info: string;
  date: string;
  resource: number;
  price: number;
  payout: number;
  fullfilled: number;
  sell: string;
}
export interface Logos {
  imgURL: string;
  route: string;
  label: string;
}

export interface Transactions {
  info: string;
  buyer: string;
  exchange: string;
  energy: string;
  date: string;
  payout: string;
  status: string;
}
export interface FAQ {
  id: string;
  title: string;
  body: string;
}

export interface Blogs {
  id: number;
  heading: string;
  blogText: string;
  img: string;
  time: string;
}
