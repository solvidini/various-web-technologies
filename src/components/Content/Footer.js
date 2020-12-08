import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import { LanguageContext } from '../../context';

const Footer = (props) => {
   const currentDate = new Date().getFullYear();
   const context = useContext(LanguageContext);
   return (
      <footer className="footer">
         <div className="footer__square footer__square--top" />
         <div className="footer__top">
            <div className="footer__top-logo">&nbsp;</div>
            <div className="footer__top-item">
               <h4>
                  {context.dictionary.footer.info}
               </h4>
            </div>
         </div>
         <div className="footer__social">
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="footer__social-link"
               href="https://www.linkedin.com/in/samuel-k%C4%99dziora-b45b86159/"
            >
               <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
               target="_blank"
               rel="noopener noreferrer"
               className="footer__social-link"
               href="https://github.com/ssazero"
            >
               <FontAwesomeIcon icon={faGithub} />
            </a>
         </div>

         <div className="footer__copyright">
            <div className="footer__square footer__square--copyright" />
            <span>
               Samuel Kędziora &copy; <b>{currentDate}</b>
            </span>
            <span>{context.dictionary.footer.allRights} </span>
         </div>
      </footer>
   );
};

export default Footer;
