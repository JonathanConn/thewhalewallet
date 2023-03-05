import axios, { AxiosResponse } from "axios";
import IWallet from "../types/IWallet";

export async function OnLinkSuccessCallback(args: any) {

    let res = await axios.post(`/api/dyn`, {
        uuid: args.user.userId
        });

    let wallets: IWallet[] = [];
    for (let i = 0; i < res.data.count; i++) {
        wallets.push({
                name: res.data.wallets[i].name,
                address: res.data.wallets[i].publicKey,
                isFavorite: false,
                ens: args.user.ens,
        } as IWallet);
    }
    console.log(wallets);
    await axios.put(`/api/db/users`, {
        user: {
            email: args.user.email,
            wallets: wallets
        }
    })
    .catch((error) => {
        console.log(`{failed to update: ${error}`);
    });
}