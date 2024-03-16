import React from 'react'
import { Link } from 'react-router-dom';
import './SideBar.css'

export default function SideBar() {

 return (
    <div style={{ width: '200px', height: '100vh', background: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Replace `a` with `Link` and `href` with `to` if using React Router */}
        <li><a href="/link1" style={{ display: 'block', padding: '10px', textDecoration: 'none', color: 'black' }}>Item 1</a></li>
        <li><a href="/link2" style={{ display: 'block', padding: '10px', textDecoration: 'none', color: 'black' }}>Item 2</a></li>
        <li><a href="/link3" style={{ display: 'block', padding: '10px', textDecoration: 'none', color: 'black' }}>Item 3</a></li>
        <li><a href="/link4" style={{ display: 'block', padding: '10px', textDecoration: 'none', color: 'black' }}>Item 4</a></li>
      </ul>
    </div>
  );
};
