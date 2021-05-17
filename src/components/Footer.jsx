import React from "react";
const date= new Date();
const currYear= date.getFullYear();

function Footer(){
   return <div className="Footer">
     <p className="footer-text">Copyright ⓒ {currYear}</p>
   </div>;

    }


export default Footer;
