import React, { useState } from 'react';
import { FcMenu } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
          
        },
        {
            path:"/services",
            name:"Services",
           
        },
        {
            path:"/news",
            name:"News",
          
        },
        {
            path:"/blog",
            name:"Blog",
          
        },
        {
            path:"/contact",
            name:"Contact",
          
        },
        
    ]
    return (
        <div className="container">
             <div className='menu' onClick={toggle} style={{color: isOpen? "white" : "black"}}><FcMenu/></div>
           <div style={{width: "150px", display:isOpen ? "block" : "none"}} className="sidebar">
              
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">      
                           <div  className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;