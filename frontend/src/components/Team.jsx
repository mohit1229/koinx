import { Fragment } from "react"
import Card from "./Card"
// eslint-disable-next-line react/prop-types
const Person=({name})=>{
    return (
        <Fragment>
            <div className="bg-lightGreen p-3 rounded-lg my-3">
            <h3 className="text-base font-semibold text-center">{name}</h3>
            <h4 className="text-xs font-medium text-center">Designation here</h4>
            <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, hic odit? Velit sapiente, ad obcaecati, quisquam earum eligendi pariatur illo nulla culpa iusto quis a tempore minima. Accusantium, maiores labore.</p>
            </div>
        </Fragment>
    )
}
const Team=()=>{
return (
    <Fragment>
<Card>
    <h2 className="text-2xl font-semibold">Team</h2>
    <p className="text-base"> Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>
    <Person name={"John Smith"}/>
    <Person name={"Elina Wiliams"}/>
    <Person name={"John Smith"}/>

</Card>
    </Fragment>
)
}
export default Team