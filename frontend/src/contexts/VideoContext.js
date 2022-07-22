import { createContext, useState } from "react";

export const VideoContext = createContext()

export function VideoContextProvider({children}){
    // const [] = useState();

    return (
        <VideoContext.Provider>
            {children}
        </VideoContext.Provider>
    )
}