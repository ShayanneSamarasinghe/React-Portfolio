import React from "react";

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <br></br>
      <br></br>
      <div className="container Carddd">
      <Card className= "Card">
        <CardBody className="d-flex justify-content-center">
          <CardTitle className="cardTitle">{props.name}</CardTitle>
        </CardBody>
        <CardBody className="d-flex justify-content-center">
          <CardLink href={props.repoLink}>Repo Link</CardLink>
          <CardLink href={props.appLink}>App Link</CardLink>
        </CardBody>
      </Card>
      </div>
    </div>


  );
};

export default Cards;
