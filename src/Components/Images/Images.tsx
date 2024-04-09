import React, { useEffect, useState } from "react";
import ApiCall from "../../API/ApiCall";
import { ImagesDataStructure } from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import "../Images/Images.css";
import { ImagesContainer } from "../ImagesContainer/ImagesContainer";

export const Images = () => {
  const params = useParams();
  const [images, setImages] = useState<ImagesDataStructure[]>([]);

  useEffect(() => {
    ApiCall.get("search/photos?query=roma", {}).then((res) =>
      setImages(res.data.results)
    );
  }, [params]);

  return (
    <div>
      <ImagesContainer images={images} />
    </div>
  );
};
