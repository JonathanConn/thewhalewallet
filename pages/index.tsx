import IUser from '@/components/types/IUser';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { useEffect, useState } from 'react';
import UserHandler from '@/components/utils/UserHandler.service';
import { PlaidChart } from '@/components/plaid/PlaidChart';

export default function Dashboard() {
    const [currentUser, setCurrentUser] = useState<IUser>(noUser);

    useEffect(() => {
        const init = async () => {
            await getUserByEmail({ user_email: "fake_email@gmail.com"}).then((user) => {
                setCurrentUser(user);
            });
        } 
        init();  
    }, []);

    
    return (
        <>
            <UserHandler setCurrentUser={setCurrentUser} />

            <Navbar />
            {/* <div className="hero min-h-screen min-w-max bg-base-100"> */}
            <div className='flex flex-auto flex-col place-items-center'>
                <PlaidChart user={currentUser} />
            </div>
                {/* <WalletDisplay /> */}
                {/* <PlaidDisplay user={currentUser}/> */}
            {/* </div> */}
        </>
    );
}

