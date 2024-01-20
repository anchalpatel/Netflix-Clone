import requests from '@/utils/requests'
import React from 'react'
import Header from './Header'
import { Movie } from '@/tyscript'
import Banner from './Banner'


interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
    
  }

function MainSection({
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries
} : Props) {
  return (
    <div>
        
        <Banner netflixOriginals={netflixOriginals}></Banner>
    </div>
  )
}

export default MainSection

export const getStaticProps = (async () => {
    const res = await fetch(requests.fetchNetflixOriginals)
    const netflixOriginals = await res.json()
    return { props: { netflixOriginals } }
  }) 

// export const getStaticProps = async () => {
//     try {
//       const [
//         netflixOriginals,
//         trendingNow,
//         topRated,
//         actionMovies,
//         comedyMovies,
//         horrorMovies,
//         romanceMovies,
//         documentaries,
//       ] = await Promise.all([
//         fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
//         fetch(requests.fetchTrending).then((res) => res.json()),
//         fetch(requests.fetchTopRated).then((res) => res.json()),
//         fetch(requests.fetchActionMovies).then((res) => res.json()),
//         fetch(requests.fetchComedyMovies).then((res) => res.json()),
//         fetch(requests.fetchHorrorMovies).then((res) => res.json()),
//         fetch(requests.fetchRomanceMovies).then((res) => res.json()),
//         fetch(requests.fetchDocumentaries).then((res) => res.json()),
//       ]);
  
//       return {
//         props: {
//           netflixOriginals: netflixOriginals.results,
//           trendingNow: trendingNow.results,
//           topRated: topRated.results,
//           actionMovies: actionMovies.results,
//           comedyMovies: comedyMovies.results,
//           horrorMovies: horrorMovies.results,
//           romanceMovies: romanceMovies.results,
//           documentaries: documentaries.results,
//         },
//       };
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
  
//       return {
//         props: {
//           // Pass empty or default values in case of an error
//           netflixOriginals: [],
//           trendingNow: [],
//           topRated: [],
//           actionMovies: [],
//           comedyMovies: [],
//           horrorMovies: [],
//           romanceMovies: [],
//           documentaries: [],
//         },
//       };
//     }
//   };
  