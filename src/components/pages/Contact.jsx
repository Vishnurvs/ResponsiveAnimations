import React from 'react'
import Heading from '../common/Heading'
import { contact } from '../data/dummydata'

function Contact() {
  return (
    <div className='contact'>
        <div className="container">
            <Heading title="Contact"/>
            <div className="content flexsb">
                <div className="right">
                    <form>
                        <div className="flex">
                        <input type='text' placeholder='Name' required data-aos="zoom-in-down" />
                        <input type='email' placeholder='Email' required data-aos="zoom-in-down" />
                        </div>
                        <input type='text' placeholder='Subject' required data-aos="zoom-in-down" />
                        <textarea name='' id=''  cols='30' rows='10'  placeholder='Enter Your Message' 
                        required data-aos="zoom-in-down"></textarea>
                        <button data-aos="zoom-in-up" >Submit</button>
                    </form>
                </div>
                <div className="left">
                    {
                       contact.map((val)=>(
                        <div className="box" data-aos="zoom-in-down">
                            <i>{val.icon}</i>
                            <p>{val.text1}</p>
                            <p>{val.text2}</p>
                        </div>
                       )) 
                    }
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
