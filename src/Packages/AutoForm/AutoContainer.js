import React, { Fragment } from "react";
import { Card } from "antd";
import SectionContainer from "./components/SectionContainer";

export default function AutoContainer(props) {
  return (
    <Fragment>
      {props.sections.map(section => (
        <SectionContainer data={section} />
      ))}
    </Fragment>
  );
}
