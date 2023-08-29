import { RouterContext } from "../../App";
import './All.css'
import Topic from "../Topic/Topic";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
const All = () =>{
    const {Articles} = useContext(RouterContext)
    return (
        <>
        <Navbar/>
        <div className="container">
            {Articles.map((topic) => {
            return <Topic topic={topic}/>;
      })}
        </div>
        </>
    )
}

export default All;