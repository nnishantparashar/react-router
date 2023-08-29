
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import FullStackDevelopement from './Components/FullStackDevelopment/FullStackDevelopment'
import All from './Components/All/All'
import DataScience from './Components/DataScience/DataScience'
import CyberSecurity from './Components/CyberSecurity/CyberSecurity'
import Career from './Components/Career/Career'

import {Routes, Route} from 'react-router-dom'
import Articles from './Components/Articles/Articles'
import { createContext } from 'react';
import Description from './Components/Description/Description';

export const RouterContext = createContext(null);
function App() {
  return (
    <RouterContext.Provider value={{Articles}}>
<div className="App">
        
        <Header/>
        
          <Routes>
            {Articles.map((topic) => {
              return <Route path= {topic.cardExpand} element={<Description topic={topic}/>}/>
            })}
            <Route path="/" element={<All/>}/>
            <Route path="/blog" element={<All/>}/>
            <Route path="/category/FullStackDevelopment" element={<FullStackDevelopement/>}/>
            <Route path="/category/DataScience" element={<DataScience/>}/>
            <Route path="/category/CyberSecurity" element={<CyberSecurity/>}/>
            <Route path="/category/Career" element={<Career/>}/>
          </Routes>

        <Footer/>
      </div>
    </RouterContext.Provider>
      
   
    
  );
}

export default App;
