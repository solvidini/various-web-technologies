import React, { useContext } from 'react';

import { LanguageContext } from '../../context';
import Effect from 'react-reveal/Fade';
import Technology from "../Technology";

import css3 from "../../assets/images/technologies/css3.png";
import git from "../../assets/images/technologies/git.png";
import html5 from "../../assets/images/technologies/html5.png";
import js from "../../assets/images/technologies/js.png";
import mongodb from "../../assets/images/technologies/mongodb.png";
import mysql from "../../assets/images/technologies/mysql.png";
import nodejs from "../../assets/images/technologies/nodejs.png";
import ps from "../../assets/images/technologies/ps.png";
import reactNative from "../../assets/images/technologies/react-native.png";
import react from "../../assets/images/technologies/react.png";
import redux from "../../assets/images/technologies/redux.png";
import sass from "../../assets/images/technologies/sass.png";
import springBoot from "../../assets/images/technologies/spring-boot.png";
import symfony from "../../assets/images/technologies/symfony.png";
import vsc from "../../assets/images/technologies/vsc.png";
import webstorm from "../../assets/images/technologies/webstorm.png";
import gatsby from "../../assets/images/technologies/gatsby.png";
import firebase from "../../assets/images/technologies/firebase.png";
import npm from "../../assets/images/technologies/npm.png";
import gql from "../../assets/images/technologies/graphql.png";

const Technologies = (props) => {
   const context = useContext(LanguageContext);
   return (
      <div className="section-drop-shadow">
         <section className="section-technologies" name="section-technologies">
            <div className="section-technologies__content">
               <h2 className="section-header">
                  <span className="section-header__title">{context.dictionary.technologies.header}</span>
                  <span className="section-header__post">{context.dictionary.technologies.post}</span>
               </h2>
               <div className="technologies">
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">FRONT-END:</h3>
                     <div className="technologies__items">
                        <Technology src={react} name="React" />
                        <Technology src={gatsby} name="Gatsby (React based framework)" />
                        <Technology src={js} name="JavaScript ES5, ES6+" />
                        <Technology src={redux} name="Redux" />
                        <Technology src={html5} name="HTML5" />
                        <Technology src={css3} name="CSS3" />
                        <Technology src={sass} name="Sass" />
                     </div>
                  </div>
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">BACK-END:</h3>
                     <div className="technologies__items">
                        <Technology src={nodejs} name="Node.js / Express.js" />
                        <Technology src={mongodb} name="MongoDB" />
                        <Technology src={mysql} name="MySQL" />
                        <Technology src={springBoot} name="Spring Boot / Java" />
                        <Technology src={symfony} name="Symfony 4 / php" />
                     </div>
                  </div>
                  <div className="technologies__group">
                     <h3 className="technologies__group-title">
                        {context.dictionary.technologies.other + ':'}
                     </h3>
                     <div className="technologies__items">
                        <Technology src={reactNative} name="React Native" />
                        <Technology src={gql} name="GraphQL" />
                        <Technology
                           src={npm}
                           name="Node package manager"
                           style={{ padding: '1.2rem' }}
                        />
                        <Technology src={git} name="Git" />
                        <Technology src={firebase} name="Firebase" />
                        <Technology src={vsc} name="Visual Studio Code" />
                        <Technology src={webstorm} name="Webstorm" />
                        <Technology src={ps} name="Photoshop" />
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Technologies;
