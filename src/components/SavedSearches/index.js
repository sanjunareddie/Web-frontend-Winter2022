/**
 * @author Kushang Arunbhai Mistry (B00870521)
 * A function, which will render all the saved houses / properties by user
 */

import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";

import House1 from "../../Resources/House 01.jpg";
import axios from "axios";

var propertiesList = [];

function SavedSearches() {
  const [savedProperties, setSavedProperties] = useState([]);

  useEffect(async () => {
    try {
      const url = "http://localhost:8080/getOneUserDetails";
      const res = await axios.post(url, {
        email: localStorage.getItem("email"),
      });
      if (res.status === 200) {
        console.log(res.data.users.savedProperties);
        propertiesList = res.data.users.savedProperties;
        try {
          const url = "http://localhost:8080/getallproperties";
          const res = await axios.post(url, {
            idList: JSON.parse(propertiesList),
          });
          if (res.status === 200) {
            setSavedProperties(res.data.propertyDetails);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <div className="outer">
        <div className="inner flexible-saved-search-houses">
          <h1 className="button-center profile-name-font title-margin">
            Saved Properties
          </h1>

          <div className="">
            <div className="saved-searches-house-card-division">
              {savedProperties.length > 0 ? (
                savedProperties.map((property) => (
                  <Card
                    key={property._id}
                    style={{ width: "15rem" }}
                    className="house-card-margin"
                  >
                    <Card.Img variant="top" src={House1} />
                    <Card.Body>
                      <Card.Title>{property.title}</Card.Title>
                      <Row>
                        <Col>
                          <Card.Text style={{ marginBottom: "0.4rem" }}>
                            {property.type}
                          </Card.Text>
                        </Col>
                        <Col>
                          <Card.Text style={{ marginBottom: "0.5rem" }}>
                            ${property.price}
                          </Card.Text>
                        </Col>
                      </Row>
                      <Card.Text style={{ marginBottom: "0.5rem" }}>
                        {property.address1}
                      </Card.Text>
                      <Card.Text style={{ marginBottom: "1rem" }}>
                        {property.address2}
                      </Card.Text>
                      <Button variant="primary">Explore more</Button>
                    </Card.Body>
                  </Card>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SavedSearches;
