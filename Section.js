import Accordion from 'react-bootstrap/Accordion';
import '../App.css';








function Section() {
  return (
    <Accordion defaultActiveKey="0" style={{margin: "2%"}} >
      
    <h1 style={{margin: "4%" , color: "red"}}>Featured</h1>
    
      <Accordion.Item eventKey="0">
        <Accordion.Header>Web Design Services</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "lightblue", color: "black", justifyContent: 'center'}}>
        Web design encompasses all aspects of creating a website, from layout and navigation to user experience and functionality. A well-designed website can enhance your credibility,
         improve user engagement, and make it easier for visitors to find the information they need.
          </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header >Search Engine Optimisation</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "lightblue", color: "black", justifyContent: 'center'}}>
          
        SEO, or search engine optimization, is the process of optimizing your website to rank higher 
        in search engine results pages. By improving your website's visibility and relevance, you can attract more traffic
         and increase your chances of converting visitors into customers.
         </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Graphic Design</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "lightblue", color: "black", justifyContent: 'center'}}>
        Graphic design is all about creating visually appealing and engaging content that effectively communicates your 
        brand message. From logos and branding materials to social media graphics and marketing 
        collateral, good design can help you stand out from the competition and leave a lasting impression on your audience. 
          </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Section;