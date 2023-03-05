import axios, { AxiosResponse } from 'axios';
import IUser from '../types/IUser';

export default async function userHandler(email: string): Promise<IUser> {

        const user = await axios.post(`/api/db/lookup/user`, {
            user: {
                email: email,
            }
        })
        .then(async (res: AxiosResponse<string>) => {
                return await axios.get(`/api/db/users/${res.data}`)
                .then((res: AxiosResponse<IUser>) => {
                    if (res.data && res.status == 200) {
                        return res.data;
                    }
                })
        })
        .catch(async () => {
            // user does not exist, so create one
            return await axios.post(`/api/db/users`, {
                user: {
                    email: email,
                }
            })
            .then((res: AxiosResponse<IUser>) => {
                if (res.data && res.status == 200) {
                    return res.data;
                }
            })
        });
    
    if (user) {
        return user;
    }
    return {email: email} as IUser;
}
