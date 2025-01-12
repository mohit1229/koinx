import { Fragment } from "react"
import Card from "./Card"
const About=()=>{
return (
    <Fragment>
<Card>
    <h2 className="text-2xl font-semibold">About Bitcoin</h2>
    <h3 className="text-lg font-bold">What is Bitcoin?</h3>
    <p className="text-base font-normal">Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
    <h3 className="text-lg font-bold">Lorem ipsum dolor sit amet</h3>
    <p className="text-base font-normal">Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  

Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.

Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>
    <h3 className="text-2xl font-semibold py-4" >Already Holding Crypto?</h3>
    <div className="lg:flex lg:gap-8 text-white w-full">
<div className="flex bg-[#79F1A4] rounded-md p-2 basis-1/2">
<img src="about1.png"></img>
<div className="p-4">
    <h3 className="text-xl font-bold">Calculate your <br></br>Profits</h3>
    <button className="bg-white text-black rounded-lg h-8 w-32 my-4">Check now-</button>
</div>
</div>
<div className="flex bg-[#FF9865] rounded-md p-2 basis-1/2">
<img src="about2.png"></img>
<div className="p-4">
    <h3 className="text-xl font-bold">Calculate your tax <br></br>liability</h3>
    <button className="bg-white text-black rounded-lg h-8 w-32 my-4">Check now-</button>
</div> 
</div>
</div>
</Card>
    </Fragment>
)
}
export default About