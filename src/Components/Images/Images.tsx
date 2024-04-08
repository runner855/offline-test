import React, { useEffect, useState } from "react";
import ApiCall from "../../API/ApiCall";
import { ImagesDataStructure } from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import { Card } from "antd";
import "../Images/Images.css";
import Meta from "antd/es/card/Meta";

export const Images = () => {
  const params = useParams();
  const [imagesData, setImagesData] = useState<
    ImagesDataStructure[] | undefined
  >();

  useEffect(() => {
    ApiCall.get("search/photos?query=office", {}).then((res) =>
      setImagesData(res.data)
    );
  }, [params]);

  return (
    <div>
      {/* {imagesData &&
        imagesData.map((item, index) => {
          return (
            <div key={index} className="images_container">
              <div className="single_image_container">
                <Card
                  hoverable
                  style={{ width: 240, margin: 4 }}
                  cover={
                    <img
                      alt={item.alt_description}
                      src={item.urls.thumb}
                      className="images"
                    />
                  }
                >
                  <Meta description={item.alt_description} />
                </Card>
              </div>
            </div>
          );
        })} */}
      {imagesData?.map((item, index) => {
        return (
          <div>
            <img src={item.urls.thumb} alt={item.alt_description} />
          </div>
        );
      })}
    </div>
  );
};
