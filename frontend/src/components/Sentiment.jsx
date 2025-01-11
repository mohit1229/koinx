import { Fragment } from "react"
import Card from "./Card"
const Sentiment=()=>{
return (
    <Fragment>
<Card>
    <div>
        <h2 className="text-2xl font-semibold ">Sentiment</h2>
<h2 className="text-lg font-medium">Key Events</h2>
<div className="overflow-x-auto py-4 scrollbar-none">

<div className="flex">
    <div className="bg-lightGreen rounded-lg">
<h4 className="font-medium text-xs">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim </h4>
<p className="font-normal text-xs">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
</div>
<div className="bg-lightGreen rounded-lg">
<h4 className="font-medium text-xs">Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim </h4>
<p className="font-normal text-xs">Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
</div>
</div>
</div>
<h2 className="text-lg font-medium">Analyst Estimates</h2>

    </div>
    </Card>
    </Fragment>
)
}
export default Sentiment