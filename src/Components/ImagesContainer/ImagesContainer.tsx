import React from "react";
import { ImagesDataStructure } from "../../Types/appTypes";
import { Card } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import "../ImagesContainer/ImagesContainer.css";

type ImagesContainerProps = {
  images: ImagesDataStructure[];
};

const { Meta } = Card;

export const ImagesContainer = ({ images }: ImagesContainerProps) => {
  return (
    <div className="images_container">
      {images &&
        images.map &&
        images.map((item, index) => {
          return (
            <div className="single_image" key={index}>
              <Card
                style={{ width: 300 }}
                cover={<img alt={item.alt_description} src={item.urls.full} />}
                actions={[
                  <div>
                    <AiFillLike />

                    {item.likes}
                  </div>,
                  <FaRegHeart />,
                  <LiaCommentSolid />,
                ]}
              >
                <Meta description={item.alt_description} />
              </Card>
            </div>
          );
        })}
    </div>
  );
};
