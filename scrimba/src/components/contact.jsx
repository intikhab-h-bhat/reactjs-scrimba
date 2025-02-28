export default function Contact(props){

    return(
       
            <div className="contact-card">
            <img  src={props.img} />
            <h1>{props.name}</h1>

            <div className="info-group">
                <img  src="" alt="phoneicon"/> 
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="" alt="mailicon"/> 
            <p>{props.email}</p>
            </div>

            </div>
      
    )
}