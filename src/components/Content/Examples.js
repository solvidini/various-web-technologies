import React, { useContext } from 'react';

import Project from '../Project';
import fotobudka from '../../assets/images/projects/project-fotobudka.gif';
import mySite from '../../assets/images/projects/project-my-site.gif';
import yourTurn from '../../assets/images/projects/project-your-turn.jpg';
import projectW from '../../assets/images/projects/project-projektw.gif';
import pizzaBuilder from '../../assets/images/projects/project-pizza-builder.gif';
import bregulaInsurances from '../../assets/images/projects/project-bregula-insurances.gif';
import dailyTasks from '../../assets/images/projects/project-daily-tasks.jpg';
import canvas1 from '../../assets/images/projects/project-canvas-1.gif';
import swpiu from '../../assets/images/projects/project-swpiu.gif';
import button from '../../assets/images/projects/project-button.gif';
import calculator from '../../assets/images/projects/project-calculator.png';
import mot from '../../assets/images/projects/project-mot.gif';
import annsr from '../../assets/images/projects/project-annsr.gif';
import { LanguageContext } from '../../context';

const Examples = (props) => {
   const context = useContext(LanguageContext);
   return (
      <section name="section-examples" className="section-examples">
         <div className="section-examples__content">
            <h2 className="section-header section-header--white">
               <span className="section-header__title">{context.dictionary.examples.title}</span>
               <span className="section-header__post">{context.dictionary.examples.post}</span>
            </h2>
            <div className="projects">
               <Project
                  title={context.dictionary.examples.projectW.title}
                  description={context.dictionary.examples.projectW.description}
                  github="private"
                  live="http://projektw.pl"
                  source={projectW}
               />
               <Project
                  title="SWPIU"
                  description={context.dictionary.examples.swpiu.description}
                  github="https://github.com/ssazero/eng-proj-client"
                  live="http://swpiu.samuelk.pl/"
                  source={swpiu}
               />
               <Project
                  title="Pizza Builder"
                  description={context.dictionary.examples.pizzaBuilder.description}
                  github="https://github.com/ssazero/pizza-builder"
                  live="https://pizza-builder-6412e.web.app/"
                  source={pizzaBuilder}
               />
               <Project
                  title="Tapicernia Button"
                  description={context.dictionary.examples.button.description}
                  github="private"
                  live="http://www.pracownia-button.pl/"
                  source={button}
               />
               <Project
                  title="Multiple Object Tracking"
                  description={context.dictionary.examples.mot.description}
                  github="https://github.com/ssazero/multiple-object-tracking"
                  live="https://ssazero.github.io/multiple-object-tracking/"
                  source={mot}
               />
               <Project
                  title="Calculator"
                  description={context.dictionary.examples.calculator.description}
                  github="https://github.com/ssazero/calculator"
                  live="https://ssazero.github.io/calculator/"
                  source={calculator}
               />
               <Project
                  title="Bregula Ubezpieczenia"
                  description={context.dictionary.examples.bregula.description}
                  github="private"
                  live="http://bregulaubezpieczenia.pl/"
                  source={bregulaInsurances}
               />
               <Project
                  title="ANN Symbol Recognition"
                  description={context.dictionary.examples.annsr.description}
                  github="https://github.com/ssazero/ann-symbol-recognition"
                  live="https://ssazero.github.io/ann-symbol-recognition/"
                  source={annsr}
               />
               <Project
                  title="Daily Tasks"
                  description={context.dictionary.examples.dailyTasks.description}
                  github="https://github.com/ssazero/daily-tasks"
                  source={dailyTasks}
                  mobile
                  live="https://expo.io/@ssazero/daily-tasks"
               />
               <Project
                  title="My Site"
                  description={context.dictionary.examples.mySite.description}
                  github="https://github.com/ssazero/my-site"
                  live="/"
                  source={mySite}
               />
               <Project
                  title="Your Turn"
                  description={context.dictionary.examples.yourTurn.description}
                  github="https://github.com/ssazero/your-turn"
                  source={yourTurn}
               />
               <Project
                  title="Fotobudka Premium Box"
                  description={context.dictionary.examples.fotobudka.description}
                  github="private"
                  live="http://fotobudka-premiumbox.pl"
                  source={fotobudka}
               />
               <Project
                  title="Canvas Animation"
                  description={context.dictionary.examples.canvas1.description}
                  github="https://github.com/ssazero/canvas-project-one"
                  live="https://ssazero.github.io/canvas-project-one/"
                  source={canvas1}
               />
            </div>
         </div>
      </section>
   );
};

export default Examples;
