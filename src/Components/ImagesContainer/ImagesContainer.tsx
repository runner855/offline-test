import React from "react";
import { ImagesDataStructure } from "../../Types/appTypes";
import "../ImagesContainer/ImagesContainer.css";

type ImagesContainerProps = {
  images: ImagesDataStructure[];
};

export const ImagesContainer = ({ images }: ImagesContainerProps) => {
  return (
    <div className="images_container">
      {images &&
        images.map &&
        images.map((item, index) => {
          return (
            <div className="single_image" key={index}>
              <img src={item.urls.thumb} alt={item.alt_description} />
            </div>
          );
        })}
    </div>
  );
};
