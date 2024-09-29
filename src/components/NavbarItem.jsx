import React from 'react'

function NavbarItem({item}) {
    return (
        <li>
            <a className='font-normal text-[16px] hover:text-[#154444] duration-300 leading-[20px] text-[#161616] ' href={item.path}>{item.value}</a>
        </li>
    )
}

export default NavbarItem