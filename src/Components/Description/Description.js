import './Description.css'

const Description = (props) => {
    console.log(props.topic.id)
    console.log(props.topic.category)
    console.log(props.topic.DateCreated)
    console.log(props.topic.shortText)
    
    
    return (
        
        <div>
            <div>
                <img className="backdrop" src={window.location.origin + '/img/backdrop.jpg'} alt="backdrop"/>
                <div className="des-container">
                <p className='des-title'>{props.topic.title}</p>
                <p className='des-detail'><span>{props.topic.DateCreated} </span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>{props.topic.comments}</span> </p>
                <img className='des-img' src={window.location.origin + `/img/${props.topic.img}`} alt='img'/>
                
                
                <p className='des-text'>{props.topic.longText}</p>
               </div>
                
            </div>
        </div>
       

    )
}

export default Description;