import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
const sideDrawer = (props) => {
    let attchedClasses = ['SideDrawer','Close'];
    if(props.open){
        attchedClasses = ['SideDrawer','Open'];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attchedClasses.join(' ')}>
                <Logo height="15%" />
                <nav>
                    <NavigationItems></NavigationItems>
                </nav>
            </div>
        </Auxiliary>
    );
}
export default sideDrawer;