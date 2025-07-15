type Props = {
    LastName?: string;
    FirstName?: string;
    texte: string; 
    phone?: number;
};

function Message(props:Props) {

    return (
          <section className="Message">
<p> {props.FirstName} {props.LastName} {props.texte} 
            </p>
            <p>{props.phone}</p>
          </section>
            
         
    );

    
}
export default Message;