import React, { useEffect, useState } from "react";
import ApiCall from "../../API/ApiCall";
import { ImagesDataStructure } from "../../Types/appTypes";
import { useParams } from "react-router-dom";
import { ImagesContainer } from "../ImagesContainer/ImagesContainer";
import { AudioOutlined } from "@ant-design/icons";

import "../Images/Images.css";

export const Images = () => {
  const params = useParams();
  const [images, setImages] = useState<ImagesDataStructure[]>([]);

  useEffect(() => {
    ApiCall.get("search/photos", {
      params: { query: "roma" },
    }).then((res) => {
      setImages(res.data.results);
    });
  }, [params]);

  return (
    <div>
      <ImagesContainer images={images} />
    </div>
  );
};
