"use client";
import { baseUrl } from "@/Constants/movie";
import { Movie } from "@/tyscript";

import { InformationCircleIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useModal } from "../Hooks/useModal"; 
import { modalState, movieState } from "@/atoms/ModalAtom";
import { useRecoilState } from "recoil";
interface BannerProps {
  netflixOriginals: Movie[];
}

function Banner({ netflixOriginals }: BannerProps) {
  //console.log("fetchNetflixOriginals:", netflixOriginals);
  const [currMovie, setCurrMovie] = useState<Movie | null>(null);
  //const {movie, setMovie, showModal, setShowModal} = useModal();
  const [modalDisplay, setModalDisplay] = useRecoilState(modalState);
  const [movie, setMovie] = useRecoilState(movieState);
  useEffect(() => {
    
      setCurrMovie(
        netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
      );
    
  }, [netflixOriginals]);

 
  //console.log(currMovie);
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end">
    <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
      <img
        src={`${baseUrl}${currMovie?.backdrop_path || currMovie?.poster_path}`}
        className=" object-cover"
      />
    </div>

   <div className="mt-[20rem] w-[60%] flex-col gap-4 space-y-3">
      <h1 className="text-2xl font-bold md:text-4xl lg:text-5xl">
        {currMovie?.title || currMovie?.name || currMovie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl">
        {currMovie?.overview.length >300 ? currMovie?.overview.substring(0, 350) + '...': currMovie?.overview}
        {/* {
          movie?.overview
        } */}
      </p>

      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black" onClick={() => {
            setMovie(currMovie);
            setModalDisplay(true)
          }}>
          <FaPlay className="h-3 w-3 text-black md:h-4 md:w-4" /> Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
        >
          More Info <InformationCircleIcon className="h-3 w-3 md:h-5 md:w-5" />
        </button>
      </div>
   </div>
  </div>
  );
}

export default Banner;


