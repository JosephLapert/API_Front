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
            await axios.get('http://localhost:8000/api/auth/logout');
            setUser()
            navigate('/login')
        } catch (error) {
            console.log(error.message);
        }
    }

    const checkLoginStatus = async () => {
        try {
            const { data } = await axios.get('/auth/')
            setUser(data.success)
            navigate('/seance')
        } catch (error) {
            navigate('/');
        }
    }

    const login = async (form) => {
        
        try {

           const result =  await axios.post('/auth', form)
            console.log(result.data.success);
            setUser(result.data.success)
            // navigate('/update')            
        } catch (error) {
            console.log(error);
        }
    } 
    const getUserData = async (id) => {
         try {
             const { data } = await axios.get(`/users/${ id }`)

             console.log(data.success);
             setUser(data.success[0][0])
             
            //  navigate('/home');
         } catch (error) {
            // navigate('/');
            console.log(error.message);
         }
    }
    useEffect(() => {
        checkLoginStatus();
    },[]);

    useEffect(() => {
        if( user?.id_utilisateur ) {            //  '?' Avoid error 'Cannot read properties of undefined (id)'
            console.log(user.id_utilisateur);
            getUserData(user.id_utilisateur);
            console.log(user.id_utilisateur);
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