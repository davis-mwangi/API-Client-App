import React from 'react';
import classes from './Logo.css';
import worldbankLogo  from '../../assets/images/logo-wb-header-en.svg';


const logo = (props) => (
   <div className={classes.Logo} style={{height:props.height}}>
    <img src={worldbankLogo} alt="World Bank Logo"/>
   </div>
);
export default logo;