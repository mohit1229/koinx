import { Fragment, useState, useEffect } from "react";
import { TrendingUp } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Coin = ({ name, percent }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-medium text-base">{name}</h3>
      <div className="bg-lightGreen p-2 rounded">
        <h3 className="font-medium text-base text-priceText">{percent}%</h3>
      </div>
    </div>
  );
};

const Trending = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;

      const url = `https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=${apiKey}`;
      const options = {
        method: "GET",
        headers: { accept: "application/json" },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Failed to fetch trending coins");
        }
        const data = await response.json();
        setTrendingCoins(data.coins.slice(0, 3)); // Display the top 3 trending coins
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (isLoading) {
    return <div className="p-4">Loading trending coins...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  return (
    <Fragment>
      <div className="bg-white px-4 py-6 rounded-lg shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="text-gray-600" size={24} />
          <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
        </div>
        {trendingCoins.map((coin) => (
          <Coin
            key={coin.item.id}
            name={`${coin.item.name} (${coin.item.symbol.toUpperCase()})`}
            percent={
              coin.item.price_btc
                ? (coin.item.price_btc * 100).toFixed(2)
                : "N/A"
            }

            
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Trending;
