export default function Loading(){
    return(
        <div className="flex flex-col justify-center items-center w-screen h-screen">
          <div className="w-52 h-52 rounded-full border-2 border-orange-400 border-l-white animate-spin " />
          <p className="font-bold text-2xl font-kumbh animate-pulse">Loading...</p>
        </div>
    )
}