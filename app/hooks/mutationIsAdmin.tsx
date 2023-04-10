import {useMutation} from 'react-query'
import { myMadridApi } from '../api/myMadridApi';

const getIsAdmin= async():Promise<any> =>{
    //await sleep(5);
    const {data}= await myMadridApi.post('/auth/admin');
    return data;
}

export  const mutationIsAdmin  = ()=>{
    const mutaion = useMutation
    (
        (isAdmin:Boolean) => getIsAdmin()
    )
    return mutaion
}