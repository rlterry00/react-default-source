# react-default-source

### Github [https://github.com/rlterry00/react-default-source](https://github.com/rlterry00/react-default-source)

# About

This a small library that extends the default `<img />` tag in react to have a default source image that is available as a fallback in image fails. By default there is no default source prop on an images and you have to create custom solutions based on `onError` and `onLoad` events. This a good tool to use if you are not using a UI library that could have a built in solution in ther `<img />` components. The only dependencies in this library are react.

# License

### MIT License

A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.

# Installation

`npm i react-default-source`

# Using The Library

Instead of using the standard `<img />` tag you will use `<DefaultSourceImage />` which extends the standard image component. All original `<img />` props are inherited in `<DefualtSourceImg />`

| Prop                | Description                                                      | Type   | Default                           |
| ------------------- | ---------------------------------------------------------------- | ------ | --------------------------------- |
| sourceImg           | Source image for image component.                                | string | Required                          |
| defaultSourceImg    | Default image if image does not load.                            | string | Required                          |
| imageContainerStyle | Styles for the container div wrapped around the image component. | object | Optional                          |
| imageStyle          | Styles for the image.                                            | object | Required for URL or remote images |
| alt                 | Alternative accessibility text description of image.             | string | Optional                          |

### Example

````js
import React, {useState, useEffect} from 'react';
import DefaultSourceImage from 'react-default-source';
import sourceImage from '../assets/avatar.png'
const Component = props => {
  const [userImage, setUserImage] = useState([]);
  useEffect(() => {
    //Fetching user image
    const getUserImage = async () => {
      return fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(json => {
          const data = json.picture.large;
          setUserImage(data);
        })
        .catch(error => {
          console.error(error);
        });
    };
    getUserImage();
  }, []);


  return (
    <div>
        <DefaultSourceImage
          imageStyle={{ width: 100, height: 100 }}
          defaultSourceImg={sourceImage}
          sourceImg={userImage}
          alt="avatar"
        />
    </div>
  );
};







````
