import axios, { Axios, AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

import PlaidLink from '../../components/PlaidLink';

interface CreateLinkResponse {
  link_token: string;
}

export default function Home() {
  const [linkToken, setLinkToken] = useState('');
  const generateToken = async () => {
    const res: AxiosResponse<CreateLinkResponse> = await axios.post('/api/plaid/create_link_token');
    setLinkToken(res.data.link_token);
  };

  useEffect(() => {
    generateToken().catch((error) => {
      console.log(`generateToken() failed: ${error}`);
    });
  }, []);
  return linkToken != null ? <PlaidLink linkToken={linkToken} /> : <></>;
}
