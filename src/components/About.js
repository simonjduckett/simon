import React, {useEffect} from 'react';

export const About = () => {

    useEffect(() => {
        let x = document.getElementById('topbar');
        x.classList.add('opacity-1');
    }, [])

    return (
        <section align='left' id='about' className='padding-top'>
            <div className='container-fluid'>
                <h1>CV</h1>
                <section className='cv-section'>
                    <CvHeading heading='Work' />
                    <CvEntry
                        year='2022 - CURRENT'
                        name='ReallyMoving, Front End Developer'
                        place='St Albans, UK'
                    />
                    <CvEntry
                        year='2020 - 2022'
                        name='Fusemetrix, Web Developer'
                        place='Milton Keynes, UK'
                    />
                    <CvEntry
                        year='2018 - 2020'
                        name='FMC, Web Developer'
                        place='Shenly, UK'
                    />
                    <CvEntry
                        year='2017 - 2018'
                        name='Freelance, Web Developer'
                        place='Hemel Hempstead, UK'
                    />
                    <CvEntry
                        year='2010 - 2017'
                        name='SimonGuitar, Peripatectic teacher'
                        place='Hertfordshire, UK'
                    />
                </section>
                <section className='cv-section'>
                    <CvHeading heading='Education' />
                    <CvEntry
                        year='2004 - 2007'
                        name='Bachelor of Arts (BA Hons), Creative Music Technology, 2.1'
                        place='The University of Hull'
                    />
                    <CvEntry
                        year='2009 - 2010'
                        name='British Academy of New Music, CTTLS'
                        place='London, UK'
                    />
                </section>
                <section className='cv-section'>
                    <CvHeading heading='Certifications' />
                    <CvEntry
                        year='2017'
                        name='Microsoft MTA Software Development Fundamentals'
                        place='London, UK'
                    />
                    <CvEntry
                        year='2017'
                        name='Microsoft MCSA Programming in HTML5 with JavaScript and CSS3'
                        place='London, UK'
                    />
                </section>
                
                

                
            </div>
        </section>
    )
}

const CvHeading = (props) => {
    return (
        <div className='cv-heading'>
            <h2>{props.heading}</h2>
        </div>
    )
}

const CvEntry = (props) => {
    return (
        <div className='cv-entry'>
            <div className='cv-entry__year cv-entry__col'>{props.year}</div>
            <div className='cv-entry__name cv-entry__col'>{props.name}</div>
            <div className='cv-entry__place cv-entry__col'>{props.place}</div>
        </div>
    )
}
