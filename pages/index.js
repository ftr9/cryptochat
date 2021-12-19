import Head from 'next/head'

import Login from '../components/Login';
import Header from '../components/Header';

//future image https://i.imgur.com/WYAjt3T.jpeg

import { useMoralis } from 'react-moralis';
import Messages from '../components/Messages';

export default function Home() {

  const { isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-br from-purple-600 to-pink-600 overflow-hidden">
      <Head>
        <title>Metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='max-w-screen-xl mx-auto'>
        {/* header */}
        <Header />
        {/*messages */}
        <Messages />
      </div>

    </div>
  )
}


/*<h1>welcome to {user.get("username")}</h1>
      <button onClick={() => {
        logout();
      }}>log out</button>*/