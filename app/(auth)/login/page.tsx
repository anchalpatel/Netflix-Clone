"use client"
import useAuth from '@/Hooks/useAuth'

import Head from 'next/head'

import React, { useState } from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'

interface Inputs{
  email : string,
  password : string
} 

function login() {
  const [login, setLogin] =  useState(false);
  const {signIn, signUp} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async({email, password}) => {
    if(login){
      await signIn(email, password);
      
    }
    else{
      await signUp(email, password);
    }
  }
  return (
    <div className='flex justify-center items-center'>
        <Head>
            <title>Home - Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <img src="https://rb.gy/p2hphi" height={"screen"} width={"screen"} alt="" className="image !hidden opacity-60 sm:!inline h-screen object-fill w-screen"/>
        <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute md:mt-36 space-y-8 rounded bg-black/75 py-10 px-6 lg:w-[30%] w-[60%] md:w-[40%] top-[10rem] md:top-0"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
        <label className="inline-block w-full text-[15px]">
          <input
            type="email"
            placeholder="Email"
            className="input text-[15px]"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Please enter a valid email.
            </p>
          )}
        </label>
        <label className="inline-block w-full text-[15px]">
          <input
            type="password"
            placeholder="Password"
            className="input text-[15px]"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="p-1 text-[13px] font-light  text-orange-500">
              Your password must contain between 4 and 60 characters.
            </p>
          )}
        </label>
      </div>

      <button
        className="w-full rounded bg-[#e50914] py-3 text-[15px] font-semibold"
        onClick={() => setLogin(true)}
      >
        Sign In
      </button>
      <div className="text-[gray]">
          New to Netflix?{' '}
          <button
            type="submit"
            className="text-white hover:underline"
            onClick={() => setLogin(false)}
          >
            Sign up now
          </button>
      </div>
    </form>
    </div>
  )
}

export default login

function sigIn(email: string, password: string) {
  throw new Error('Function not implemented.')
}


function signUp(email: string, password: string) {
  throw new Error('Function not implemented.')
}
