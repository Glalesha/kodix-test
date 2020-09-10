import styled from "styled-components";

export const BaseColor = styled.div<{ color: string }>`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: ${(props) => {
    switch (props.color) {
      case "red":
        return "#DD1C10";
      case "green":
        return "#77CF61";
      case "grey":
        return "#C4C4C4";
      case "white":
        return "#FFFFFF";
      case "black":
        return "#000000";
    }
  }};
  border: ${(props) =>
    props.color === "white" ? `1px solid #8B8B8B` : "none"};
`;

export const ColorLabel = styled(BaseColor)`
  display: block;
  cursor: pointer;
`;
