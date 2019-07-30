import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children,isGoogleSignIn, ...otherprops }) => {
  return (
    <React.Fragment>
      <div>
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
          {children}
        </button>
      </div>
    </React.Fragment>
  );
};

export default CustomButton;
