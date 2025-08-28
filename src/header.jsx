import logo from '/src/assets/images/logo.svg';
import Cart from '/src/assets/images/icon-cart.svg?react';
import avatar from '/src/assets/images/image-avatar.png';
import shoesPic from '/src/assets/images/image-product-1.jpg';
import trash from '/src/assets/images/icon-delete.svg';
import humburger from '/src/assets/images/icon-menu.svg';
import Exit from '/src/assets/images/icon-close.svg?react';
import { useState } from 'react';
export default function Header(props){
    const [clicked,setClicked] = useState();
    const [popUp,setPopUp]= useState(false);
    const [humOpen,setHumOpen] = useState(false);
    console.log(popUp)
    return(
        <header className='flex items-center justify-between sm:w-3/4 w-full sm:h-1/6 h-20 px-8 sm:px-0 border-b-1 border-neutral-200 relative '>
            <div className='flex items-center justify-between w-3/5 h-full'>
                {
                    props.isMobile &&
                    <img onClick={()=>setHumOpen(true)} src={humburger} alt='humburgr' className='w-1/12' />
                }
                <img src={logo} alt="the brind logo" className='sm:w-1/4 w-5/6' />
                {
                    !props.isMobile &&
                <nav className='flex justify-center items-center h-full gap-6 font-kumbh text-neutral-400 '>
                    <button onClick={()=>setClicked(1)} className={`h-full  cursor-pointer ${clicked === 1?'border-b-4 border-orange-400 text-black/75':''}`}>Collections</button>
                    <button onClick={()=>setClicked(2)} className={`h-full cursor-pointer ${clicked === 2?'border-b-4 border-orange-400 text-black/75 ':''}`}>Men</button>
                    <button onClick={()=>setClicked(3)} className={`h-full cursor-pointer ${clicked === 3?'border-b-4 border-orange-400 text-black/75 ':''}`}> Women</button>
                    <button onClick={()=>setClicked(4)} className={`h-full cursor-pointer ${clicked === 4?'border-b-4 border-orange-400 text-black/75 ':''}`}> About</button>
                    <button onClick={()=>setClicked(5)} className={`h-full cursor-pointer ${clicked === 5?'border-b-4 border-orange-400 text-black/75 ':''}`}> Contacts</button>
                </nav>
                }
            </div>
            <div className='flex justify-between items-center  w-1/6 sm:pl-16'>
            <div className='relative'>
                {props.cartItems > 0 &&
                    <div className='absolute -top-1 -right-1 bg-orange-400 rounded-full px-1.5 flex justify-center items-center '>
                        <p className='text-white text-[8px] font-bold'>{props.cartItems}</p>
                    </div>
            }
                <Cart onClick={()=>setPopUp(prevPop=>!prevPop)}  className={`h-5 cursor-pointer ${popUp?'text-black/75':'text-neutral-400 '}`} />
            {popUp &&
                <div className=' absolute top-15 -right-15 w-94 h-64 rounded-lg sm:rounded-none shadow-2xl bg-white flex flex-col justify-start items-center z-20'>
                    <h2 className='font-kumbh font-bold text-black/75 text-lg border-b-1 border-neutral-200 w-full p-2'>Cart</h2>
                    <div className='w-full h-3/4 flex flex-col justify-start items-center gap-4 p-3'>
                        {
                            props.cartItems > 0?
                                <>
                                <div className='w-full h-1/2 flex justify-between items-center'>
                                    <img className='h-3/4 rounded-md' src={shoesPic} alt="shoes pic" />
                                    <div>
                                        <p className='text-neutral-400'>Fall Limited Edition Sneakers</p>
                                        <p>$125.00 x {props.cartItems} <span className='font-bold'>${props.cartItems*125}.00</span></p>
                                    </div>
                                    <button onClick={()=>props.setCartItems(0)}  className='w-3' ><img src={trash} alt="trash" className='w-full' /></button>
                                </div>
                                <button className='w-full h-1/3 rounded-lg bg-orange-400 text-black/75 font-bold'>Checkout</button>
                                </>
                                :
                                <p className='text-sm text-neutral-400 font-bold mt-16' >Your cart is empty.</p>
                            }
                    </div>
                    </div>
        }
            </div>
                <img src={avatar} alt="avatar" className='sm:w-10 w-5 cursor-pointer hover:border-2 hover:border-orange-400 rounded-full' />
            </div>
        {
            props.isMobile && humOpen &&
            <div className='fixed top-0 left-0 w-screen h-screen bg-neutral-800/70 z-30'>
                <div className='w-2/3 h-full bg-white flex flex-col justify-start items-start p-5 gap-20'>
                    <Exit onClick={()=>setHumOpen(false)}  className='w-6 text-neutral-400' />
                    <nav className='flex flex-col justify-center items-start h-1/4 gap-6 font-bold text-lg '>
                        <a className={`h-full  cursor-pointer ${clicked === 1?'border-b-4 border-orange-400 text-black/75':''}`}>Collections</a>
                        <a className={`h-full cursor-pointer ${clicked === 2?'border-b-4 border-orange-400 text-black/75 ':''}`}>Men</a>
                        <a className={`h-full cursor-pointer ${clicked === 3?'border-b-4 border-orange-400 text-black/75 ':''}`}> Women</a>
                        <a className={`h-full cursor-pointer ${clicked === 4?'border-b-4 border-orange-400 text-black/75 ':''}`}> About</a>
                        <a className={`h-full cursor-pointer ${clicked === 5?'border-b-4 border-orange-400 text-black/75 ':''}`}> Contacts</a>
                    </nav>
                </div>
            </div>
        }
        </header>
    )
}