type Props = {
    id: string;
    age:number;
    eyecolor:string;
    name:string;
    gender: string;
    company:string;
    texte:string;
    
};

function Message(props:Props) {

    return (
        <>

<section className="Message">
       
          <h1>{props.id} </h1> 
          <h2>{props.name}</h2>
          <h3>{props.age}</h3>
          <h4>{props.gender}</h4>
          <h5>{props.eyecolor}</h5> 
          <h6>{props.company}</h6>
          <h6>{props.texte} </h6>
           
             
          
          </section>

        </>
          
          
            
         
    );

    
}
export default Message;