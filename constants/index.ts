import {
  SidebarLink,
  Payment,
  Logos,
  Transactions,
  FAQ,
  Blogs,
  TransactionsData,
  TransferData,
} from "@/types";
import { ColumnDef } from "@tanstack/react-table";
type CombinedData = TransactionsData | TransferData;
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
    route: "/support",
    label: "Support",
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
export const transactions: Transactions[] = [
  {
    buyer: "TVcN *** 5qRT",
    info: "i",
    exchange: "TRX To Energy",
    energy: "65600",
    date: "2024-08-18",
    payout: "32,300",
    status: "70",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-17",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-17",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-17",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-17",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-17",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-16",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-16",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-16",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-16",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-16",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-15",
    payout: "42,500",
    status: "100",
  },
  {
    buyer: "TAAQ *** g1d2",
    info: "i",
    exchange: "TRX To Energy",
    energy: "85600",
    date: "2024-08-15",
    payout: "42,500",
    status: "100",
  },
];
export const columns: ColumnDef<CombinedData>[] = [
  {
    accessorKey: "token_logo",
    header: "Info",
  },

  {
    accessorKey: "timestamp",
    header: "Date",
    cell: ({ row }) =>
      new Date(row.original.timestamp).toLocaleString().replace(",", ""),
  },
  {
    accessorKey: "ownerAddress",
    header: "Buyer",
    cell: ({ row }) =>
      row.original.ownerAddress || row.original.transferFromAddress || "N/A",
  },
  {
    accessorKey: "exchange",
    header: "Exchange",
    cell: ({ row }) =>
      row.original.tokenInfo.tokenName.toUpperCase() + " To Energy",
  },
  {
    accessorKey: "energy",
    header: "Energy",
    cell: ({ row }) =>
      row.original.cost?.net_fee !== undefined
        ? row.original.cost.net_fee
        : "N/A",
  },
  {
    accessorKey: "amount",
    header: "Payout",
  },

  {
    accessorKey: "confirmed",
    header: "Status",
  },
];

export const faq: FAQ[] = [
  {
    id: "1",
    title: "What is FeeTrx.net?",
    body: "FeeTrx is an energy exchange platform within the TRON ecosystem, designed to reduce the TRX fees required for energy consumption during transactions. We provide highly concurrent rental energy (Tron API) access, ensuring cost-effective and efficient energy exchanges for TRON traders.",
  },
  {
    id: "2",
    title: "How does FeeTrx help reduce TRX fees?",
    body: "Our platform operates an energy pool of about 200 million, and it's continually growing. By accessing this energy pool, traders can reduce the amount of TRX spent on transaction fees, offering a more cost-effective solution for energy consumption.",
  },
  {
    id: "3",
    title: "What types of transactions are supported by FeeTrx?",
    body: "FeeTrx supports USDT transfers and contract transactions within the TRON network. It is designed to save money for TRON users by reducing energy costs.",
  },
  {
    id: "4",
    title: "What tools does FeeTrx offer for easy energy management?",
    body: "We offer a self-service energy purchase option via the website www.feetrx.net, allowing users to purchase energy in batches with just one click. The process is simple, fast, and efficient.",
  },
  {
    id: "5",
    title: "How can I purchase energy through FeeTrx?",
    body: "To purchase energy: Estimate your daily transaction volume.  Transfer TRX or USDT to the designated billing address provided on the platform.",
  },
  {
    id: "6",
    title: "What are the benefits of using FeeTrx for energy exchange?",
    body: " Cost Savings: FeeTrx helps you save on transaction fees by utilizing our energy pool.  Fast and Convenient: The purchase process is streamlined, making it quick and easy.  24/7 Service: Energy exchange services are available around theclock.  Secure: We ensure a safe platform for all your transactions.",
  },
  {
    id: "7",
    title: "Who can use FeeTrx?",
    body: "FeeTrx is available to all TRON users who want to reduce their TRX fees during energy-consuming transactions.",
  },
];

