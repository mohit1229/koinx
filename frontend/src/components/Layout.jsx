import Card from "./Card";
import Header from "./Header";
import Performance from "./Performance";
import ScrollablePane from "./ScrollablePane";
import Sentiment from "./Sentiment";
import About from "./About";
import Team from "./Team";
import SignUp from "./SignUp";
import Trending from "./Trending";
const ResponsiveLayout = () => {
  return (
    <div>
<Header />
<div className="px-20 mt-3">
 <h4 className="text-sm"> Cryptocurrencies {">>"} Bitcoin </h4>
 <div className="md:bg-white ">
<div className="flex">
  <img src='/logo.png'></img>
  <h3 className="text-xl font-semibold">Bitcoin</h3>
  <h4 className="text-sm h-full">BTC</h4>
  <div className="bg-rank text-white text-base">Rank #1</div>
</div>






    <div className="container p-4 md:bg-white">
      {/* Main wrapper with grid layout for easier reordering */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* First component - order-1 on mobile, order-1 on desktop */}
        <div className="p-6 order-1 lg:order-1">
        <Card>
          <div className="flex">
          <h2 className="text-3xl font-semibold mb-4">$16,953.04</h2>
          <div className="bg-priceBg text-priceText text-base">2.51%</div>
          <div className="text-sm">(24h)</div>
          </div>
          <p className="text-base font-medium">13,42,343</p>

        </Card>
 <ScrollablePane></ScrollablePane>
        <Performance></Performance>
        <Sentiment></Sentiment>
        <About></About>
        <Team></Team>
        </div>

        {/* Second component - order-3 on mobile, order-2 on desktop */}
        <div className="p-6 order-3 lg:order-2">
          <SignUp />
       <Trending />
        </div>

        {/* Third component - order-2 on mobile, order-3 and full width on desktop */}

        <div className="p-6 order-2 lg:order-3 lg:col-span-2">
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