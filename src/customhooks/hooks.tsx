import{useRef} from 'react'

interface propsint{
    bool:boolean
}

export const usHook=(pr:propsint)=>{ 
    const gh=pr.bool
    
    console.log(gh);
  
}
