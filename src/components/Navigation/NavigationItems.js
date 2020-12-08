import React, { useContext } from "react";

import NavigationItem from "./NavigationItem";
import { LanguageContext } from "../../context";

const NavigationItems = (props) => {
  const context = useContext(LanguageContext);
  return (
    <ul className="navigation">
      <NavigationItem to="top" opened={props.opened} clicked={props.clicked}>
        {context.dictionary.nav.home}
      </NavigationItem>
      <NavigationItem
        to="section-technologies"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.technologies}
      </NavigationItem>
      <NavigationItem
        to="section-examples"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.examples}
      </NavigationItem>
      <NavigationItem
        to="section-contact"
        opened={props.opened}
        clicked={props.clicked}
      >
        {context.dictionary.nav.contact}
      </NavigationItem>
    </ul>
  );
};

export default NavigationItems;
