import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function Featured() {
  return (
    
    
    
    <Card className="text-center" style={{margin: "2%", cursor: "pointer"}}>
      
      <Card.Body>
        <Card.Title>Services that aspires your business! <i class="lab la-servicestack" style={{ fontSize: '26px'}}></i></Card.Title>
        <Card.Text>
        Our services are designed to help your business thrive and reach new heights. 
        Whether you're looking to improve your online presence, streamline your operations,
         or boost your revenue, we have the expertise and resources to make it happen </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Last updates: 2 days ago</Card.Footer>
    </Card>
  
  );
}

export default Featured;