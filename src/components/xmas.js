import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Xmas extends Component {

    render(){
        return (
            <section>
                <div className='container'>
                    <br />
                    <h1>Simon's xmas list</h1>
                    <p>This year I have decided to list my interests rather than link to specific items.
                        <i>(also see avoid list)</i>
                    </p>
                    <h1>🎅</h1>
                    <p>Worried I already own something?<br />
                    <NavLink 
                    className='xmaslink'
                    to={'/own'}>Check here...
                        </NavLink></p>
                    <br />
                    <hr />
                    <div align='left'>
                        <h3>Music</h3>
                        <ul>
                            <li>Guitar related stuff</li>
                            <li>Music technology</li>
                        </ul>
                        <h3>Space/Astronomy</h3>
                        <ul>
                            <li>Stuff</li>
                        </ul>
                        <h3>Rock Climbing</h3>
                        <ul>
                            <li>stuff</li>
                        </ul>
                        <h3>Programming</h3>
                        <ul>
                            <li>stuff</li>
                        </ul>
                        <h3>Art</h3>
                        <ul>
                            <li>stuff</li>
                        </ul>
                        <h3>Please avoid 😷</h3>
                        <ul>
                            <li>clothes</li>
                            <li>smellies</li>
                            <li>games/puzzles</li>
                            <li>generic mugs<i>(are ok if related to an interest)</i></li>
                            <li>stationary</li>
                            <li>dvd's/cd's</li>
                            <li>posters</li>
                        </ul>
                    </div>
                </div>
            </section>
            
        )
        
    }

}