import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Image = styled.img`
  display: block;
  height: auto;
  width: 100%;
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0;

  // Add a smooth animation on loading
  @keyframes loaded {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // I use utilitary classes instead of props to avoid style regenerating
  &.loaded {
    animation-name: loaded;
  }
`;

export const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState("");
  const [imageRef, setImageRef] = useState();

  const onLoad = event => {
    event.target.classList.add("loaded");
  };

  const onError = event => {
    event.target.classList.add("has-error");
  };

  useEffect(
    () => {
      let observer;
      let didCancel = false;

      if (imageRef && imageSrc !== src) {
        if (IntersectionObserver) {
          observer = new IntersectionObserver(
            entries => {
              entries.forEach(entry => {
                if (
                  !didCancel &&
                  (entry.intersectionRatio > 0 || entry.isIntersecting)
                ) {
                  setImageSrc(src);
                  observer.unobserve(imageRef);
                }
              });
            },
            {
              threshold: 0.01,
              rootMargin: "75%"
            }
          );
          observer.observe(imageRef);
        } else {
          // Old browsers fallback
          setImageSrc(src);
        }
      }
      return () => {
        didCancel = true;
        // on component cleanup, we remove the listner
        if (observer && observer.unobserve) {
          observer.unobserve(imageRef);
        }
      };
    },
    [src, imageSrc, imageRef]
  );
  return (
    <Image
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
    />
  );
};
