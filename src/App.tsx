import React from "react";
import { Button } from "./package/widgets/Button";
import { TouchableOpacity } from "./package/widgets/TouchableOpacity";

export default function App() {
  return (
    <>
      <Button width="100%" _mediaQuery={{ s1440: { width: "auto" } }} disabled>
        Button
      </Button>

      <TouchableOpacity
        width="auto"
        as="span"
        padding={{ all: 10 }}
        backgroundColor="#f8f9fc"
        onClick={() => {}}
        _mediaQuery={{
          s1280: { backgroundColor: "#333", txtColor: "#fff" },
          s600: { padding: { all: 14 }, borderRadius: 12 },
          s428: { borderRadius: 1 },
        }}
      >
        TouchableOpacity
      </TouchableOpacity>
    </>
  );
}
