import Image from "next/image"
import { useMoralis } from 'react-moralis';
import { useState } from "react";
import Head from "next/head";

const Login = () => {

    const { authenticate } = useMoralis();
    const [isLoading, setisLoading] = useState();

    return (
        <div className=" text-black relative h-screen">
            <Head>
                <title>hello word</title>
                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            </Head>
            <h1>Login with crpyto in js</h1>
            <div className="flex flex-col items-center justify-center absolute w-full z-50 h-4/6 space-y-4">
                <Image src={"/images/metaLogo.png"} height={500} width={500} className="object-cover rounded-full" ></Image>
                {/*login logo */}

                <h2 className={"text-5xl mb-10"}>Meta chat</h2>

                {
                    isLoading ? <div className="inline-block text-5xl text-black-400 animate-bounce" ><ion-icon name="logo-bitcoin"></ion-icon> </div> : ""
                }

                <button onClick={async () => {
                    setisLoading(true);
                    const auth = await authenticate();
                    if (!auth) {
                        setisLoading(false);
                    }

                }
                } className="bg-orange-500 p-3 rounded-md font-semibold">Login with Metaverse</button>
            </div>

            <div className="w-full h-screen">
                {/* background */}
                <Image src={'/images/wow.jpg'} layout="fill" objectFit="cover"></Image>
            </div>
        </div>
    )
}

export default Login
