import React from 'react';
import '../styles/home.scss';
import Footer from '../component/Footer';
const Home = () => {
  return (
    <>
    <div className='home'>
      <img src="/logoNCC.png" alt="" className='logo1'/>
      <div className='card'>
        <h3>Lorem ipsum dolor sit asmet?</h3>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
        </p>
      </div>

      <div className='row'>
        <div className='col'>
            <h2>
            Lorem ipsum dolor sit amet
            </h2>
            <div className='info'>
            <img src="/css-icon.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </p>
            </div>
           
        </div>
        <div className='col'>
        <h2>
            Lorem ipsum dolor sit amet
            </h2>
            <div className='info'>
            <img src="/html-icon.png" alt=""/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </p>
            
        </div>
      
            </div>
          
        <div className='col'> 
        <h2>
            Lorem ipsum dolor sit amet
            </h2>
            <div className='info'>
            <img src="/url-icon.png" alt="" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis. </p>
            </div>
            <p></p>
        </div>
      </div>
      
    </div>
    
    <Footer/>
    </>
  );
};

export default Home;