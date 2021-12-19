import { ByMoralis } from "react-moralis"

import { useRef } from "react"
import { useMoralisQuery } from 'react-moralis';
import Messagecard from "./Messagecard"
import InputBox from "./InputBox"



const Messages = () => {

    const messageBoxRef = useRef();
    const { data, error, isLoading } = useMoralisQuery("Messages", (query) => {
        return query.ascending('createdAt').greaterThan("createdAt", new Date(Date.now() - 15 * 1000)).limit(15)
    },
        [], {
        live: true
    });

    return (
        <div className="pt-5">
            <div className="text-center">
                <div className="inline-block">
                    <ByMoralis variant="dark" />
                </div>

            </div>
            <div ref={messageBoxRef} className="h-80 w-full overflow-y-scroll flex flex-col p-5" >
                {data.map((el) => <Messagecard key={el.id} messages={el.attributes.message} ethAddress={el.get("ethAddress")} />)}
            </div>
            <InputBox messageBoxRef={messageBoxRef} />
        </div>
    )
}

export default Messages
