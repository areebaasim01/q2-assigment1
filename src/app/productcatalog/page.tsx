import React from "react";
// import Header from "../components/Navbar";
import Image from "next/image";


export default function ProductCatalog(){
    return (
        <>
        {/* <Header/> */}
        <br>

</br>

<Image  src="/02.jpg" alt="Product" width={300} height={200}  />

   <h1 className="text-black text-2xl font-sans font-medium"> Sandy Brown  </h1>
   <br>

</br>
   
    <Image  src="/03.jpeg" alt="Product" width={300} height={200} /> 
   
   <h1 className="text-black text-2xl font-sans font-medium ">  Lime </h1> 

   <br>

</br>
   
   <Image  src="/05.jpg" alt="Product" width={300} height={200}  />
   
   <h1 className="text-black text-2xl font-sans font-medium"> Pixie Brown  </h1>


  

        </>
 )
}