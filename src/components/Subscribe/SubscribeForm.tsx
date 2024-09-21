import "./subscribe.css";

import classNames from "classnames";
import {
  type ChangeEvent,
  type FormEvent,
  type FormEventHandler,
  useState,
} from "react";

import { Icon } from "../Icon/Icon";


interface SniperResponse {
  url: string;
  image: string;
  provider_pretty: string;
}



export const SubscribeForm = () => {
  
  
  const [recipientEmail, setRecipientEmail] = useState<string>("");

  

  const [isHoveringOrFocusingSubscribe, setIsHoveringOrFocusingSubscribe] =
    useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [sniperData, setSniperData] = useState<SniperResponse | null>(null);

  

  

  

  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setRecipientEmail(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e: FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    

    const url =
      "https://buttondown.email/api/emails/embed-subscribe/notesfromeva";
    const data = new FormData(e.target as HTMLFormElement);

    fetch(url, { method: "POST", body: data })
      .then((response) => {
        if (response.ok) {
          setTimeout(() => {
            
            setHasSubmitted(true);
            setIsSubmitting(false);
          }, 1500);
        } else {
          console.error(response);
          
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    const sender = "hey@evadecker.com";
    const sniperUrl = `https://sniperl.ink/v1/render?recipient=${recipientEmail}&sender=${sender}`;

    fetch(sniperUrl)
      .then(async (response) => {
        if (response.ok) {
          await response.json().then((data) => {
            setSniperData(data);
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  
  return (
    <div className="subscribe">
      <div className="subscribe-content">
        <div className="subscribe-header">
          <div>
            <h2>Subscribe</h2>
            <p>Subscribe to our email list.</p>
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
              className={classNames("iconButton", {
                loading: isSubmitting,
              })}
              disabled={isSubmitting || hasSubmitted}
              aria-label="Subscribe">
            
			<Icon
                icon={isSubmitting ? "loader" : "mailAdd"}
                variant={isHoveringOrFocusingSubscribe ? "filled" : "line"}
              />
          </button>
        </div>
      </form>
    </div>
  );
};
