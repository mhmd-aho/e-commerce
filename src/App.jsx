import { Suspense,lazy } from "react";
import Loading from "./loading";
const Header = lazy(()=>import("./header"));
const Items = lazy(()=>import("./item"));
import { useEffect, useState } from "react";
function App() {
  const [cartItems,setCartItems] = useState(0);
  const [isMobile,setIsMobile] = useState();
  useEffect(()=>{
    const handleResize = ()=>{
      setIsMobile(window.innerWidth  <= 640)
    }
    window.addEventListener('resize',handleResize);
    handleResize();
    return ()=> window.removeEventListener('resize',handleResize);
  },[]) 
  return (
    <div className="flex flex-col justify-start items-center sm:w-screen sm:h-screen font-kumbh">
      <Suspense fallback={<Loading/>}>
        <Header setCartItems={setCartItems} cartItems={cartItems} isMobile={isMobile}/>
        <Items setCartItems={setCartItems} isMobile={isMobile}/>
      </Suspense>
    
    </div>
  )
}

export default App
