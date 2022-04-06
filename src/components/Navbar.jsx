import React from 'react';
import { FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#023047] text-slate-100">
     
        <div>
            <img src={Logo} alt="Logo image" style ={{ width: '70px' }}/>

        </div>
        {/*Menu */}
        <div>
            <ul  className="flex">
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </div>
        {/*hamburger */}
        <div className="hidden">
            <FaBars />
        </div>
        {/*mobile menu */}
        <div>
        <ul className="hidden">
                <li>HOME</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contacts</li>
            </ul>
        </div>

        {/*icons */}
        <div></div>
    
    </div>
  )
}

export default Navbar
