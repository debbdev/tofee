import {
  SidebarLink,
  Payment,
  Logos,
  EmbeddedTweet,
  Transactions,
} from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
];
export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/icons/users.svg",
    route: "/energy-exchange",
    label: "Energy exchange",
  },
  {
    imgURL: "/assets/icons/star.svg",
    route: "/currency-exchange",
    label: "Currency exchange",
  },
  {
    imgURL: "/assets/icons/suitcase.svg",
    route: "/about-us",
    label: "About us",
  },
  {
    imgURL: "/assets/icons/tag.svg",
    route: "/latest-transaction",
    label: "Latest transaction",
  },
  {
    imgURL: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/icons/question.svg",
    route: "/freq-asked-question",
    label: "Frequently Asked question",
  },
];

export const payments: Payment[] = [
  {
    id: "728ed52f",
    info: "i",
    date: "02-03-2024",
    resource: 300000,
    price: 100,
    payout: 500,
    fullfilled: 80,
    sell: "sell",
  },
  {
    id: "489e1d42",
    info: "i",
    date: "02-03-2024",
    resource: 200000,
    price: 100,
    payout: 500,
    fullfilled: 72,
    sell: "sell",
  },
  {
    id: "m5gr84i9",
    info: "i",
    date: "02-03-2024",
    resource: 100000,
    price: 100,
    payout: 500,
    fullfilled: 61,
    sell: "sell",
  },
  {
    id: "3u1reuv4",
    info: "i",
    date: "02-03-2024",
    resource: 400000,
    price: 100,
    payout: 500,
    fullfilled: 51,
    sell: "sell",
  },
  {
    id: "derv1ws0",
    info: "i",
    date: "02-03-2024",
    resource: 100000,
    price: 100,
    payout: 500,
    fullfilled: 19,
    sell: "sell",
  },
  {
    id: "5kma53ae",
    info: "i",
    // info: [
    //   {
    //     date: "02-03-2024",
    //     resource: 300000,
    //     price: 100,
    //     payout: 500,
    //     fullfilled: 80,
    //   },
    // ],
    date: "02-03-2024",
    resource: 100000,
    price: 100,
    payout: 500,
    fullfilled: 30,
    sell: "sell",
  },
  {
    id: "bhqecj4p",
    info: "i",
    date: "02-03-2024",
    resource: 100000,
    price: 100,
    payout: 500,
    fullfilled: 20,
    sell: "sell",
  },
  // ...
];
// export const columns: ColumnDef<Payment>[] = [
//   {
//     accessorKey: "info",
//     header: "Info",
//   },
//   {
//     accessorKey: "date",
//     header: "Date",
//   },
//   {
//     accessorKey: "resource",
//     header: "Resource",
//   },
//   {
//     accessorKey: "price",
//     header: "Price",
//   },
//   {
//     accessorKey: "payout",
//     header: "Payout",
//   },
//   {
//     accessorKey: "fullfilled",
//     header: "Fullfilled",
//   },
//   {
//     accessorKey: "sell",
//     header: "Status",
//   },
// ];
export const logo: Logos[] = [
  {
    imgURL: "assets/icons/vechain.svg",
    route: "/",
    label: "Vechain",
  },
  {
    imgURL: "assets/icons/iota.svg",
    route: "/",
    label: "Iota",
  },
  {
    imgURL: "assets/icons/toncoin.svg",
    route: "/",
    label: "Toncoin",
  },
  {
    imgURL: "assets/icons/tether.svg",
    route: "/",
    label: "Tether",
  },
  {
    imgURL: "assets/icons/kuCoin.svg",
    route: "/",
    label: "KuCoin",
  },
  {
    imgURL: "assets/icons/dash.svg",
    route: "/",
    label: "Dash",
  },
  {
    imgURL: "assets/icons/bitTorrent.svg",
    route: "/",
    label: "BitTorrent",
  },
  {
    imgURL: "assets/icons/busd.svg",
    route: "/",
    label: "Busd",
  },
];
export const embeddedTweet: EmbeddedTweet[] = [
  {
    url_id: "1366310778450702341",
  },
  {
    url_id: "1630172663413977090",
  },
  {
    url_id: "1366313947134050307",
  },
  {
    url_id: "1366312381396246531",
  },
  {
    url_id: "1366310778450702341",
  },
];
export const transactions: Transactions[] = [
  {
    buyer: "TVcN *** 5qRT",
    info: "i",
    exchange: "TRX To Energy",
    energy: "65600",
    date: "2024-07-12",
    payout: "32,300",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-07-08",
    payout: "42,500",
    status: "completed",
  },
];
export const columns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "info",
    header: "Info",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "buyer",
    header: "Buyer",
  },
  {
    accessorKey: "exchange",
    header: "Exchange",
  },
  {
    accessorKey: "energy",
    header: "Energy",
  },
  {
    accessorKey: "payout",
    header: "Payout",
  },

  {
    accessorKey: "status",
    header: "Status",
  },
];
// export const embeddedTweet: EmbeddedTweet[] = [
//   {
//     url_id:
//       "https://publish.twitter.com/oembed?url=https://x.com/chimhak/status/1366310778450702341",
//   },
//   {
//     url_id:
//       "https://publish.twitter.com/oembed?url=https://x.com/chimhak/status/1630172663413977090",
//   },
//   {
//     url_id:
//       "https://publish.twitter.com/oembed?url=https://x.com/chimhak/status/1366313947134050307",
//   },
//   {
//     url_id:
//       "https://publish.twitter.com/oembed?url=https://x.com/chimhak/status/1366312381396246531",
//   },
//   {
//     url_id:
//       "https://publish.twitter.com/oembed?url=https://x.com/chimhak/status/1366310778450702341",
//   },
// ];
