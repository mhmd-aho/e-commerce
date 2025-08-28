import Header from "./header"
import Items from "./item"
import { useEffect, useState } from "react";
function App() {
  const [cartItems,setCartItems] = useState(0);
  const [isMobile,setIsMobile] = useState();
  useEffect(()=>{
    const handleResize = ()=>{
      setIsMobile(window.innerWidth  <= 450)
    }
    window.addEventListener('resize',handleResize);
    handleResize();
    return ()=> window.removeEventListener('resize',handleResize);
  },[]) 
  return (
    <div className="flex flex-col justify-start items-center sm:w-screen sm:h-screen font-kumbh">
    <Header setCartItems={setCartItems} cartItems={cartItems} isMobile={isMobile}/>
    <Items setCartItems={setCartItems} isMobile={isMobile}/>
    </div>
  )
}

export default App
