import React, { useContext } from 'react';

import { LanguageContext } from '../../context';
import Effect from 'react-reveal/Fade';
import Technology from '../Technology';

import css3 from '../../assets/images/technologies/css3.png';
import html5 from '../../assets/images/technologies/html5.png';
import js from '../../assets/images/technologies/js.png';
import nodejs from '../../assets/images/technologies/nodejs.png';
import reactNative from '../../assets/images/technologies/react-native.png';
import react from '../../assets/images/technologies/react.png';
import redux from '../../assets/images/technologies/redux.png';
import sass from '../../assets/images/technologies/sass.png';
import springBoot from '../../assets/images/technologies/spring-boot.png';
import symfony from '../../assets/images/technologies/symfony.png';
import gatsby from '../../assets/images/technologies/gatsby.png';
import gql from '../../assets/images/technologies/graphql.png';
import php from '../../assets/images/technologies/php.png';
import vue from '../../assets/images/technologies/vue.png';
import angular from '../../assets/images/technologies/angular.png';

const Technologies = (props) => {
   const context = useContext(LanguageContext);
   return (
      <div className="section-drop-shadow">
         <section className="section-technologies" name="section-technologies">
            <div className="section-technologies__content">
               <h2 className="section-header">
                  <span className="section-header__title">
                     {context.dictionary.technologies.header}
                  </span>
                  <span className="section-header__post">
                     {context.dictionary.technologies.post}
                  </span>
               </h2>
               <div className="technologies">
                  <div className="technologies__items">
                     <Technology
                        src={js}
                        name="JavaScript"
                        description={context.dictionary.technologies.js}
                     />
                     <Technology
                        src={html5}
                        name="HTML5"
                        description={context.dictionary.technologies.html5}
                     />
                     <Technology
                        src={css3}
                        name="CSS3"
                        description={context.dictionary.technologies.css3}
                     />
                     <Technology
                        src={react}
                        name="React"
                        description={context.dictionary.technologies.react}
                     />
                     <Technology
                        src={vue}
                        name="Vue"
                        description={context.dictionary.technologies.vue}
                     />
                     <Technology
                        src={angular}
                        name="Angular"
                        description={context.dictionary.technologies.angular}
                     />
                     <Technology
                        src={sass}
                        name="Sass"
                        description={context.dictionary.technologies.sass}
                     />
                     <Technology
                        src={gatsby}
                        name="Gatsby (React based framework)"
                        description={context.dictionary.technologies.gatsby}
                     />
                     <Technology
                        src={redux}
                        name="Redux"
                        description={context.dictionary.technologies.redux}
                     />
                     <Technology
                        src={nodejs}
                        name="Node.js / Express.js"
                        description={context.dictionary.technologies.nodejs}
                     />
                     <Technology
                        src={php}
                        name="php"
                        description={context.dictionary.technologies.php}
                     />
                     <Technology
                        src={springBoot}
                        name="Spring Boot / Java"
                        description={context.dictionary.technologies.springBoot}
                     />
                     <Technology
                        src={symfony}
                        name="Symfony 4 / php"
                        description={context.dictionary.technologies.symfony}
                     />
                     <Technology
                        src={reactNative}
                        name="React Native"
                        description={context.dictionary.technologies.reactNative}
                     />
                     <Technology
                        src={gql}
                        name="GraphQL"
                        description={context.dictionary.technologies.gql}
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Technologies;
