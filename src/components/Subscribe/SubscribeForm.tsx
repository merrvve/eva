import "./subscribe.css";

import classNames from "classnames";


import { Icon } from "../Icon/Icon";

interface SubscribeFormProps {
  text: string;
}

export const  SubscribeForm: React.FC<SubscribeFormProps> = ({text}) => {
  
 

  
  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-header">
          <div>
            <h2>Subscribe</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
      
      {/* Mailchimp Subscription Form */}
      <form
        action="https://gmail.us9.list-manage.com/subscribe/post"
        method="POST"
      >
        <input type="hidden" name="u" value="f12484491da91a865fe99df88" />
        <input type="hidden" name="id" value="873b424183" />
        
        <div className="inputWrapper">
          <input
            type="email"
            name="MERGE0" id="MERGE0"
            placeholder="Your email"
            required
            className="input"
          />
          <button type="submit" 
              className={classNames("iconButton")}
              
              aria-label="Subscribe">
            
			<Icon
                icon={"mailAdd"}
               
              />
          </button>
        </div>
      </form>
    </div>
  );
};
