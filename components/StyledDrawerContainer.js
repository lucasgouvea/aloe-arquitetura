import styled from "styled-components";

const styles = (theme) => {
  return {
    display: "flex",
    height: "80%",
    flexDirection: "column",
  };
};

const StyledDrawerContainer = styled.div`
  ${({ theme }) => {
    const classes = styles(theme);
    return classes;
  }}
`;

export default StyledDrawerContainer;
