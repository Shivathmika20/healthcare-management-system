import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"

export const createUser=async(user: any)=>{
    try{
        const newuser=await users.create(
            ID.unique(),
            user.email,
            //password
            user.phone,
            user.name,
        )
        
        
        return newuser;

    }
    catch(err: any){ 
        
        if(err && err?.code === 409){
            const existingUser=await users.list(
               [ Query.equal('email',[user.email])]
            )

            return existingUser?.users[0]
        }
    }

}
