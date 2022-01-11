import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null); //get the main container similar to position:relative
  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    setColumns('col-2');

    const submenu = container.current;
    const { center, bottom } = location; // get the properties from location
    submenu.style.left = `${center}px`; //css to get the left position
    submenu.style.top = `${bottom}px`; //css to get the top position

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [location, links]);
  return (
    <>
      <aside
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
      >
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </aside>
    </>
  );
};

export default Submenu;
