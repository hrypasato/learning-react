import { UserContext } from './UserContext'

const user = {
    id:1,
    name:'Miguel'
}

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ hola:'Mundo', user }} >
        { children }
    </UserContext.Provider>
  )
}
