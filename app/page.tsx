
"use client"
import Head from 'next/head'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import { Movie } from '../tyscript'
import requests from '../utils/requests'
import Row from '@/Components/Row'
import useAuth from '@/Hooks/useAuth'
import { useRecoilValue } from 'recoil'
import { modalState } from '@/atoms/ModalAtom'
import Modal from '@/Components/Modal'
import MainSection from '@/Components/MainSection'


const Home = () => {
  
  const {loading} = useAuth();
  const showModal = useRecoilValue(modalState)
  
  return (
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>
      <MainSection></MainSection>
      {
        showModal && <Modal></Modal>
      }

    </div>
  )
}

export default Home

