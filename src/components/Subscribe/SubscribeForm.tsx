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
            <p>
              Subscribe to out email list to
            </p>
          </div>
        </div>
        {/* <Dialogue
          text={currentText}
          emote={currentEmote}
          onEmoteClick={handleEmoteClick}
        /> */}
      </div>
      <form onSubmit={handleSubmit}>
        {!hasSubmitted ? (
          <div
            className="inputWrapper"
            aria-disabled={isSubmitting || hasSubmitted}
          >
            <input
              aria-label="Your email"
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              
              onChange={handleChange}
              value={recipientEmail}
              disabled={isSubmitting || hasSubmitted}
            />
            <button
              type="submit"
              className={classNames("iconButton", {
                loading: isSubmitting,
              })}
              disabled={isSubmitting || hasSubmitted}
              aria-label="Subscribe"
              onFocus={() => {
                setIsHoveringOrFocusingSubscribe(true);
              }}
              onBlur={() => {
                setIsHoveringOrFocusingSubscribe(false);
              }}
              onMouseOver={() => {
                setIsHoveringOrFocusingSubscribe(true);
              }}
              onMouseLeave={() => {
                setIsHoveringOrFocusingSubscribe(false);
              }}
            >
              <Icon
                icon={isSubmitting ? "loader" : "mailAdd"}
                variant={isHoveringOrFocusingSubscribe ? "filled" : "line"}
              />
            </button>
          </div>
        ) : sniperData ? (
          <a
            href={sniperData.url}
            className="sniperLink"
            target="_blank"
            rel="noreferrer"
          >
            <div className="sniperLogo">
              <img src={sniperData.image} alt={sniperData.provider_pretty} />
            </div>
            Open {sniperData.provider_pretty}
            <Icon icon="arrowRight" />
          </a>
        ) : (
          <div className="checkInbox">Check your inbox</div>
        )}
      </form>
    </div>
  );
};
