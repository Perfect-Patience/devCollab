import logo from '../assets/logo.svg'

function PurpleNavBar() {
  return (
    <div className='w-[100%]   px-6 py-2 rounded-4xl flex justify-between item-center' style = {{"backgroundColor":"rgba(255, 179, 239, 0.58)"}}>
        <div className='logo w-40'>
            <img className='w-full h-full' src={logo} alt="logo" />
        </div>
        <div className='nav'>
            <ul className='flex gap-10 text-white font-bold'>
                <li>Home</li>
                <li>How it works</li>
                <li>About</li>
            </ul>
        </div>
        <div className='btns font-bold gap-6 flex'>
            <button className='bg-white px-3 rounded-sm cursor-pointer'>Login</button>
            <button className='bg-[#4B0082] px-3 rounded-sm text-white cursor-pointer'>Sign Up</button>
        </div>
    </div>
  )
}

export default PurpleNavBar