"use client";
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import { Movie } from '@/tyscript'
import requests from '../utils/requests'


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

function Home() {
  // const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  // const [trendingNow, setTrendingNow] = useState<Movie[] >([]);
  // const [topRated, setTopRated] = useState<Movie[]>([]);
  // const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  // const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  // const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);

  // const [romanceMovies, setRomanticMovies] = useState<Movie[]>([]);
  // const [documentaries, setDocumentries] = useState<Movie[]>([]);

  // const dataFetch = async () => {
  //   await fetch(requests.fetchNetflixOriginals)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setNetflixOriginals(data)
  //     //setLoading(false)
  //   })

  //   await fetch(requests.fetchTrending)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setTrendingNow(data)
  //     //setLoading(false)
  //   })

  //   await fetch(requests.fetchTopRated)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setTopRated(data)
  //     //setLoading(false)
  //   })

  //   await fetch(requests.fetchActionMovies)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setActionMovies(data)
  //     //setLoading(false)
  //   })
  //   await fetch(requests.fetchComedyMovies)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setComedyMovies(data)
  //     //setLoading(false)
  //   })
  //   await fetch(requests.fetchHorrorMovies)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setHorrorMovies(data)
  //     //setLoading(false)
  //   })
  //   await fetch(requests.fetchDocumentaries)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setDocumentries(data)
  //     //setLoading(false)
  //   })
  //   await fetch(requests.fetchRomanceMovies)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setRomanticMovies(data)
  //     //setLoading(false)
  //   })

  // }
  
  // useEffect(() => {
  //   dataFetch();
  // }, []);
  
  console.log("Netflix originals : ", netflixOriginals);
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>

      <main>
        <Banner netflixOriginals={netflixOriginals}></Banner>
        <section>
          {}
          {}
          {}
          {}
          
          {}
          {}
        </section>
      </main>

    </div>
  )
}

export default Home

