import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Favourites = () => {
  const data = useSelector((state) => state.favourites.content);
  console.log(data);
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      {data.map((item, i) => (
        <Col xs={10} key={i}>
          <Row>
            <Col xs={3} key={i}>
              <Link to={`/${item.company_name}`}>{item.company_name}</Link>
            </Col>
            <Col xs={8}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};
export default Favourites;
