import React from "react";
import { Button } from "@material-ui/core";

const Uploader = React.forwardRef(({ text, onSubmit }, ref) => {
  return (
    <form style={{ display: "flex", height: 60 }} onSubmit={onSubmit}>
      <div style={{ width: 360 }}>
        {text}
        <input type="file" ref={ref} />
      </div>
      <Button type="submit">Enviar</Button>
    </form>
  );
});

export default Uploader;
