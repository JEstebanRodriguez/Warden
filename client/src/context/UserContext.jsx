import { createContext, useState } from 'react'
export const UserContext = createContext(null)

const initialUserData = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: {}

export default function UserContextProvider({ children }) {
	const [user, setUser] = useState(initialUserData)
	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	)
}
