import  axios  from "axios";
export default axios.create({
    params:{
        baseURL:'https://api.rawg.io/api',
        key:'39831e258b4a4005862d0e8d10d0de8d'

    }

})