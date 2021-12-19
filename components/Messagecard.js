import { useMoralis } from 'react-moralis';
function Messagecard({ messages, ethAddress }) {

    const { user } = useMoralis();

    const returnAppUI = () => {
        if (user.get("ethAddress") === ethAddress) {
            return <div className='flex justify-end'>

                <div className={` w-80 bg-gray-800 mb-2 text-white px-2 py-3`} >
                    {messages}
                </div>
            </div>

        }
        return <div className='flex justify-start'>
            <div className={` w-80 bg-gray-800 mb-2 text-white px-2 py-3`} >
                {messages}
            </div>
        </div>
    }

    return returnAppUI()
}

export default Messagecard
