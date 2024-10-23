import React from "react";
// import Header from "../components/Navbar";
import Image from "next/image";
import style from "module"




export default function ContactUs (){
    return (
      
    
        <div>
       {/* <Header/> */}

       <Image  src="/insta.png"
    alt="Product"
    width={70}
    height={70}
    className="Image"
    />  
    <span className="text">  03187498376837</span>


<Image  src="/wa.png"
    alt="Product"
    width={70}
    height={70}
    justify-center
    />   

    </div>

        
 )
}