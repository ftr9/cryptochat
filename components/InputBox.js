import { useState, useRef } from 'react';
import { useMoralis } from 'react-moralis';

function InputBox({ messageBoxRef }) {

    const [inputmessage, setInputMessage] = useState("");
    const inputRef = useRef();
    const { user, Moralis } = useMoralis();

    const onMessageSubmit = async () => {
        if (!inputmessage) return
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();
        try {
            await messages.save({
                message: inputmessage,
                username: user.getUsername(),
                ethAddress: user.get('ethAddress')
            })
            alert("message sent");
            messageBoxRef.current.scrollIntoView({ scroll: 'smooth' });
        } catch (err) {
            console.log(err.message);
        }



        setInputMessage("");
        inputRef.current.focus();
    }

    return (
        <div className="flex align-center justify-center py-2">
            <input ref={inputRef} autoFocus={true} value={inputmessage} onChange={(e) => {
                setInputMessage(e.target.value);
            }} className="w-6/12 px-2 py-2" type="text" placeholder="Enter message ..."></input>
            <button className="bg-black text-sm px-3 text-white" onClick={() => onMessageSubmit()}>send</button>
        </div>
    )
}

export default InputBox
