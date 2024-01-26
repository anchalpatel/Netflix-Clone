"use client"
import { Movie } from '@/tyscript'
import React, { useState } from 'react'
import { useModal } from '@/Hooks/useModal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/ModalAtom'

interface Props {
    movie : Movie
}

function Thumbnail(prop : Props) {
  const currMovie = prop.movie
  
  const [modalDisplay, setModalDisplay] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  return (
    <div
    className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    onClick={() => {
      setMovie (currMovie)
      setModalDisplay(true)
    }}
  >
    <img
      src={`https://image.tmdb.org/t/p/w500${
        currMovie.backdrop_path || currMovie.poster_path
      }`}
      className="rounded-sm object-cover md:rounded"
      
    />
  </div>
  )
}

export default Thumbnail