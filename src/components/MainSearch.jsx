import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import Favourites from "./Favourites";
import { Link } from "react-router-dom";
import { getJobsAction, setQueryAction } from "../redux/actions";

const MainSearch = () => {
  // const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.job.jobs);
  const squery = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  // const baseEndpoint =
  //   "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <Link to="/fav">
            <h4>Favourites</h4>
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(getJobsAction(squery));
            }}
          >
            <Form.Control
              type="search"
              value={squery.query}
              // onChange={handleChange}
              onChange={(e) => {
                dispatch(setQueryAction(e.target.value));
              }}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.data.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
