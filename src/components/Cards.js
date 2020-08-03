import React from "react";

import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
        <CardBody>
          <CardLink href={props.repoLink}>Repo Link</CardLink>
          <CardLink href={props.appLink}>App Link</CardLink>
        </CardBody>
      </Card>
    </div>


  );
};

export default Cards;
