import { Container, Row, Col } from "react-bootstrap";

const AboutusContent = () => {
  const mystyle = {
    height: "400px",
    width: "500px",
    borderRadius: "5%",
  };

  const rowstyle = {
    padding: "20px",
    margin: "10px",
  };
  return (
    <section className="banner" id="home">
      <Container>
        <hr></hr>
        <Row style={rowstyle} className="align-items-center">
          <Col>
            <h1 className="lg:text-[60px] text-[30px] mb-[20px] m-[auto]">Shreyansh Agrawal</h1>
            <p className="">
              Namaste! I'm a third-year undergraduate student studying computer
              science at the Indian Institute of Technology Jammu, having an
              overall CGPA of 8.45 at the end of the second year. My score in
              senior secondary school was 96.2 percent. I've studied operating
              systems, data structures and algorithms, database management
              systems, computer architecture, and a few others as part of my
              current degree, which has advanced my understanding of computer
              systems and programming.
            </p>
            <p>
              I've been developing websites and mobile apps concurrently. I have
              used ReactJS for the front end, NodeJS for the back end, and MySQL
              and Firebase for database management. I enjoy solving problems and
              conducting analyses and frequently participate in college and
              national-level hackathons. I recently made it to the Smart India
              hackathon 2022 grand finale for a team project based on app
              development. Thanks to these competitions, I've improved my
              teamwork, communication, and clarity of thought.
            </p>
            <p>
              I would be glad to connect. Drop a message here on LinkedIn or
              email me at agrawal.333.shreyansh@gmail.com
            </p>
            Have a great day.
          </Col>
          <Col>
            {/* <img style={mystyle} src="image-1.png" alt="Image" /> */}
          </Col>
        </Row>
        <hr></hr>
      </Container>
    </section>
  );
  
};

export default AboutusContent;
