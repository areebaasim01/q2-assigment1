import React from "react";
// import Header from "./components/Navbar";
import Image from "next/image";


export default function Home() {
  return ( 
  
    <>
   
    {/* <Header/> */}
     
    <br>

</br>

    <Image  src="/front.jpeg"
    alt="Product"
    width={1500}
    height={0}
    /> 
   
    <h1 className="text-black text-5xl font-serif text-center"> Shop By category</h1>

  

    <Image  src="/Hidrocore.jpg" alt="Product" width={300} height={200} />
   
    <h1 className="text-black text-2xl font-sans font-medium"> Hidrocor Lenses </h1>
    <p className="text-black text-center px-100 py-100 mx-100 my-100">
    Hidrocore lenses are a popular choice for those seeking vibrant, colored contact lenses that enhance natural eye color or completely transform it. One of their standout qualities is their exceptional comfort, designed with a moisture-rich formula that keeps eyes hydrated throughout the day. Made from high-quality materials, these lenses are not only soft and flexible but also provide a breathable experience, ensuring that the eyes remain comfortable even during extended wear.
  The color saturation of Hidrocore lenses is impressive, with a wide range of shades available, from subtle to bold. Each lens is crafted to provide a striking yet natural appearance, allowing users to express their individuality without compromising on realism. The lenses feature a unique design that mimics the look of a natural iris, enhancing the depth and dimension of the eyes. This attention to detail makes them suitable for both everyday wear and special occasions, where a dramatic change in eye color can make a significant impact.
  Another key quality is their UV protection, which helps shield the eyes from harmful ultraviolet rays, contributing to overall eye health. Hidrocore lenses are also known for their durability, with a longer lifespan than many standard colored contacts, making them a cost-effective option for regular users. Their ease of application and removal further enhances their appeal, as they glide smoothly onto the eye without causing irritation.</p>

 
   <br>
   
   </br>
    <Image  src="/Bridal.jpg"
    alt="Product"
    width={300}
    height={200}
    />
    
    <h1 className="text-black text-2xl font-sans font-medium"> Ice gray 💙 </h1>



    </>

);
}