import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <div  className='nav-container'>
    <div className='layout-header'>Header</div>
    <ul className='header-ul'>
      <li className='header-li'><Link href='/'><a>home</a></Link></li>
      <li className='header-li'><Link href='/about'><a>about</a></Link></li>
      <li className='header-li'><Link href='/news'><a>news</a></Link></li>
      <li className='header-li'><Link href='/posts'><a>posts</a></Link></li>
    </ul>
     
    </div>
  )
}
