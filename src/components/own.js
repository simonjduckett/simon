import React, { Component } from 'react';
import own from '../own.js';
import { NavLink } from 'react-router-dom';


export class Own extends Component {

    render() {
        return (
            <section>
                <div className='container'>
                    <div align='left'>
                        <br />
                        <NavLink
                            className='xmaslink'
                            to={'/xmas'}> ← go back
                        </NavLink>
                    </div>
                    <br />
                    <h1>Own list</h1>
                    <p>Here's a list of stuff i already own.</p>
                    <hr />
                    <div align='left'>
                        <div>
                            <h3>fx pedals</h3>
                            <ul>
                                {own.own[0].fx_pedals.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>guitars</h3>
                            <ul>
                                {own.own[0].guitars.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>guitar amps</h3>
                            <ul>
                                {own.own[0].guitar_amps.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>synths</h3>
                            <ul>
                                {own.own[0].synths.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>books</h3>
                            <ul>
                                {own.own[0].books.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div>
                            <h3>playstation 4</h3>
                            <ul>
                                {own.own[0].playstation_4.map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </section>

        )

    }

}