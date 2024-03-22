import React from 'react'
import { about } from '../data/dummydata'
import Heading from '../common/Heading'

const About = () => {
  return (
    <div>
      <section className="about">
        <div className="container flex">
            {
                about.map((val,i)=>(
                    <>
                    <div className='left'>
                        <img src={val.cover} data-aos="fade-down-right"/>
                    </div>
                    <div className='right'data-aos="fade-down-left">
                        <Heading title='About Me'/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <p>{val.desc2}</p>

                    </div>
                    </>
                ))
            }
        
        </div>
      </section>
    </div>
  )
}

export default About
