import { IContext, TypeUserState } from '@/shared/interfaces/auth.interface'
import { FC, PropsWithChildren, createContext, useState } from 'react'

export const AuthContext = createContext({} as IContext)

const AuthProvider: FC<PropsWithChildren<unknown>> = (children) => {
	const [user, setUser] = useState<TypeUserState>(null)
	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	)
}
