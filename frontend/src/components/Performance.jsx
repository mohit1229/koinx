import { Fragment } from "react"
import Card from "./Card"

const Performance=({usd})=>{
    return (
        <Fragment>
        <Card>
          <h2 className="font-semibold text-2xl"> Performance</h2>
          <h3 className="text-lg"> Fundamentals</h3>
         
          <div className="flex justify-between"> 
            <h4>Bitcoin Price</h4>
            <h4>${usd.toLocaleString()}</h4>
          </div><div className="flex justify-between"> 
            <h4>24h Low / 24h High</h4>
            <h4>$16,4444</h4>
          </div><div className="flex justify-between"> 
            <h4>7d Low / 7d High</h4>
            <h4>$16,4444</h4>
          </div><div className="flex justify-between"> 
            <h4>Trading Volume</h4>
            <h4>$16,4444</h4>
          </div><div className="flex justify-between"> 
            <h4>Market Cap Rank</h4>
            <h4>$16,4444</h4>
          </div><div className="flex justify-between"> 
            <h4>Market Cap</h4>
            <h4>$16,4444</h4>
          </div>
          
        </Card>
        </Fragment>
    )
}
export default Performance