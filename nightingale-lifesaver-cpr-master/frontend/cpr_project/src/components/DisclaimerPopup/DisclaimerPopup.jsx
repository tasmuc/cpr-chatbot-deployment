import React, { useState } from 'react';
import './DisclaimerPopup.css';

const DisclaimerPopup = ({ onAccept }) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="popup-overlay">
      <div className="popup-container">
 <h2 className="popup-title">
          ⚠️ Important Disclaimer & Privacy Notice
        </h2>
        <p className="popup-text">
          By proceeding, you acknowledge and agree to the following terms regarding the use of this chatbot:
        </p>
        <ul className="popup-text" style={{ textAlign: 'left', fontSize: '0.85rem' }}>
          <li><strong>Educational Purpose Only:</strong> This tool is strictly for educational purposes. It is not a substitute for professional medical advice, diagnosis, or certified CPR training.</li>
          <li><strong>Development Phase:</strong> This chatbot is currently <strong>under development</strong>. Responses may be incomplete. Do not rely on this bot during a real-life emergency.</li>
          <li><strong>Not a Real Test:</strong> The simulations provided here do not constitute a formal medical evaluation.</li>
          <li><strong>Privacy & Data:</strong> Your conversation will be logged anonymously in our database for research and development purposes.</li>
        </ul>
        <p className="popup-text">
         <strong>Do you understand and agree to use this chatbot for educational purposes only?</strong>
        </p>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="consent"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="consent">I have read and understood the above</label>
        </div>
        <button
          disabled={!checked}
          className="confirm-button"
          onClick={onAccept}
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;