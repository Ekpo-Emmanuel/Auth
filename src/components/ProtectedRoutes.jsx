import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoutes({children, user}) {
    //current User
    // console.log(user)
    return user ? children : <Navigate to="/sign-in" />
}
