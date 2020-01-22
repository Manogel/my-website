import styled from "styled-components";

export const Container = styled.div`
  max-width: 518px;
  height: 100%;
  background-color: #fafafa;
  border-radius: 12px 0 0 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    color: #707070;
    padding: 0 50px;
    text-align: center;
    line-height: 20px;
    display: block;
    font-size: 18px;
  }

  @media (max-width: 1300px) {
    width: 100%;
    max-width: 100%;
    height: 580px;
    border-radius: 12px 12px 0 0;
  }

  img {
    @media (max-width: 850px) {
      width: 300px;
      height: 300px;
    }
  }
`;

export const Actions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  a {
    cursor: pointer;

    img {
      width: 70px;
      height: 70px;
    }
  }
`;
