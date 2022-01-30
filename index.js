import React, { useState } from "react";

const PreImage = (props) => {
  return (
    <div style={props.imageContainerStyle}>
      {props.isLoaded ? (
        <img
          style={props.imageStyle}
          src={props.sourceImg}
          alt={props.alt}
          onError={() => {
            props.onError();
          }}
          {...props}
        />
      ) : (
        <img
          style={props.imageStyle}
          src={props.defaultSourceImg}
          alt={props.alt}
          {...props}
        />
      )}
    </div>
  );
};

const DefaultSourceImage = (Component) => {
  const WithStateComponent = (props) => {
    const [isLoaded, setIsLoaded] = useState(true);
    return (
      <Component
        isLoaded={isLoaded}
        onError={() => setIsLoaded(false)}
        {...props}
      />
    );
  };
  return WithStateComponent;
};

export default DefaultSourceImage(PreImage);
