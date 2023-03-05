import Navbar from '@/components/Navbar';
import IUser from '@/components/types/IUser';
import { useState } from 'react';
import { PlaidChart } from '@/components/plaid/PlaidChart';

export default function Dashboard() {    
    return (
        <div>        
            <Navbar />
            <div className='flex grow-1 justify-center bg-slate-300'>
                <PlaidChart />
            </div>
        </div>
    );
}

