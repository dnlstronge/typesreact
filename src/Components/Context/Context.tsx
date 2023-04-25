import { createContext } from "react"

export const Context = createContext({
    home: true,
    programs: false,
    playground: false,
    about: false
})