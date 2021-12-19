import { useMoralis } from 'react-moralis';
import Avatar from './Avatar';
import Image from 'next/image';
import Changeusername from './Changeusername';

const Header = () => {


    const { user } = useMoralis();

    return (
        <div className='sticky top-0 left-0 p-4 border-b'>

            <div className='lg:inline-grid relative w-full'>
                <div className='relative h-24 w-24 hidden'>
                    <Image src={'https://links.papareact.com/3pi'} className='rounded-full' layout='fill' objectFit='cover' />
                </div>
                <div>
                    <div className='relative h-36 w-36 lg:mx-auto border-pink-500 border-8 rounded-full'>
                        <Avatar logoutOnPress={true} />
                    </div>
                    <h1 className='text-3xl lg:text-center ' >Welcome to Meta chat</h1>
                    <h2 className='font-bold text-2xl lg:text-center truncate'>{user.getUsername()}</h2>
                    {/*change user name component */}
                    <Changeusername />
                </div>
            </div>

        </div>

    )
}

export default Header
