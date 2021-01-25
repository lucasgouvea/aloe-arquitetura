import Container from "@material-ui/core/Container";
import styled from "styled-components";

const styles = (theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: theme.container.marginTop,
  },
});

const StyledContainer = styled(Container)`
  &.MuiContainer-root {
    ${({ theme }) => {
      const classes = styles(theme);
      return {
        ...classes.container,
      };
    }}
  }
`;

export default StyledContainer;
