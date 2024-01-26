//"use server"
import { Movie } from '@/tyscript'
import requests from '@/utils/requests'
import React from 'react'
import Banner from './Banner'
import Row from './Row'

interface Props {
    netflixOriginals: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
    actionMovies: Movie[]
    comedyMovies: Movie[]
    horrorMovies: Movie[]
    romanceMovies: Movie[]
    documentaries: Movie[]
    //products: Product[]
  }
  
  
  async function getData() {
 
    const [
      netflixOriginals,
      trendingNow,
      topRated,
      actionMovies,
      comedyMovies,
      horrorMovies,
      romanceMovies,
      documentaries,
    ] = await Promise.all([
      fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
      fetch(requests.fetchTrending).then((res) => res.json()),
      fetch(requests.fetchTopRated).then((res) => res.json()),
      fetch(requests.fetchActionMovies).then((res) => res.json()),
      fetch(requests.fetchComedyMovies).then((res) => res.json()),
      fetch(requests.fetchHorrorMovies).then((res) => res.json()),
      fetch(requests.fetchRomanceMovies).then((res) => res.json()),
      fetch(requests.fetchDocumentaries).then((res) => res.json()),
    ])
  
    return (
      {
        netflixOriginals: netflixOriginals.results,
        trendingNow: trendingNow.results,
        topRated: topRated.results,
        actionMovies: actionMovies.results,
        comedyMovies: comedyMovies.results,
        horrorMovies: horrorMovies.results,
        romanceMovies: romanceMovies.results,
        documentaries: documentaries.results,
  
      }
    )
  }
   
async function MainSection() {
  
 
    const movieData = await getData();
  return (
    <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={movieData.netflixOriginals} />
        <section className=' space-y-20'>
          <Row title='Treanding Now' movie={movieData.trendingNow}></Row>
          <Row title='Top Rated' movie={movieData.topRated}></Row>
          <Row title='Action Movies' movie={movieData.actionMovies}></Row>
          <Row title='Comedy Movies' movie={movieData.comedyMovies}></Row>
          <Row title='Horror Movies' movie={movieData.horrorMovies}></Row>
          <Row title='Romance Movies' movie={movieData.romanceMovies}></Row>
          <Row title='Documentries' movie={movieData.documentaries}></Row>
        </section>
      </main>
  )
}

export default MainSection


