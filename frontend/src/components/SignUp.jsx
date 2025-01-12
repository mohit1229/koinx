import { Fragment } from "react";
const SignUp=()=>{
    return(
        <Fragment>
            <div className="bg-signUp text-white rounded-2xl px-4 py-8">
                <div className="flex justify-center">
                <h2 className="text-2xl font-bold">Get Started with KoinX<br/> for FREE</h2>
                </div>
                <div className="flex justify-center">

                <p className="text-sm font-medium p-4">With our range of features that you can equip for free,
                KoinX allows you to be more educated and aware of your tax reports.</p>
                </div>
                <div className="flex justify-center">
                <div>
                    <img
                    src="Frame.png"
                    
                    ></img>
                </div>
                </div>
                <div className="flex justify-center">
                <button className="bg-white text-black rounded-lg px-6 py-3">Get Started for FREE - </button>
                </div>
            </div>
        </Fragment>
    )
}
export default SignUp