import { useEffect, useState } from "react";
import Navs from "../../component/Home.js/Navs/Navs";
import { Axios } from "../../Api/axios";
import { Link } from "react-router-dom";
import PlantDetalis from './SuitablePlant';

export default function MemberShip() {
    const [memberShips, setMemberShips] = useState([]);
//     const str = new Date();
// console.log(typeof str); // 👉️ object

// const result = String(str).split(' ');
// console.log(result); // 👉️ ['Fri', 'Dec', ...]



    useEffect(() => {
        Axios.get(`/membership`)
            .then((data) => {
                setMemberShips(data.data.levels)
                console.log(data.data.levels)
            });
    }, []);

    return (
        <>
            {/* <NavBar></NavBar> */}
            <div style={{ backgroundColor: "#eee" }} >
                <div class="pricing p-3" id="pricing">
                    <h2 class="main-title " >Pricing Plans</h2>
                    <div class="container ">
                        {memberShips.map((memberShip) => {
                            const price = memberShip.Price.split('/')
                            const Benefits = memberShip.Benefits.split('\n')
                            // const Features = memberShip.Benefits.split('\n')
                            // console.log(Benefits)
                            return (
                                <div key={memberShip.id}>
                                    <div class="box">
                                        <h3 class="title">{memberShip.name}</h3>
                                        <div class="price">
                                            <span class="amount">{price[0]}</span>                                            
                                            <span class="time">per {price[1]}</span>
                                        </div>
                                        <ul type="none" className="">
                                            

                                            <li>{Benefits[0]}</li>
                                            <li>{Benefits[1]}</li>
                                            {/* <li>{Features[0]}</li>
                                            <li>{Features[1]}</li> */}
                                            {/* <li>2 Subdomains</li>
                                            <li>4 Databases</li>
                                            <li>Basic Support</li> */}
                                        </ul>
                                        <Link to={`/membership/${memberShip.id}`} style={{background:"none", border:"none"}}>
                                        <a href="">Choose Plan</a>

                                        </Link>
                                    </div>
                                </div>

                            );
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}