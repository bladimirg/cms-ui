import {useQuery} from 'react-query'
import { myMadridApi } from '../../api/myMadridApi';
import { sleep } from '../../api/helpers/sleep';
import { User } from '../../interfaces/user';
import { Login } from '../../interfaces/login';

const getLogin= async(userLogin:Login):Promise<User> =>{
    await sleep(5);
    const {data}= await myMadridApi.post<User>('/auth/authenticate',userLogin);
    console.log(user);
    return data;
  }

export  const useLogin = (userLogin:Login)=>{
    const loginQuery = useQuery
        (
            ['user'],
            () => getLogin( userLogin ), 
            {
                enabled : false
            }
    );
    return loginQuery
}