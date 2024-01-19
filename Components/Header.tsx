"use client";
import React, { useEffect, useState } from 'react'
import { MdOutlineSearch } from 'react-icons/md'
import {BellIcon} from '@heroicons/react/16/solid'
import Link from 'next/link'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if(window.scrollY>0){
      setIsScrolled(true);
    }
    else{
      setIsScrolled(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className='flex items-center space-x-2 md:space-x-10'>
          <img
              src="https://rb.gy/ulxxee"
              alt="Netflix Logo"
              width={100}
              height={100}
              className="cursor-pointer object-contain"
          />

          <ul className='hidden space-x-4 md:flex'>
            <li className='headerLink' key="home-link">Home</li>
            <li className='headerLink' key="tv-shows-link">TV Shows</li>
            <li className='headerLink' key="new-populars-link">New & Populars</li>
            <li className='headerLink' key="movies-link">Movies</li>
            <li className='headerLink' key="my-list-link">My List</li>
          </ul>

        </div>

        <div className="flex items-center space-x-4 text-sm font-light">
          <MdOutlineSearch className="hidden h-6 w-6 sm:inline" />
          <p className="hidden lg:inline">Kids</p>
          <BellIcon className="h-6 w-6"  />
          <Link href="/account">
            <img
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>
      </header>
  )
}

export default Header