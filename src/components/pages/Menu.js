import React from 'react';
import {Data} from '../data/data';
import MenuItem from '../MenuItem';
import '../../styles/Menu.css';

function Menu() {
    return (
        <div className="menu">
            <div className="menuList">
               {Data.map((menuItem, key)=>
               {return( <MenuItem 
               image={menuItem.image}
               name={menuItem.name}
               price={menuItem.price}
               />);
               })}
            </div>
        </div>
    )
}

export default Menu;
