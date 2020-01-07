import React from 'react';
import { Link } from 'react-router-dom';

const MiniNav = () => {
    return (
        <div id='mini-nav'>
            <Link
                className='mini-nav-link'
                to={'/projects/web'}
                >Projects
            </Link>
            <a
                className='mini-nav-link'
                href='https://github.com/simonjduckett/simon'
                target='_blank'
            >Site Code
            </a>
        </div>
    )
}

export default MiniNav;