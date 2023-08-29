import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import './Topic.css'
const Topic = (props) => {
    
    return (
        <div>
        <Card className='card' style={{ width: '20rem' }}>
        <Card.Link href={props.topic.cardExpand} >
        <Card.Img className="card-img" variant="top" src={window.location.origin + `/img/${props.topic.img}`} />
        </Card.Link>
        <Card.Body className='card-body'>
        <Card.Link className="expand" href={props.topic.cardExpand}>
          <Card.Title className='card-title'>{props.topic.title}</Card.Title>
          </Card.Link>
          <Card.Text>
            {props.topic.sortText}
          </Card.Text>
        </Card.Body >
        <Card.Body className='card-body'>
          <Card.Link className="expand-link"  href={props.topic.cardExpand}>READ MORE... </Card.Link>
        </Card.Body>
        <ListGroup className="list-group-flush">
            
        <ListGroup.Item><span className='span'>{props.topic.DateCreated}      </span><span className='span'>&#8226;</span><span className='span'>     {props.topic.comments}</span></ListGroup.Item>
      </ListGroup>
      </Card>
      </div>
          );
        }
        
        

export default Topic;