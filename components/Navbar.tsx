import Image from 'next/image';
import { useRouter } from 'next/router';
import { DynamicWidget } from '@dynamic-labs/sdk-react';
export default function Navbar() {
    const router = useRouter();
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-max rounded-full">
                            <Image className="object-scale-down" src="/logo.jpeg" alt='' width={512} height={512} />
                        </div>
                    </label>
            </div>
            <div className="flex-1">
                <DynamicWidget />
            </div>
        </div>
    );
}



