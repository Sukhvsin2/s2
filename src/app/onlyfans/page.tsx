"use client";
import React, { useEffect } from 'react'

export default function onlyfans({count}: any) {

  const getCounts = async () => {
    const res = await fetch('/api/counts')
    console.log('res', res);
    
  }

  useEffect(() => {
    // getCounts()
  }, [])

  return (
    <main className='text-center pt-4'>
      <h1 className='text-2xl text-center pb-2'>{count}</h1>
      <p>people have searched for sukhvinder's OnlyFans page 🥵</p>
    </main>
  )
}
