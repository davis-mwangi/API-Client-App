import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

const toolbar  = (props)=> (
    <header className={classes.Toolbar}>
     <DrawerToggle clicked={props.drawerToggleClicked}/>
    <div className={classes.Logo}>
         <Logo/>
    </div>

    <div className={classes.Nav}>
    
        <nav className={classes.NavLeft}>
            <ul className={classes.NavList}>
                <NavigationItem link="/" exact >Data Catalog</NavigationItem>
            </ul>
        </nav>
        
        <nav className={classes.NavRight}>
            <ul className={classes.NavList}>
                <NavigationItem link="/login" >Login</NavigationItem>
                <NavigationItem link="/signup" >Sign Up</NavigationItem>
            </ul>
        </nav>
        
            
    </div>

    </header>
);
export default toolbar;