import React from "react";

export default function BaseInteractive({children, baseDiv, onClick}){


    return(
        <>
        <div onClick={onClick} className={baseDiv}>
            {children}
        </div>
        </>
    )
}