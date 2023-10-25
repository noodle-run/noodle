"use client";

import { Plate } from "@udecode/plate-common";
import { ELEMENT_H1 } from "@udecode/plate-heading";
import { plugins } from "./plugins";
import { Editor } from "./ui/editor";

export const PlateEditor = () => {
  const initialValue = [
    {
      id: "1",
      type: ELEMENT_H1,
      children: [{ text: "" }],
    },
  ];

  return (
    <Plate
      plugins={plugins}
      initialValue={initialValue}
      onChange={(e) => {
        console.log(e);
      }}
    >
      <Editor />
    </Plate>
  );
};
