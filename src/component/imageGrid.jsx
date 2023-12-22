import React from "react";

export default function ImageGrid({ images, selectedImg }) {
  return (
    <>
 <div className="grid grid-cols-11 pt-96 pb-20 gap-5 w-[70%] mx-auto">
      {images.map((img, index) => (
        <img
          key={img.id}
          src={img.img}
          alt={`Image ${index + 1}`}
          className={selectedImg === img.img ? "highlighted-class" : ""}
        />
      ))}
    </div>
    </>
  );
}
