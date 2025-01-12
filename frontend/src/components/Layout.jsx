import Card from "./Card";
import Header from "./Header";
import Performance from "./Performance";
import ScrollablePane from "./ScrollablePane";
import Sentiment from "./Sentiment";
import About from "./About";
import Team from "./Team";
import SignUp from "./SignUp";
import Trending from "./Trending";
import Widget from "./Widget";
import Tokenomics from "./Tokenomics";
import { useEffect, useState } from "react";

const ResponsiveLayout = () => {
  const [priceData, setPriceData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true&x_cg_demo_api_key=${apiKey}`;

    console.log("Fetching data...");
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("API call failed");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setPriceData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!priceData || !priceData.bitcoin) {
    return <div>No data available</div>;
  }

  const { inr = 0, inr_24h_change = 0, usd = 0 } = priceData.bitcoin;

  return (
    <div>
      <Header />
      <div className="px-6 lg:px-20 mt-3">
        <h4 className="text-sm"> Cryptocurrencies {">>"} Bitcoin </h4>
        <div className="lg:bg-white">
          <div className="flex px-12 pt-5">
            <img src="/logo.png" alt="Bitcoin logo" />
            <h3 className="text-xl font-semibold">Bitcoin</h3>
            <h4 className="text-sm h-full">BTC</h4>
            <div className="bg-rank text-white text-base">Rank #1</div>
          </div>

          <div className="container lg:px-4 lg:bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="lg:px-6 py-3 order-1 lg:order-1 lg:col-span-2">
                <Card>
                  <div className="flex">
                    <h2 className="text-3xl font-semibold mb-4">${usd.toLocaleString()}</h2>
                    <div className="bg-priceBg text-priceText text-base">
                      {inr_24h_change.toFixed(2)}%
                    </div>
                    <div className="text-sm">(24h)</div>
                  </div>
                  <p className="text-base font-medium">₹{inr.toLocaleString()}</p>
                  <div className="w-full">
                    <Widget />
                  </div>
                </Card>
                <ScrollablePane />
                <Performance usd={usd}/>
                <Sentiment />
                <About />
                <Team />
                <div className="hidden lg:block">
                  <Tokenomics />
                </div>
              </div>

              <div className="py-3 lg:p-6 order-3 lg:order-2">
                <SignUp />
                <Trending />
              </div>

              <div className="py-3 lg:p-6 order-2 lg:order-3 lg:col-span-3">
                <Card>
                  <h2 className="text-xl font-bold mb-4">Third Component</h2>
                  <p>This component appears between the other two on mobile, and as a footer on desktop.</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveLayout;