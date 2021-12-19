import { useMoralis } from 'react-moralis';

function Changeusername() {

    const { user, setUserData } = useMoralis();

    const changeUsername = () => {
        const username = prompt(`Enter your new name ${user.getUsername()}`);
        if (username) {
            setUserData({
                username
            });
        }
    }

    return (
        <div className="text-xl absolute top-0 right-0 font-semibold underline hover:cursor-pointer" onClick={changeUsername}>
            change your name
        </div>
    )
}

export default Changeusername
