import logo from '../assets/logo.svg'

function PurpleNavBar() {

    function ToggleMenu(){
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden')
    }

    return (
    <div>
    <div className='w-[100%]   px-6 py-2 rounded-4xl flex justify-between item-center' style = {{"backgroundColor":"rgba(255, 179, 239, 0.58)"}}>
        <div className='logo w-40'>
            <img className='w-full h-full' src={logo} alt="logo" />
        </div>
        <div className='nav '>
            <ul className='md:flex hidden  gap-10 text-white font-bold'>
                <li>Home</li>
                <li>How it works</li>
                <li>About</li>
            </ul>
        </div>
        <div className='btns font-bold hidden md:flex gap-6'>
            <button className='bg-white px-3 rounded-sm cursor-pointer'>Login</button>
            <button className='bg-[#4B0082] px-3 rounded-sm text-white cursor-pointer'>Sign Up</button>
        </div>

        <button onClick={ToggleMenu} className='md:hidden '>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="1em"
      height="1em"
      className='text-2xl'
    >
      <g
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path d="M7.94971 11.9497H39.9497"></path>
        <path d="M7.94971 23.9497H39.9497"></path>
        <path d="M7.94971 35.9497H39.9497"></path>
      </g>
    </svg>     </button>

    
    </div>
    <div className='md:hidden hidden absolute w-full h-screen top-0 left-0 px-10 py-10 flex justify-between items-start' id="mobile-menu" style={{backgroundColor:"oklch(0.14 0.06 308.36)"}} >
    <ul className='text-lg flex flex-col gap-5 text-white' >
        <li className=''>Home</li>
        <li>About</li>
        <li>How it works</li>
        <li>Login</li>
        <li>SignUp</li>
    </ul>
    <button onClick={ToggleMenu} className='text-3xl text-white font-semibold'>x</button>
    </div>
    </div>
  )
}

export default PurpleNavBar