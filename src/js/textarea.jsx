import React, { useState } from "react";
// css
import "./test.css";
// css modules
import example from "./test.module.css";
// json
import conf from "./test.json";

const TextArea = () => {
  const [text, setText] = useState(conf.text);
  const [stupid, setStupid] = useState(0);

  const updateState = (value) => {
    var regex = new RegExp("(stupid)", "gi");
    var match = text.match(regex);
    setText(value);
    setStupid(match?.length);
  };

  return (
    <div class={example.bg}>
      <p>How many times have you written "stupid"?</p>
      <textarea
        class="textarea"
        onChange={(e) => {
          updateState(e.target.value);
        }}
      ></textarea>
      times: {stupid}
    </div>
  );
};
export default TextArea;
