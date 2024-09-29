import React from 'react'
import { DudeShape, MoreIcon, SearchIcon } from '../assets/images/image'
import NavbarItem from './NavbarItem'

function Header() {
    const navbarlist = [
        {
            id: 1,
            value: 'Home',
            path: '#'
        },
        {
            id: 2,
            value: 'About',
            path: '#'
        },
        {
            id: 3,
            value: 'Features',
            path: '#'
        },
        {
            id: 4,
            value: 'Contact',
            path: '#'
        },
    ]
    return (
        <header className=' my-[40px] sm:my-0 sm:mt-[44px] sm:mb-[20px] '>
            <div className="containers">
                <div className='flex items-center justify-between'>
                    <a className='inline-block' href="/">
                        <DudeShape />
                    </a>
                    <ul className='hidden md:flex items-center gap-[70px]'>{navbarlist.map(item => <NavbarItem key={item.id} item={item}/>)}</ul>
                <div className='flex space-x-[30px]'>
                    <button className='hidden sm:block'><SearchIcon/></button>
                    <button><MoreIcon/></button>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Header