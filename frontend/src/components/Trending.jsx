import { Fragment } from "react";
// eslint-disable-next-line react/prop-types
const Coin=({name,Percent})=>{
return (<div className="flex justify-between">
    <h3 className="font-medium text-base">{name}</h3>
    <div className="bg-lightGreen p-2 rounded">
    <h3 className="font-medium text-base text-priceText">{Percent}%</h3>
    </div>
</div>
)
}
const Trending=()=>{
    return(
        <Fragment>
            <div className="bg-white px-4 py-6">
<h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
<Coin name={"Ethereum(ETH)"} Percent={8.21}/>
<Coin name={"Bitcoin (BTC)"} Percent={8.21}/>
<Coin name={"Polygon (MATIC)"} Percent={8.21}/>
</div> </Fragment>

    )
}
export default Trending