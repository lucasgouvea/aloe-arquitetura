import Container from "@material-ui/core/Container";
import styled from "styled-components";

const styles = (theme) => ({
  container: {
    backgroundColor: "red",
  },
});

const StyledContainer = styled(Container)`
  ${({ theme }) => {
    const classes = styles(theme);
    return {
      ...classes.container,
    };
  }}
`;

export default StyledContainer;
