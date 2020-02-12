import React from 'react';
import { Link } from 'react-router-dom';
import { Social } from './social';

export const Menu = (props) => {
    return (
        <div id='menu' className='padding-top'>
            <div className='min-height container menu-container'>
                <div className='row text-left'>
                    <div className='col-md-6'>
                        <p>
                            <Link 
                                className='menu-link' 
                                to={'/'} 
                                onClick={props.toggleMenu}>Home
                            </Link>
                            <br />
                            <Link 
                                className='menu-link' 
                                to={'/projects/web'}
                                onClick={props.toggleMenu}>Projects
                            </Link>
                            <br />
                            <Link
                                className='menu-link'
                                to={'/about'}
                                onClick={props.toggleMenu}
                            >About
                            </Link>
                        </p>
                    </div>
                    <div className='col-md'>
                        <span>Phone</span><br />
                        <p>+44 7794 445214</p>
                        
                    </div>
                    <div className='col-md'>
                        <span>Email</span><br />
                        <p><a href='mailto:simonjduckett@hotmail.co.uk'>simonjduckett@hotmail.co.uk</a></p>
                        
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <Social />
                    </div>
                </div>
            </div>
        </div>
    )
}