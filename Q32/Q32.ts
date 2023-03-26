const current_users:string[] = [`axel`,`mark`,`jude`,`john`,`petter`];
const new_users:string[] = [`Eric`,`JOHN`,`kim`,`david`,`mark`];

for(const newUserName of new_users){
    if(current_users.some(username1 => username1.toLowerCase() === newUserName.toLowerCase())){
       console.log(`person will need to enter new user name,${newUserName} is not availible.`)
    }else{
        console.log(`${newUserName} user name is availible.`)
    }
}