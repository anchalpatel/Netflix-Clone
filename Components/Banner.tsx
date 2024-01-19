
import { Movie } from '@/tyscript'
import requests from '@/utils/requests';
import React, { useState } from 'react'

interface BannerProps {
    netflixOriginals : Movie[];
}

function Banner({netflixOriginals} : BannerProps) {
    console.log(netflixOriginals);
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(()=>{
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]);
    }, [netflixOriginals])

    console.log(movie);
  return (
    <div>Banner</div>
  )
}

export default Banner
export const getServerSideProps = (async () => {
  // Fetch data from external API
  const res = await fetch(requests.fetchTrending).then((res) => res.json())
  const netflixOriginals = await res.json()
  // Pass data to the page via props
  return { props: { netflixOriginals } }
}) 

function useEffect(arg0: () => void, arg1: Movie[][]) {
  throw new Error('Function not implemented.');
}
