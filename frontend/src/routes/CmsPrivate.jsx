import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { fromStorage } from "../lib/functions"

export const CmsPrivate=({children})=>{
    const admin=useSelector(state=>state.admin)
    const [loggedIn,setLoggenIn]=useState(true)
    useEffect(()=>{
if(Object.keys(admin).length<1){
const token = fromStorage('admin_token');
if(token==null|| token == ''){
    setLoggenIn(false)
}else{
    // token 
    s
}
}
    },[admin])
    return children
} 