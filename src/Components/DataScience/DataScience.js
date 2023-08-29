import { useContext } from "react";
import { RouterContext } from "../../App";
import Topic from "../Topic/Topic";
import './DataScience.css'
import Navbar from "../Navbar/Navbar";

const DataScience = () =>{
    const {Articles} = useContext(RouterContext)
    const DataScience = Articles.filter((topic) => {
        return topic.category === 'ds'})

    return (
        <>
        <Navbar/>
        <div className="container">
            {DataScience.map((topic) => {
            return <Topic topic={topic}/>;
      })}
        </div>
        </>
    )
}

export default DataScience;