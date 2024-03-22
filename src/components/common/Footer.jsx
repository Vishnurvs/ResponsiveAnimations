import React from 'react'
import { social } from '../data/dummydata'

function Footer() {
  return (
    <>
      <footer>
        {
            social.map((item)=>(
                <>
                    <i data-aos="zoom-in-left">{item.icon}</i>
                </>
            ))
        }
        <p data-aos="zoom-in-right">All Rights Rescved @2024</p>
      </footer>
    </>
  )
}

export default Footer
