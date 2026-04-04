import { Children } from "react";
import DonationButton from "./components/DonationButton";
import Greetings from "./components/Greetings";

const App = () => {
    const donateFunction = () => {
        alert('thank you for donating')
    }

    <>
        // ! donate function
    
    return (
        <div>
            <Greetings name="Captain" message='good morning' />
            <Greetings name="Hulk" message='good After noon' />
            <Greetings name="Thor" message='good Evening' />


            {/* donate function calling */}
            <DonationButton onDonate={donateFunction} />



        </div>
    )
    </>
}


export default App;