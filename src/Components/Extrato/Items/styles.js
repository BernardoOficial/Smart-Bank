import styled from "styled-components";

const Items = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
      font-weight: bold;
  }

  > span {
    margin: 2px 0;
  }
`;

export { Items, Item };
