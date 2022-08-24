import React, {useState} from "react"


const UserContext = React.createContext();

function UserProvider({ childern }){
  const [user, setUser] = useState(null)
  return <UserContext.Provider value={ {user, setUser}}>{ childern }</UserContext.Provider>
}

export { UserContext, UserProvider}