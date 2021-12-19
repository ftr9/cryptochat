import Image from "next/image"
import { useMoralis } from 'react-moralis';
const Avatar = ({ username, logoutOnPress }) => {
    const { user, logout } = useMoralis();
    return (
        <Image className="rounded-full bg-black hover:cursor-pointer hover:opacity-50" src={`https://avatars.dicebear.com/api/human/:${username || user.getUsername()}.svg`} layout="fill"
            onClick={() => logoutOnPress && logout()}
        />
    )
}

export default Avatar
