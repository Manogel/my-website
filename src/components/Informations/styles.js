import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  margin-left: 90px;
  display: flex;
  flex-direction: column;
  padding: 40px 40px 40px 0;
  justify-content: center;

  div {
    border-left: 10px solid #54b689;
    color: #2a2a2a;
    font-size: 32px;
    font-weight: bold;
    padding-left: 25px;
    margin-top: 28px;

    @media (max-width: 850px) {
      display: none;
    }
  }

  @media (max-width: 850px) {
    margin-left: 0;
    padding: 20px;
  }
`;

export const Name = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #2a2a2a;

  @media (max-width: 1300px) {
    font-size: 60px;
    text-align: center;
  }

  @media (max-width: 850px) {
    font-size: 40px;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  font-size: 24px;
  color: #4f4f4f;
  line-height: 32px;

  @media (max-width: 850px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const List = styled.ul`
  li {
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 35px;

    @media (max-width: 850px) {
      flex-direction: column;

      p {
        margin-top: 20px;
        text-align: center;
      }
    }

    img {
      width: 45px;
      height: 45px;
    }

    p {
      font-size: 20px;
      color: #4f4f4f;
      margin-left: 20px;
      line-height: 28px;

      a {
        cursor: pointer;
        color: #3575d3;
      }

      a:hover {
        color: #2f6abc;
      }
    }
  }
`;
