import {useMutation} from 'react-query'
import { myMadridApi } from '../../api/myMadridApi';
import { sleep } from '../../api/helpers/sleep';
import { User } from '../../interfaces/user';
import { Login } from '../../interfaces/login';

const getLogin= async(userLogin:Login):Promise<User> =>{
    //await sleep(5);
    console.log(userLogin);
    const {data}= await myMadridApi.post<User>('/auth/authenticate',userLogin);
    return data;
  }

export  const mutationLogin = (userLogin?:Login)=>{
    const mutaion = useMutation
        (
            (userLogin:Login) => getLogin(userLogin)
        )

    return mutaion
}