import React, { useState } from "react";
import { ImagesDataStructure } from "../../Types/appTypes";
import { Card } from "antd";
import { FaRegHeart } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import "../ImagesContainer/ImagesContainer.css";
import SearchBar from "../SearchBar/SearchBar";

type ImagesContainerProps = {
  images: ImagesDataStructure[] | undefined;
};

const { Meta } = Card;

export const ImagesContainer = ({ images }: ImagesContainerProps) => {
  return (
    <div className="main_container">
      <div className="search_bar">
        <SearchBar />
      </div>
      <div className="images_container">
        {images &&
          images.map &&
          images.map((item, index) => {
            return (
              <div className="single_image" key={index}>
                <Card
                  style={{ height: 320, width: 300 }}
                  cover={
                    <img alt={item.alt_description} src={item.urls.full} />
                  }
                  actions={[
                    <div>
                      <AiFillLike />

                      {item.likes}
                    </div>,
                    <FaRegHeart />,
                    <LiaCommentSolid />,
                  ]}
                >
                  <Meta description={item.alt_description.toUpperCase()} />
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};
