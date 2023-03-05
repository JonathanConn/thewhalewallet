import Navbar from '@/components/Navbar';
import IUser from '@/components/types/IUser';
import { useState } from 'react';
import UserHandler from '@/components/utils/UserHandler.service';
import { PlaidChart } from '@/components/plaid/PlaidChart';

export default function Dashboard() {

    const [currentUser, setCurrentUser] = useState<IUser>({} as IUser);
    
    return (
        <div>
            <UserHandler setCurrentUser={setCurrentUser} />
        
            <Navbar />
            <div className='flex grow-1 justify-center bg-slate-300'>
                <PlaidChart user={currentUser} />
            </div>
        </div>
    );
}

