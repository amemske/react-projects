import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { AppContext, useGlobalContext } from './context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  //to toddgle sidebar use show-sidebar
  //class names inside template liretals means we want to change them dynamically
  return (
    <>
      <aside
        className={`${isSidebarOpen ? 'show-sidebar sidebar' : 'sidebar'}`}
      >
        <div className={`sidebar-header`}>
          <img src={logo} className='logo' alt='logo' />
          <button className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <ul className='social-icons'>
          {social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
