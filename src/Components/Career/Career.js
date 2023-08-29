import { useContext } from "react";
import { RouterContext } from "../../App";
import Topic from "../Topic/Topic";
import './Career.css'
import Navbar from "../Navbar/Navbar";

const Career = () =>{
    const {Articles} = useContext(RouterContext)
    const Career = Articles.filter((topic) => {
        return topic.category === 'career'})

    return (
        <>
        <Navbar/>
        <div className="container">
            {Career.map((topic) => {
            return <Topic topic={topic}/>;
      })}
        </div>
        </>
        
    )
}

export default Career;