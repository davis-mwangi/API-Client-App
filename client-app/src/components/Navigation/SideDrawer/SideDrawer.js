import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxi';

const sideDrawer = (props)=>{
    let attachedClasses = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return(
       <Aux>
        <Backdrop show={props.open} clicked ={props.closed}/>  
        <div className={attachedClasses.join(' ')} onClick={props.closed}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <div className={classes.Nav}>
    
    <nav className={classes.NavLeft}>
        <ul className={classes.NavList}>
            <NavigationItem link="/" exact >Data Catalog</NavigationItem>
            <NavigationItem link="/login" >Login</NavigationItem>
            <NavigationItem link="/signup" >Sign Up</NavigationItem>
        </ul>
    </nav>
    
        
</div>
        </div> 
          
          
       </Aux>
    );
};
export default sideDrawer;