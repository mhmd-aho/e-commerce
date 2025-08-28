import picOne from '/src/assets/images/image-product-1.jpg';
import thumOne from '/src/assets/images/image-product-1-thumbnail.jpg';
import picTwo from '/src/assets/images/image-product-2.jpg';
import thumTwo from '/src/assets/images/image-product-2-thumbnail.jpg'
import picThree from '/src/assets/images/image-product-3.jpg';
import thumThree from '/src/assets/images/image-product-3-thumbnail.jpg';
import picFour from '/src/assets/images/image-product-4.jpg';
import thumFour from '/src/assets/images/image-product-4-thumbnail.jpg'
import plus from '/src/assets/images/icon-plus.svg';
import minus from '/src/assets/images/icon-minus.svg';
import Cart  from '/src/assets/images/icon-cart.svg?react';
import Previous from '/src/assets/images/icon-previous.svg?react';
import Next from '/src/assets/images/icon-next.svg?react';
import Exit from '/src/assets/images/icon-close.svg?react';
import { useState } from 'react';
export default function Items(props){
    const [popUp,setPopUp] = useState(false);
    const [index,setIndex] = useState(0);
    const [count,setCount] = useState(0);   
    const border = 'border-2 border-orange-400'
    const pics =[picOne,picTwo,picThree,picFour];
    const pic = pics[index];
    console.log(pic)
    const handlePrevious = ()=>{
        setIndex(prevIndex=>prevIndex === 0 ? prevIndex : prevIndex - 1)
    }
    const handleNext = ()=>{
        setIndex(prevIndex=>prevIndex === 3 ? prevIndex : prevIndex + 1)
    }
    const handlePlus = ()=>{
        setCount(prevCount=>prevCount + 1);
    }
    const handleMinus = ()=>{
        setCount(prevCount=> prevCount === 0 ? prevCount : prevCount - 1);
    }
    const handleSubmit = ()=>{
        props.setCartItems(count);
        setCount(0);
    }
    return(
        <div className="sm:w-3/4 w-full h-max sm:h-5/6 flex sm:flex-row flex-col justify-center items-center gap-0 sm:gap-24">
            <div className='sm:w-1/3 w-full h-2/6 sm:h-3/4 flex flex-col justify-between'>
                <div className='relative'>
                    <img onClick={()=>setPopUp(true)} src={pic} alt="shoes pic" className='w-full h-auto sm:rounded-2xl' />
                    { props.isMobile &&
                        <>
                        <div onClick={handlePrevious} className='absolute top-60 left-4 bg-white z-10 p-3 rounded-full flex justify-center items-center'>
                            <Previous className="text-black w-4"/>
                        </div>
                        <div onClick={handleNext} className='absolute top-60 right-4 bg-white z-10 p-3  rounded-full flex justify-center items-center'>
                            <Next className="text-black w-4"/>
                        </div>
                        </>}
                </div>
                
                {
                    !props.isMobile &&
                <div className='flex justify-between items-center w-full'>
                    <div onClick={()=>setIndex(0)} className={`w-1/5 rounded-lg ${index === 0? border : null}`} ><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 0?'opacity-40':''}`} src={thumOne} alt="pic 1 thumnail" /></div>
                    <div onClick={()=>setIndex(1)} className={`w-1/5 rounded-lg ${index === 1? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 1? 'opacity-40' : ''}`} src={thumTwo} alt="pic 2 thumnail" /></div>
                    <div onClick={()=>setIndex(2)} className={`w-1/5 rounded-lg ${index === 2? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 2? 'opacity-40' : ''}`} src={thumThree} alt="pic 3 thumnail" /></div>
                    <div onClick={()=>setIndex(3)} className={`w-1/5 rounded-lg ${index === 3? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 3? 'opacity-40' : ''}`} src={thumFour} alt="pic 4 thumnail" /></div>
                </div>
                }
            </div>
            <div className='sm:w-1/3 w-full h-4/6 sm:h-3/5 flex flex-col sm:gap-0 gap-3 sm:justify-between p-8'>
                <h2 className=' font-bold text-sm text-neutral-400 '>SNEAKER COMPANY</h2>
                <h1 className='text-3xl font-bold text-black/75 '>Fall Limited Edition Sneakers</h1>
                <p className='text-sm text-neutral-200 font-semibold'>These low-profile sneakers are your perfect casual wear companion. featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                <div className='flex flex-row sm:flex-col justify-between items-center sm:items-start'>
                     <div className='flex justify-between items-baseline-last w-2/5 '>
                          <p className='inline text-2xl text-black/75 font-bold'>$125.00</p>
                          <p className='px-1.5 bg-black/75 rounded text-white inline text-sm'>50%</p>
                     </div>
                     <p className='text-neutral-200 font-bold line-through '>$250.00</p>
                </div>
                <div className='w-full sm:h-12 h-28 flex sm:flex-row flex-col justify-between items-center'>
                    <div className='bg-neutral-50 sm:h-full h-12 w-full sm:w-2/6 flex justify-between p-2 items-center rounded-lg '>
                        <buttoun onClick={handleMinus} className="active:opacity-60 cursor-pointer"><img src={minus} alt="minus sign" className='w-3' /></buttoun>
                        <p className='font-bold '>{count}</p>
                        <button onClick={handlePlus} className="active:opacity-60 cursor-pointer"><img src={plus} alt="plus sign" className='w-3' /></button>
                    </div>
                    <button onClick={handleSubmit} className='sm:w-3/5 w-full h-12 sm:h-full bg-orange-400 active:bg-orange-400/70 cursor-pointer rounded-lg flex justify-center items-center gap-2'>
                        <Cart  className='w-4 h-4 text-black/75' />
                        <p className='font-bold text-black/75 text-sm'>Add to cart</p>
                    </button>
                </div>
            </div>
            {
                popUp && !props.isMobile && (
                    <div className='w-screen h-screen absolute top-0 left-0 bg-neutral-800/70 flex justify-center items-center'>
                        <div className='w-1/3 h-full flex flex-col justify-center items-center gap-8'>
                            <Exit onClick={()=>setPopUp(false)}  className='absolute top-8 right-1/3 h-6 w-6 active:text-orange-400 cursor-pointer'/>
                                <div className='relative'>
                                   <div onClick={handlePrevious} className='absolute -left-5 top-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-white cursor-pointer'>
                                      <Previous  className='w-4    active:text-orange-400 ' />
                                  </div>
                                  <img src={pic} alt="shoes pic" className='w-full h-auto rounded-2xl ' />
                                  <div onClick={handleNext} className='absolute -right-5 top-1/2 w-10 h-10 flex justify-center items-center rounded-full bg-white cursor-pointer'>
                                     <Next  className='w-4  active:text-orange-400' />
                                  </div>
                                </div>
                            <div className='flex justify-between items-center w-3/4'>
                                <div  className={`w-1/5 rounded-lg bg-white ${index === 0? border : null}`} ><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 0?'opacity-40':''}`} src={thumOne} alt="pic 1 thumnail" /></div>
                                <div  className={`w-1/5 rounded-lg bg-white ${index === 1? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 1? 'opacity-40' : ''}`} src={thumTwo} alt="pic 2 thumnail" /></div>
                                <div  className={`w-1/5 rounded-lg bg-white ${index === 2? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 2? 'opacity-40' : ''}`} src={thumThree} alt="pic 3 thumnail" /></div>
                                <div  className={`w-1/5 rounded-lg bg-white ${index === 3? border : null}`}><img className={`w-full h-auto rounded-lg cursor-pointer hover:opacity-40 ${index === 3? 'opacity-40' : ''}`} src={thumFour} alt="pic 4 thumnail" /></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}