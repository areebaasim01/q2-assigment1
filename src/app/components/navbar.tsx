import Link from "next/link";
import React from "react";
import style from "styled-jsx"
import Image from "next/image";




           
export default  function Header() {
    return (
        
            <header id="navbar">  
                
            <Link rel="stylesheet" href="globals.css"> </Link>
           
            <a className=" container mx-auto flex justify-between items-center" id="posit"> <a id="logo"  className="text-black">   Luxurylensewear  </a> 
            <Link href="/">  Home </Link>
            <Link href="/About">  About </Link>
            <Link href="/ContactUs">  Contact Us </Link>
            <Link href="/ProductCatalog">  Product Catalog </Link>
            <Link href="/Shopbyseries">  Shop By Series </Link> 
            
           
            </a>
       
</header>
    )
}