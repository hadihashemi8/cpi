import { createContext } from "react";


const authContext = createContext({
    isLogin: false,
    token: null,
    userInfos: null,
    login: () => { },
    logOut: () => { }
})

export default authContext

