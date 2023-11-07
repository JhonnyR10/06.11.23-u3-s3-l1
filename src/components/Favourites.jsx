import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavAction } from "../redux/actions";

const Favourites = () => {
  const data = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div>
      <Link to="/">Home</Link>
      <Row
        className="mx-auto mt-3 p-3"
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
              <Col xs={1} key={i}>
                <Button
                  onClick={() => {
                    dispatch(removeFromFavAction(i));
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Favourites;
