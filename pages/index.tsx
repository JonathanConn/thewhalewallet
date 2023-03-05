import IUser from '@/components/types/IUser';
import { DynamicContextProvider } from '@dynamic-labs/sdk-react';
import { useEffect, useState } from 'react';
import UserHandler from '@/components/utils/UserHandler.service';
<<<<<<< HEAD
import React from 'react';
import WalletsDashboard from '@/components/WalletsDashboard';
import { getUserByEmail } from '@/components/utils/contact.service';
import { noUser } from '@/components/types/hardcoded/noUser';

export const UserContext = React.createContext({} as IUser);
=======
import { PlaidChart } from '@/components/plaid/PlaidChart';
>>>>>>> 32d23e3 (initial chart setup complete)

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
        <div className="takespace">
            <DynamicContextProvider
                settings={{
                    appLogoUrl:
                        'https://pasteboard.co/bilDMbPIERqf.png',
                    appName: 'The Whale Wallet',
                    environmentId: '488307e9-c2a6-4270-a7ac-2fa4915752f1',
                    multiWallet: true,
                    shadowDOMEnabled: true,
                }}
            >
                <UserContext.Provider value={currentUser}>
                    <WalletsDashboard />
                </UserContext.Provider>
                {/* <PlaidDisplay /> */}
                <UserHandler setCurrentUser={setCurrentUser} />
            </DynamicContextProvider>
        </div>
    );
}

