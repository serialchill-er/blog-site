import Head from 'next/head'
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
	const [mode,setMode] = useState(true)

  return (
    <div className='bg-black min-h-screen'>
      <Head>
        <title>Random Stuff</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='p-4 flex flex-col justify-center space-y-24'>
        <div className="flex flex-col justify-center items-center">
          <h2 className='text-4xl text-gray-400'>hi, this is chhayank</h2>
          <h4 className='text-2xl text-gray-400'>a software developer</h4>
        </div>
        <p>
          <h4 className='text-lg underline text-gray-400'>Posts:</h4>
          <p className='text-gray-400'>There are 0 posts available currently.</p>
        </p>
      </main>

    </div>
  )
}
