import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Projecttable } from './project-table';
import data from '../data.js';

export class Projects extends Component {

    componentDidMount() {
        let x = document.getElementById('topbar');
        x.classList.add('opacity-1');
    }

    render() {
        let dataKeys = Object.keys(data.projects[0])
        return (
            <div id='projects' className='padding-top'>
                    <div className='container-fluid'>
                        <h1>Projects</h1>
                        <div id='subnav'>
                            {dataKeys.map((project, i) => {
                                return (
                                        <NavLink
                                            activeClassName='activeNavLink'
                                            className='proj-menu-link'
                                            to={'/projects/'+project}>{project} ({data.projects[0][project].length})
                                        </NavLink>
                                )
                            })}
                            <hr />
                            {dataKeys.map((project, i) => {
                                let dataUrl = data.projects[0][project]
                                return (
                                        <Route path={'/projects/'+project} render={() => { return <Projecttable data={dataUrl} /> }} />
                                )
                            })}
                        </div>
                    </div>
            </div>
        );
    }
}