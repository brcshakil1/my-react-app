import { useState } from "react";
import Aim from "../Aim/Aim";
import Intro from "../Intro/Intro";

const Home = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div style={{textAlign: 'center'}}>
            <button onClick={handleToggle} style={{width: '70px', padding: '10px 0', cursor: 'pointer'}}>
                {toggle ? 'Aim' : 'Intro'}
            </button>
            {
                toggle ? <Aim></Aim> : <Intro></Intro>
            }
        </div>
    );
};

export default Home;