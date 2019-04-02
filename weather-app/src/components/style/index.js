import styled, { css } from 'styled-components';

export const MainWrapper = styled.div`
  font-family: 'Montserrat';
  color: black;
  margin: auto;
  max-width: 20rem;
  padding: 0 10px;
`;

export const Img = styled.img`
  width: ${props => (props.extraInfo ? '30px' : '60px')};
  height: ${props => (props.extraInfo ? '30px' : '60px')};
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  font-weight: 500;
  background-color: aliceblue;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding-top: 20px;
  margin-top: 20px;
  border-radius: 10px;
  cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  ${props =>
    props.extraInfo &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    `};
`;

export const Temp = styled.p`
  font-size: ${props => (props.extraInfo ? '20px' : '40px')};
  font-weight: 400;
  margin: 0;
  margin-left: 10px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: ${props => (props.column ? 'column' : 'wrap')};
  padding-bottom: ${props => (props.column ? '20px' : '0px')};
  ${props =>
    props.extraInfo &&
    css`
      grid-column: 2/-1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
    `}
`;

export const CelsiusIcon = styled.img`
  margin-top: ${props => (props.extraInfo ? '8px' : '0px')};
  margin-left: ${props => (props.tiny || props.extraInfo ? '0px' : '5px')};
  width: ${props => (props.tiny || props.extraInfo ? '14px' : '30px')};
  height: ${props => (props.tiny || props.extraInfo ? '14px' : '58px')};
`;

export const MoreTemp = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: ${props => (props.extraInfo ? '1em' : '2em')};
  margin-top: 0;
  margin-bottom: 20px;
  margin-top: ${props => (props.list ? '20px' : '0px')};
  text-align: center;
  ${props =>
    props.extraInfo &&
    css`
      grid-column: 1/-1;
    `}
`;

export const High = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  margin-left: 10px;
`;

export const Low = styled(High)`
  margin-right: 10px;
  margin-left: 0px;
`;

export const Indicator = styled.div`
  font-size: 30px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

export const SmallCardInfo = styled.div``;

export const Message = styled.p`
  font-family: 'Montserrat';
  font-size: 20px;
  text-align: center;
  margin: 0;
`;

export const ErrorMessage = styled.div`
  text-align: center;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const Input = styled.input`
  font-family: 'Montserrat';
  font-weight: 400;
  border-radius: 23px;
  border: none;
  background-color: #dddddd;
  margin-right: 10px;
  height: 30px;
  padding: 0;
  padding-left: 10px;
`;

export const Form = styled.form`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
`;

export const WrapperList = styled.div`
  padding-bottom: 20px;
`;
