"use client"
import Head from 'next/head'
import Header from '../Components/Header'
import MainSection from '@/Components/MainSection'    
import useAuth from '@/Hooks/useAuth'
import {useRecoilState, useRecoilValue} from 'recoil'
import { modalState } from '../atoms/ModalAtom'
import Modal from '@/Components/Modal'
import { useModal } from '../Hooks/useModal'
import { Suspense } from 'react'


const Home = () => {
  const {loading} = useAuth();
  const subscription = false;

  if(loading || subscription === null){
    return null;
  }

  if(!subscription){
    return <div>Plans</div>
  }
 const showModal = useRecoilValue(modalState)
  return (
    
    <div className={`relative h-screen bg-gradient-to-b lg:h-[140vh]`}>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Suspense fallback={<p>Loading...</p>}>
        <MainSection></MainSection>
      </Suspense>
      
      {
        showModal && <Modal></Modal>
      }

    </div>
  )
}

export default Home



