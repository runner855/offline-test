import React, { useEffect, useState } from "react";
import "../Images/Images.css";
import ApiCall from "../../API/ApiCall";
import { ImagesDataStructure } from "../../Types/appTypes";
import { useParams } from "react-router-dom";

export const Images = () => {
  const params = useParams();
  const [imagesData, setImagesData] = useState<
    ImagesDataStructure[] | undefined
  >();

  useEffect(() => {
    ApiCall.get(`/photos/?client_id=${process.env.REACT_APP_API_KEY}`, {}).then(
      (res) => setImagesData(res.data)
    );
  }, [params]);

  return (
    <div>
      {imagesData &&
        imagesData.map((item, index) => {
          return (
            <div key={index}>
              <img src={item.urls.regular} alt="images" />
            </div>
          );
        })}
    </div>
  );
};
