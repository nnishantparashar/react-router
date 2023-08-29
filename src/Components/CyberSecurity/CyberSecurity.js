
import './CyberSecurity.css'
import { useContext } from "react";
import { RouterContext } from "../../App";
import Topic from "../Topic/Topic";
import Navbar from '../Navbar/Navbar';

const CyberSecurity = () =>{
    const {Articles} = useContext(RouterContext)
    const CyberSecurity = Articles.filter((topic) => {
        return topic.category === 'cs'})

    return (
        <>
        <Navbar/>
        <div className="container">
            {CyberSecurity.map((topic) => {
            return <Topic topic={topic}/>;
      })}
        </div>
        </>
        
    )
}

export default CyberSecurity;