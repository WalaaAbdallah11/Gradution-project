import { Outlet } from "react-router-dom";
// import TopBar from "../../Components/Dashboard/TopBar";
import TopBar from './../../component/Dashboard/TopBar';
import SideBar from './../../component/Dashboard/SideBar';
// import SideBar from "../../Components/Dashboard/SideBar";
import "./dashboard.css";

export default function Dashboard(){
    return (
    <div className="position-relative">
            <div >
            <TopBar></TopBar>
            <div className="content-flex">
            <SideBar></SideBar>
            <div style={{width :"80%"}}>
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    </div>
    );
}
