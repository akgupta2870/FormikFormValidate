import { AboutUs } from "./AboutUs";
import "./styles.css";
import { Button, Box, Layer } from "grommet";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled(Button)`
  width: 100px;
  color: black;
  background-color: violet;
`;

export default function App() {
  const [show, setShow] = useState();

  return (
    <div className="App">
      <h1>Formik Form</h1>
      <Box>
        <Button label="show" onClick={() => setShow(true)} />
        {show && (
          <Layer
            onEsc={() => setShow(false)}
            onClickOutside={() => setShow(false)}
          >
            <AboutUs />
            <StyledButton
              size="small"
              label="close"
              onClick={() => setShow(false)}
            />
          </Layer>
        )}
      </Box>
      {/* <Button primary label="Button" onClick={buttonClick} /> */}
    </div>
  );
}
