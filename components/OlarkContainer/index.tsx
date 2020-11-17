import { useSelector } from "react-redux"
import { useSetIsShowForm } from "../../redux/hooks"

export function OlarkContainer() {
  const isShowForm = useSelector(state => state.is_open_form.isOpen)
  const setIsShowForm = useSetIsShowForm()
  const onClickHandler = () => {
    setIsShowForm(false)
  }
  return (

    <div id="olark-container" className="olark-size-lg" aria-hidden="false">
      <div
        onClick={onClickHandler}
        className={isShowForm ? "olark-top-bar active" : "olark-top-bar"}>
        <h2 className="olark-top-bar-text">Contact Us Here</h2>
        <div className="olark-top-bar-button" role="button">
          <svg viewBox="0 0 15.1 8.9" fill="#ffffff"
               aria-hidden="true">
            <title>Arrow Down</title>
            <desc>a small down arrow to minimize chat box</desc>
            <polygon className="olark-top-bar-arrow" points="0.2,1.4 7.6,8.9 15.1,1.4 13.7,0 7.6,6 1.6,0" />
          </svg>
        </div>
      </div>
      <div className="olark-conversation-container olark-no-message-form" aria-label="chat">
        <div className="olark-message-block-container olark-single-message">
          <div className="olark-generated-message">We're not around, but we'd love to chat another time.</div>
        </div>
      </div>
      <div className={
        isShowForm ? "olark-overlay-module-container active olark-no-message-form"
          : "olark-overlay-module-container olark-no-message-form"}

      >
        <div className="olark-offline-survey">
          <div className="olark-survey-form" id="olark-custom-survey-form" role="form">
            <div className="olark-survey-form-welcome olark-survey-form-item">
              <div className="olark-survey-form-welcome-msg">We're not around, but we'd love to chat another time.
              </div>
            </div>
            <div className="olark-survey-form-inner">
              <div className="olark-survey-form-page">
                <div className="olark-survey-form-item olark-survey-form-item-name olark-survey-form-is-required">
                  <span className="olark-survey-form-label">Name</span><span className="olark-survey-form-req-icon"
                                                                             title="Required field"><svg
                  viewBox="0 0 20 20"
                  // enable-background="new 0 0 20 20"
                  x="0"
                  y="0" fill="currentcolor" aria-hidden="true">
                                    <title>Required Asterisk</title>
                                    <desc>signifies that this field can not be left blank</desc>
                                    <path
                                      d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10s10-4.5,10-10C20,4.5,15.5,0,10,0z M13.8,13.6L12,15l-2-3L8,15l-1.8-1.4l2-2.8 L5,9.6l0.8-2.2L9,8.6L8.8,5h2.4L11,8.6l3.2-1.3L15,9.6l-3.2,1.1L13.8,13.6z">
                                    </path>
                                </svg></span><input type="text"
                                                    className="olark-survey-form-input olark-survey-form-text"
                                                    data-lpignore="true" aria-label="Name" /></div>
                <div className="olark-survey-form-item olark-survey-form-item-email olark-survey-form-is-required">
                  <span className="olark-survey-form-label">Email</span><span className="olark-survey-form-req-icon"
                                                                              title="Required field"><svg
                  viewBox="0 0 20 20"
                  // enable-background="new 0 0 20 20"
                  x="0"
                  y="0" fill="currentcolor" aria-hidden="true">
                                    <title>Required Asterisk</title>
                                    <desc>signifies that this field can not be left blank</desc>
                                    <path
                                      d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10s10-4.5,10-10C20,4.5,15.5,0,10,0z M13.8,13.6L12,15l-2-3L8,15l-1.8-1.4l2-2.8 L5,9.6l0.8-2.2L9,8.6L8.8,5h2.4L11,8.6l3.2-1.3L15,9.6l-3.2,1.1L13.8,13.6z">
                                    </path>
                                </svg></span><input type="text"
                                                    className="olark-survey-form-input olark-survey-form-text"
                                                    data-lpignore="true" aria-label="Email" /></div>
                <div
                  className="olark-survey-form-item olark-survey-form-item-textarea olark-survey-form-is-required">
                  <span className="olark-survey-form-label">Type a message...</span><span
                  className="olark-survey-form-req-icon" title="Required field"><svg
                  viewBox="0 0 20 20"
                  // enable-background="new 0 0 20 20"
                  x="0" y="0" fill="currentcolor"
                  aria-hidden="true">
                  <title>Required Asterisk</title>
                  <desc>signifies that this field can not be left blank</desc>
                  <path
                    d="M10,0C4.5,0,0,4.5,0,10c0,5.5,4.5,10,10,10s10-4.5,10-10C20,4.5,15.5,0,10,0z M13.8,13.6L12,15l-2-3L8,15l-1.8-1.4l2-2.8 L5,9.6l0.8-2.2L9,8.6L8.8,5h2.4L11,8.6l3.2-1.3L15,9.6l-3.2,1.1L13.8,13.6z">
                  </path>
              </svg></span><textarea className="olark-survey-form-input olark-survey-form-textarea"
                                     aria-label="Type a message..." data-lpignore="true"
                                     placeholder=""></textarea></div>
                <button className="olark-button olark-survey-form-submit"
                        aria-label="Contact Us Here">Contact Us Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="olark-branding-link"><a role="button" aria-hidden="false"><span*/}
      {/*  className="olark-branding-link-word ">  s</span><span className="olark-branding-link-word "> a</span><span*/}
      {/*  className="olark-branding-link-word accented">d  </span></a>*/}
      {/*</div>*/}
    </div>
  )
}