import React from "react";
interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ ...props }: ImageProps) => {
  return <img {...props} alt="" />;
};