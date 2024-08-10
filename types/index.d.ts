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

// export interface TwitterInfo {
//   id: string;
//   name: string;
//   username: string;
//   text: string;
//   profileImageURL: string;
//   description: string;
// }
export interface EmbeddedTweet {
  url_id: string;
}

export interface TweetData {
  id: string;
  html: string;
  author_name: string;
  author_url: string;
}
export interface TwitterInfo {
  name: string;
  username: string;
  text: string;
}
