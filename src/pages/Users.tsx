import Message from "../compement/Message";

type User ={
    id: string;
    age:number;
    eyecolor:string;
    name:string;
    gender: string;
    company:string;
    texte:string;
};
type Props= {

    users:User[];
};
function Users(props:Props) {
const users=props.users;

    return (

    
        <section className="bg-slate-200 grid grid-cols-2 gap-4 rounded-lg" >
{users.map((user:User)=> (
    <article className="border-4 border-gray-500/100 row-span-1 rounded-lg">
<h2 className="text-lg font-serif">{user.name} </h2> 
<h3>{user.gender} {user.age}</h3> 
<h3>{user.eyecolor} {user.company}
     {user.texte}</h3>
    </article>
    ))}
        </section>
    );
};

export default Users;