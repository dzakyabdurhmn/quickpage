import React from "react";

interface Props {
  text: string;
}

const button = (props: Props) => {
  const { text } = props;
  return (
    <>
      <button className="text-xl">{text}</button>
    </>
  );
};

export default button;
