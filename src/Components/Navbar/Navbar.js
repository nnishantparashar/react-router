import { NavLink } from "react-router-dom";
import "./Navbar.css";



const Navbar = () => {
    
  return (
    <div className="nav-container">
      <div >
        <NavLink className="nav-item" activClassName="active" to="/blog" style={{ textDecoration:'none' }}>ALL</NavLink>
      </div>
      <div >
        <NavLink className="nav-item" activClassName="active" to="/category/FullStackDevelopment" style={{ textDecoration:'none' }}>FULL STACK DEVELOPMENT</NavLink>
      </div>
      <div>
        <NavLink className="nav-item" activClassName="active" to="/category/DataScience" style={{ textDecoration:'none' }}>DATA SCIENCE</NavLink>
      </div>
      <div>
        <NavLink className="nav-item" activClassName="active" to="/category/CyberSecurity" style={{ textDecoration:'none' }}>CYBER SECURITY</NavLink>
      </div>
      <div>
        <NavLink className="nav-item" activClassName="active" to="/category/Career" style={{ textDecoration:'none' }}>CAREER</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
