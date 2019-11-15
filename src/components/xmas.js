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
                            <li>Music technology</li>
                            <li>single effect pedals, brands-> (boss, moog, mxr)</li>
                            <li>cheap drum machines brands-> (korg, roland, arturia, akai)</li>
                            <li>cheap synths brands-> (korg, yamaha, arturia)</li>
                        </ul>
                        <h3>Space/Astronomy</h3>
                        <ul>
                            <li>books on astro photography</li>
                            <li>telescope £1000+</li>
                        </ul>
                        <h3>Rock Climbing</h3>
                        <ul>
                            <li>bouldring climbing</li>
                            <li>brush (for cleaning holds)</li>
                            <li>tape and chalk</li>
                        </ul>
                        <h3>Programming/geek</h3>
                        
                        <ul>
                            <li>books on the subject (but not html & css as too basic)</li>
                            <li>death stranding ps4 game</li>
                        </ul>
                        <h3>Art</h3>
                        <ul>
                            <li>van gogh, impressionism, picaso. books, prints</li>
                        </ul>
                        <h3>Please avoid 😷</h3>
                        <ul>
                            <li>clothes (you can't keep up with my style)</li>
                            <li>smellies</li>
                            <li>games/puzzles (never use them!)</li>
                            <li>generic mugs<i>(are ok if related to an interest)</i></li>
                            <li>stationary (i'm a computer programmer!)</li>
                            <li>dvd's/cd's (it's 2019 people, stream that shit!)</li>
                            <li>posters (i'm not 14!)</li>
                        </ul>
                    </div>
                </div>
            </section>
            
        )
        
    }

}