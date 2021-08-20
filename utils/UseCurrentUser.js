import { useState, useEffect } from 'react';
import {getToken, setToken} from './UserStorage';

//Custom react hook to get user_data stored on device through Async storage
export default function useCurrentUser() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function getData(){
        let user_data = await getToken();
        setUser(user_data);
    }
    if(user === null){
      getData();
    }
  });

  return [user, setUser];
}