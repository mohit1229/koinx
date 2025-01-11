import { Fragment } from "react";
const SignUp=()=>{
    return(
        <Fragment>
            <div className="bg-signUp text-white rounded-2xl">
                <h2 className="text-2xl font-bold">Get Started with KoinX<br/> for FREE</h2>
                <p className="text-sm font-medium">With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.</p>
                <div className="flex justify-center">
                <button className="bg-white text-black rounded-lg">Get Started for FREE - </button>
                </div>
            </div>
        </Fragment>
    )
}
export default SignUp