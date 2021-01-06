import React from 'react';
import { Link } from 'react-router-dom';
import LogoBlack from '../assets/images/logo-black.png';

export const Topbar = (props) => {

    let lastScrollTop = 0;

    const fadeNav = () => {
        var logo = document.getElementById('logo');
        var scroll_top = window.pageYOffset;
        if (scroll_top > lastScrollTop && scroll_top > 20) {
            logo.classList.remove('opacity-1');
        } else if(scroll_top < lastScrollTop) {
            logo.classList.add('opacity-1');
        }
        lastScrollTop = scroll_top;
    }

    window.addEventListener("scroll", fadeNav);

    const logostyles = {
        opacity: '0',
        transitionDuration: '.5s'
    }

    const removeit = () => {
        if(props.firstload) {
            let x = document.getElementById('topbar');
            x.classList.remove('opacity-1');
        }
        
    }
    

    return (
        <div id='topbar'>
            <div className='container'>
                <span id='logo' className='brand opacity-1' style={logostyles} onClick={removeit}><Link className='light' to={'/'}><img width='160' src={LogoBlack} /></Link></span>
                <div className='menu'>
                    <span id='ham' onClick={props.toggleMenu}>
                        <div className='bar1'></div>
                        <div className='bar2'></div>
                        <div className='bar3'></div>
                    </span>
                </div>
            </div>
        </div>
    );
}