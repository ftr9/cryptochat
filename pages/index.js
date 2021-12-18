import Head from 'next/head'

import Login from '../components/Login';

//future image https://i.imgur.com/WYAjt3T.jpeg

import { useMoralis } from 'react-moralis';

export default function Home() {

  const { isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />
  return (
    <div className="text-xl">
      <Head>
        <title>Metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>welcome to {user.get("username")}</h1>
      <button onClick={() => {
        logout();
      }}>log out</button>

    </div>
  )
}