export const blogs: Blogs[] = [
  {
    id: 1,
    time: "1 day",
    img: "/assets/images/blog.jpeg",
    heading: "USDT Transfer Energy Rental: FAQs and Important Information",
    blogText:
      "1. How does FeeTrx&#39;s Energy Rental Platform help reduce USDT transaction fees? Normally, when transferring USDT, users are charged almost 14 TRX or 28 TRX as a transaction fee if their account doesn’t have enough energy for the transaction. With FeeTrx’s Energy Rental Platform, you can rent 32,000 energy for just 6 TRX, which helps avoid the higher transaction fees and significantly reduces costs. 2. Why do USDT transaction fees sometimes cost 14 TRX and other times 28 TRX? The fee difference depends on whether the recipient account on the TRON network holds USDT.- If the recipient has USDT, the energy consumption is 31,895 energy (equivalent to 14 TRX). - If the recipient does not have USDT, the energy consumption is 64,895 energy(equivalent to 28 TRX). If the miner’s fee shows 14 TRX, renting 32,000 energy for 6 TRX is sufficient. For fees of 28 TRX, you’ll need to rent 64,000 energy for 6 TRX. 3. How long does it take to receive rented energy? Energy is typically distributed to your account within 6 seconds after a successful transaction. If there are any delays, you can contact the platform’s customer service for assistance. 4. Can I transfer the rented energy to someone else? No, the rented energy is automatically allocated to your payment account and cannot be transferred to other users. 5. Does the rented energy have an expiration date? Yes, FeeTrx offers 1-hour and non time limited energy rental options. When the rental period expires, any unused energy will be reclaimed. Be sure to rent energy according to your specific USDT transfer needs. Note: The prices and receiving addresses vary for 1- hour and non time limited rentals. 6. Is my wallet safe when using the FeeTrx platform? Absolutely. FeeTrx uses standard transaction methods and does not require wallet authorization, connection, or any other risky actions. Your wallet is completely secure during the energy rental process. 7. Can I get a refund for unused energy? No, FeeTrx does not offer refunds for unused energy. Once you’ve paid for the energy, the order is final. We recommend that users only rent energy based on their immediate needs to avoid any waste.8. How many transactions can I make with the rented energy in a day? There is no limit to the number of transactions you can make within a day. As long as you rent the energy in advance, you can perform multiple USDT transfers as needed throughout the rental period. 9. Is there a risk that FeeTrx will run away with my money? No, FeeTrx operates on a transparent, win-win business model where you save money by reducing transaction fees, and we earn through the energy rental. There are no upfront fees, and energy is distributed directly after you make a transfer. Rest assured, FeeTrx is committed to providing secure, reliable services.",
  },
  {
    id: 2,
    time: "2 days",
    img: "/assets/images/blog.jpeg",
    heading: "6 TRX 6 TRX 6 TRX TRC20 Transfer Fee Rates on FeeTrx FAQ",
    blogText:
      "1. What is the TRC20 Transfer Fee on the TRON Network? Due to recent upgrades on the TRON network, the energy consumption for TRC20 USDT transfers has increased. A typical TRC20 transfer now consumes around 32,000 energy, resulting in a fee of approximately 6 TRX. However, when the receiving wallet (like OKET Wallet) doesn’t have any USDT, the energy consumption increases to about 64,000 energy, leading to a fee of approximately 12 TRX. 2. Why is there a higher fee for certain TRC20 transfers? The higher fee occurs when the receiving TRC20 wallet (e.g., OKET Wallet) does not contain any USDT. In such cases, the energy consumption doubles to around 64,000 energy, resulting in a higher transfer fee of approximately 12 TRX. This is because more energy is required for the transaction to complete. 3. How can I reduce TRC20 transfer fees on the TRON Network? You can reduce TRC20 transfer fees by using FeeTrx.net&#39;s Energy Self-Rental service. With just 6 TRX, you can rent around 32,000 energy to complete a TRC20 transfer, saving you 8 TRX compared to the typical fee of 14 TRX for the same transaction without energy rental. For accounts without USDT, you can rent 64,000 energy for only 12 TRX, instead of paying 28 TRX in fees. 4. How does energy rental on FeeTrx work? FeeTrx allows users to rent energy at a much lower cost than the network&#39;s typical fees. By using our energy rental service, you can perform TRC20 transactions for a fraction of the usual price. This makes it a great solution for frequent TRON traders and those transferring USDT. 5. Is there a difference between using FeeTrx for energy rental and other platforms? Yes. FeeTrx offers a simplified energy rental process, allowing you to offset high fees easily. Our platform ensures that the rental process is fast, secure, and cost-effective. All transactions are processed in real time, and you can verify them through the live transaction feed on our website. 6. How do I get started with energy rental on FeeTrx? Simply visit FeeTrx.net and select the energy plan that suits your needs. Follow the instructions to transfer the required amount of TRX or USDT to the provided address. Once the transaction is complete, your energy will be rented instantly, allowing you to perform your TRC20 transfer at reduced fees.",
  },
  {
    id: 3,
    time: "3 days",
    img: "/assets/images/blog.jpeg",
    heading: "TRX Consumption &amp; Energy Rental FAQ on FeeTrx",
    blogText:
      "1. What is the purpose of TRON energy? Energy is used to cover transaction fees on the TRON blockchain. Without energy, TRX is consumed during transfers. A typical USDT transfer on the TRON blockchain costs approximately 13.4 TRX in energy. 2. Why is it cheaper to rent energy instead of using TRX? When you rent energy, your USDT transfer consumes the rented energy instead of TRX. This saves you from spending TRX directly, reducing the cost of transfers significantly. By renting energy, you can save more than 8 TRX per transaction compared to using TRX for fees. 3. How can I save on transaction fees? To save on fees, rent energy before performing a USDT transfer. By doing so, the transaction will use the rented energy instead of consuming TRX, allowing you to save 6-7 TRX per transfer. 4. Where can I rent energy for my TRON transactions? You can rent energy conveniently on the website at www.feetrx.net 5. What&#39;s the difference between renting energy for 1 hour and unlimited days? - 1 hour Rental: The energy expires in 24 hours. You must use the energy within this period, as it will not roll over to the next day. - unlimited Rental: You can use the energy continuously. The energy renews daily, so if you don’t use all the energy in a day, it will automatically reset for use on the following day. 6. Can I accumulate unused energy for the next day? No, you cannot accumulate unused energy. If you rent 100,000 energy for 3 days, you can only use 100,000 energy each day. It is recommended to rent for multiple days or longer periods for more efficient usage. 7. What are the TRX consumption rates for TRX and USDT transfers? - TRX Transfers: You are given 600 bandwidth per day, which allows for 2 TRX transfers for free. Each additional transfer costs 0.268 TRX. - USDT Transfers: You are also given 600 bandwidth per day, which covers 2 USDT transfers for free. Each additional transfer consumes 0.345 TRX and additional energy. 8. What are the TRX consumption rates for recipient wallets? - Recipient wallet with USDT: Consumes 345 bandwidth = 0.345 TRX and 31,895 energy = 13.7 TRX, for a total of 13.7 TRX. - Recipient wallet without USDT: Consumes 345 bandwidth = 0.345 TRX and 64,895 energy = 27.16 TRX, for a total of 27.5 TRX. 9. How does energy rental help save TRX? Instead of consuming the full amount of TRX for each transaction, you only need 6 TRX to rent enough energy for a single transfer. This reduces the transaction cost by 6-7 TRX compared to the normal fee without energy rental. 10. Can I check my energy and bandwidth usage? Yes, each wallet address can view its energy and bandwidth usage. You can also track energy consumption for each transaction hash. This transparent mechanism ensures you know exactly how much energy and TRX are being used.",
  },
];
