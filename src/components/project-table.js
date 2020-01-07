import React, { Component } from 'react';
import { FaReact, FaPhp, FaJs, FaWordpress } from 'react-icons/fa';

export class Projecttable extends Component {

    link(x){
        window.location = x;
    }

    render() {
        let type;
        return (
            <div className='' data-aos="fade-up">
                <table className='project-table'>
                    <tbody>
                        {this.props.data.map((project, i) => {

                            if(project.type === 'react')
                            {
                                type = <span className='icon icon__react'><FaReact /></span>
                            }
                            else if(project.type === 'php')
                            {
                                type = <span className='icon icon__php'><FaPhp /></span>
                            }
                            else if(project.type === 'javascript')
                            {
                                type = <span className='icon icon__javascript'><FaJs /></span>
                            }
                            else if (project.type === 'wordpress') {
                                type = <span className='icon icon__wordpress'><FaWordpress /></span>
                            }
                            else
                            {
                                type = project.type
                            }
                            return (
                                <tr className='project-row' key={i} data-aos='fade-up' onClick={() => window.open(project.link)}>
                                    <td >
                                        <div className='project-img'>
                                            <img alt='project-img' src={project.img} />
                                        </div>
                                        
                                    </td>
                                    <td className='project-text'>
                                        <h2><strong>{project.name}</strong></h2>
                                        <span>{project.description}</span>
                                    </td>
                                    <td>
                                        <strong>{type}</strong>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}