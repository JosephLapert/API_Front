import axios from "../config/axios";
import { useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            await axios.get('/auth/logout');
            setUser()
            navigate('/')
        } catch (error) {
            console.log(error.message);
        }
    }

    const checkLoginStatus = async () => {
        try {
            const { data } = await axios.get('/auth/')
            setUser(data.success)
            navigate('/update')
        } catch (error) {
            navigate('/');
        }
    }

    const login = async (form) => {
        try {
           const result =  await axios.post('/auth', form)
            setUser(result.data.success)
            navigate('/seances')            
        } catch (error) {
            console.log(error);
            navigate('/')
        }
    }
    const getUserData = async (id) => {
         try {
             const { data } = await axios.get(`/users/${ id }`)
             setUser(data.success[0][0])             
         } catch (error) {
            console.log(error.message);
         }
    }
    useEffect(() => {
        checkLoginStatus();
    },[]);

    useEffect(() => {
        if( user?.id_utilisateur ) {            //  '?' Avoid error 'Cannot read properties of undefined (id)'
            getUserData(user.id_utilisateur);
        }
    },[user])

    const value = {
        user,
        setUser,
        login,
        checkLoginStatus,
        logout
        
    }

    return <AuthContext.Provider value={value}>
        { children }
        </AuthContext.Provider>
}
 
export default AuthContextProvider;