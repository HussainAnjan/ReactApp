import React, { useState } from "react";

const Card = () => {
  const [data, ] = useState([
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/07/mccafe-dsk-en.jpg",
      title: "McCafé",
      desc: "Browse our menu for more information on topics such as our tasty coffee and espresso drinks.",
      btntxt: "Order Now",
    },
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/07/mcdelivery-574x249-en.jpg",
      title: "McDelivery",
      desc: "Delivering food at your doorsteps.",
      btntxt: "Order Now",
    },
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/07/uae-our-app-feature-callout-desktop.jpg",
      title: "Our App",
      desc: "Browse our menu for more information on topics such as our tasty coffee and espresso drinks.",
      btntxt: "Download Now",
    },
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/07/mccafe-dsk-en.jpg",
      title: "Our Menu",
      desc: "Our exclusive menu is waiting for you.",
      btntxt: "Order Now",
    },
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/07/item-5.png",
      title: "Trending Now",
      desc: "Browse our menu for more information on topics such as our tasty coffee and espresso drinks.",
      btntxt: "Learn More",
    },
    {
      img: "https://mcdonalds.com.pk/wp-content/uploads/2022/08/careers-info-card-1.png",
      title: "McCafé",
      desc: "Find out what's new.",
      btntxt: "Apply Now",
    },
  ]);
  return (
    <>
      <div className="container d-flex justify-content-center flex-wrap gap-3">
        {data.map((e) => {
          return (
            <>
              <div
                className="card mt-5"
                style={{ width: "20.5rem", height: "60vh" }}
              >
                <img src={e.img} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column justify-content-around align-items-center">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text text-align-center">{e.desc}</p>
                  <a href="/" className="btn btn-warning">
                    {e.btntxt}
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
