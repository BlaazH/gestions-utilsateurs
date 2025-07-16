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

    
        <section className="grid">
{users.map((user:User)=> (
    <article className="user">
<h1>{user.id} {user.name}</h1> 
<h2>{user.gender} {user.age}</h2> 
<h3>{user.eyecolor} {user.company}
     {user.texte}</h3>
    </article>
    ))}
        </section>
    );
};

export default Users;