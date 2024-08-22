import { useEffect, useState } from "react";

interface CryptoData {
  id: string;
  name: string;
  symbol: string;
  // Add other fields
}

const CryptoListings = () => {
  const [data, setData] = useState<CryptoData[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/crypto/listings");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.data || []);
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
      {data ? (
        <ul>
          {data.map((crypto) => (
            <li key={crypto.id}>
              {crypto.name} ({crypto.symbol})
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
