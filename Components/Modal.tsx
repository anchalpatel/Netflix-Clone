"use client"
import React, { useEffect, useState } from 'react'
import MuiModal from '@mui/material/Modal'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '@/atoms/ModalAtom'
import { useModal } from '@/Hooks/useModal'
import { Movie, Element, Genre } from '@/tyscript'
import { CheckIcon, PlusIcon, HandThumbUpIcon } from '@heroicons/react/16/solid'
import { IoCloseOutline } from "react-icons/io5"; 
import { FaPlay } from 'react-icons/fa'
import {Toaster} from 'react-hot-toast'
import ReactPlayer from 'react-player/lazy'
import { HiOutlineVolumeOff } from "react-icons/hi";
import { RiVolumeUpLine } from "react-icons/ri";

function Modal() {
    const [modalDisplay, setModalDisplay] = useRecoilState(modalState);
    const [movie, setMovie] = useRecoilState(movieState);
    const [trailer, setTrailer] = useState<Movie | null>(null);
    const [geners, setGeners] = useState<Genre[]>([]);
    const [muted, setMuted] = useState(true);
    
    //const {showModal, setShowModal} = useModal()
    //console.log("Prop Movie : ", movieData);
    const handleClose = () => {
      setModalDisplay(false)
    }

    
    // console.log("Here : ", movieData?.media_type);

const fetchData = async () => {
  if(!movie){
    return;
  }
  try{
    const responce = await fetch(`https://api.themoviedb.org/3/${
      movie?.media_type === 'tv' ? 'tv' : 'movie'
    }/${movie?.id}?api_key=${
      process.env.NEXT_PUBLIC_API_KEY
    }&language=en-US&append_to_response=videos`)
   
    const data = await responce.json();
    console.log("Responce : ",data)
    
    if(data?.videos){
      const index = data.videos.results.findIndex(
        (element: Element) => element.type === 'Trailer'
      )
      setTrailer(data.videos?.results[index]?.key)
    }

    if(data?.geners){
      setGeners(data.geners);
    }
      
  }
  catch(error){
    console.log("Error occured while fetching movie video : ", error)
  }
 
}

useEffect(()=>{
  fetchData();
 
}, [movie]);

  return (
    <MuiModal
      open={modalDisplay}
      onClose={handleClose}
      className="fixex !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide"
    >
      <>
        <Toaster position="bottom-center" />
        <button
          onClick={handleClose}
          className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818]"
        >
          <IoCloseOutline className="h-6 w-6" />
        </button>

        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            style={{ position: 'absolute', top: '0', left: '0' }}
            playing
            muted={muted}
          />
          
        </div>
        <div className='flex flex-col gap-y-1 bg-[#181818]'>
          <div className="flex w-full mt-3 items-center justify-between px-10">
            <div className="flex space-x-2">
              <button className="flex items-center gap-x-2 rounded bg-white px-6 py-2 text-sm font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="h-4 w-4 text-black" />
                Play
              </button>

              {/* <button className="modalButton" onClick={handleList}>
                {addedToList ? (
                  <CheckIcon className="h-7 w-7" />
                ) : (
                  <PlusIcon className="h-7 w-7" />
                )}
              </button> */}

              <button className="modalButton">
                <HandThumbUpIcon className="h-5 w-5" />
              </button>
            </div>
            <button className="modalButton" onClick={() => setMuted(!muted)}>
              {muted ? (
                <HiOutlineVolumeOff className="h-5 w-5" />
              ) : (
                <RiVolumeUpLine className="h-5 w-5" />
              )}
            </button>
          </div>
          <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
            <div className="space-y-6 text-lg">
              <div className="flex items-center space-x-2 text-sm">
                <p className="font-semibold text-green-400">
                  {movie!.vote_average * 10}% Match
                </p>
                <p className="font-light">
                  {movie?.release_date || movie?.first_air_date}
                </p>
                <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                  HD
                </div>
              </div>

              <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                <p className="w-5/6">{movie?.overview}</p>
                <div className="flex flex-col space-y-3 text-sm">
                  <div>
                    <span className="text-[gray]">Genres: </span>
                    {geners.map((genre) => genre.name).join(', ')}
                  </div>

                  <div>
                    <span className="text-[gray]">Original language: </span>
                    {movie?.original_language}
                  </div>

                  <div>
                    <span className="text-[gray]">Total votes: </span>
                    {movie?.vote_count}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </>
    </MuiModal>
  )
}

export default Modal
