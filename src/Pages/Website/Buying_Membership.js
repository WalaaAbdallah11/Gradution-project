import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Axios } from "../../Api/axios";
import { baseURL } from "../../Api/Api";

export default function BuyingMembership(){
    const params = useParams();
    const [buyMembership , setbuyMembership] = useState("")

    useEffect(() => {
        Axios.get(`${baseURL}/membership/${params.membershipId}`)
            .then((data) => setbuyMembership(data.data));
    }, []);
    

    return(
        <div>
           {buyMembership.message}
        </div>

    );
}