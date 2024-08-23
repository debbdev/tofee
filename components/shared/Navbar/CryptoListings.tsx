import { useEffect, useState } from "react";
import axios from "axios";

interface USDQuote {
  price: number;
}

interface Quote {
  timestamp: string;
  quote: {
    USD: USDQuote;
  };
}

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  is_active: number;
  is_fiat: number | null;
  quotes: Quote[];
}

const CryptoListings = () => {
  const [data, setData] = useState<CryptoData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/liveTicker");
        const responseData = response.data;

        if (!responseData || !responseData.data) {
          throw new Error("Failed to fetch data");
        }

        const cryptoArray: CryptoData[] = Object.keys(responseData.data).map(
          (key) => {
            const crypto = responseData.data[key];
            const quotes: Quote[] = crypto.quotes.map((q: any) => ({
              timestamp: q.timestamp,
              quote: {
                USD: {
                  price: q.quote.USD.price,
                },
              },
            }));

            return {
              id: crypto.id.toString(),
              name: crypto.name,
              symbol: crypto.symbol,
              is_active: crypto.is_active,
              is_fiat: crypto.is_fiat,
              quotes,
            };
          }
        );

        setData(cryptoArray);
      } catch (error: any) {
        setError(error.message || "An error occurred");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-start gap-5">
      {data.length > 0 ? (
        <ul>
          {data.map((crypto) => (
            <li key={crypto.id}>
              <strong>
                {crypto.name} ({crypto.symbol})
              </strong>
              <ul>
                {crypto.quotes.map((quote, index) => (
                  <li key={index}>
                    Price: {quote.quote.USD.price} USD - Last Updated on:{" "}
                    {new Date(quote.timestamp).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default CryptoListings;
