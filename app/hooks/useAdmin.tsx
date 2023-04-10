import {useQuery} from 'react-query'
import { myMadridApi } from '../api/myMadridApi';
const getIsAdmin= async():Promise<any> =>{
    //await sleep(5);
    const {data}= await myMadridApi.get<any>('/test/admin');
    return data;
  }

export  const useAdmin = ()=>{
    const isAdminQuery = useQuery
        (
            ['isAdmin'],
            getIsAdmin
    );
    return isAdminQuery
}
