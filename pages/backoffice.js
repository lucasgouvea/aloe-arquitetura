import React, { useState, useRef } from "react";
import { StyledContainer, StyledDrawer, Uploader } from "../components";
import { useTheme } from "@material-ui/core/styles";
import AloeBackofficeService from "../services/aloe-backoffice-service";

export default function Backoffice() {
  const theme = useTheme();
  const uploadDesktopInputRef = useRef();
  const uploadMobileInputRef = useRef();

  return (
    <React.Fragment>
      <StyledContainer theme={theme}>
        <div
          style={{
            display: "flex",
            width: "85%",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <Uploader
            ref={uploadDesktopInputRef}
            text="Escolha uma foto no formato PNG - Desktop"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(uploadDesktopInputRef.current);
              const file = uploadDesktopInputRef.current.files[0];
              AloeBackofficeService.uploadBackgroundDesktop(file);
            }}
          />
          <Uploader
            ref={uploadMobileInputRef}
            text="Escolha uma foto no formato PNG - Mobile"
            onSubmit={(e) => {
              e.preventDefault();
              const file = uploadMobileInputRef.current.files[0];
              AloeBackofficeService.uploadBackgroundMobile(file);
            }}
          />
        </div>

        <div style={{ ...theme.footer }} />
      </StyledContainer>
    </React.Fragment>
  );
}
