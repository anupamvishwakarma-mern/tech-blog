import styled from "styled-components";

export const CopyContainer = styled.div`
  width: fit-content;
  min-width: 600px;
  max-width: 1100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  gap: 20px;
  padding: 10px 20px;
  background-color: #333333;
  border-radius: 10px;

  pre,
  code {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    color: #ffffff;
    border-radius: 10px;
  }

  p {
    margin: 0;
  }

  button {
    background-color: #0082fc;
    border: none;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: #005db4;
  }
`;