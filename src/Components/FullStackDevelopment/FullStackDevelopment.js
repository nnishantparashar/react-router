import { useContext } from "react";
import { RouterContext } from "../../App";
import Topic from "../Topic/Topic";
import './FullStackDevelopment.css'
import Navbar from "../Navbar/Navbar";

const FullStackDevelopment = () =>{
    const {Articles} = useContext(RouterContext)
    const FSD = Articles.filter((topic) => {
        return topic.category === 'fsd'})

    return (
        <>
        <Navbar/>
        <div className="container">
            {FSD.map((topic) => {
            return <Topic topic={topic}/>;
      })}
        </div>
        
        </>
        
    )
}

export default FullStackDevelopment;