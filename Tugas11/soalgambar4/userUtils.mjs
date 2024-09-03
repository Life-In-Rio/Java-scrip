function getUser(name){
    return `Name: ${name}`
}

var userRole = "admin"

export function getUserRole(){
    return `Role: ${userRole}`
}

export default getUser
export {userRole}