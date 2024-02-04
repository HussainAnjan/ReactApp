import React, { useState } from 'react'

const Footer = () => {
    const [data,setData]=useState([
        {
            title:"Our Company",
            list1:"Our Community",
            list2:"Our History"
        },
        {
            title:"Careers",
            list1:"Corporate",
            list2:"Resturant"
        },
        {
            title:"Contact Us",
            list1:"Suggestion",
            list2:"Complaint"
        },
        {
            title:"News Room",
            list1:"Local"
        }
    ])
  return (
    <div>
      <div className="container mt-5 w-75" style={{backgroundColor:"#FFCA2C", height:"20vh"}}>
        <div className="row">
        {
            data.map((e)=>{
                return(
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <ul className='d-flex flex-column align-items-start gap-3 list-unstyled'>
                        <li><b>{e.title}</b></li>
                        <li>{e.list1}</li>
                        <li>{e.list2}</li>
                    </ul>
                </div>
    
                )
            })
        }
        </div>
      </div>
    </div>
  )
}

export default Footer
