import styled, { css } from 'styled-components';

export const Weather = styled.div`
  font-family: 'Montserrat';
  flex-grow: 1;
  color: ${props => props.theme.textColor};
  margin: 0 auto;
  max-width: 25rem;
  padding: 0 10px;
`;

export const MainWrapper = styled.div`
  background-color: ${props => props.theme.mainBackgroundColor};
  width: 100%;
`;

export const Img = styled.img`
  width: ${props => (props.extraInfo ? '30px' : '60px')};
  height: ${props => (props.extraInfo ? '30px' : '60px')};
  margin-right: 10px;
`;

export const Wrapper = styled.div`
  font-weight: 500;
  margin-top: 20px;
  background-color: ${props => props.theme.cardsBackground};
  text-align: center;
  border-radius: 10px;
  cursor: ${props => (props.hover ? 'pointer' : 'auto')};
  &:hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  ${props =>
    props.extraInfo &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      &:hover {
        box-shadow: none;
      }
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
  @media screen and (max-width: 320px) {
    grid-column: 1/-1;
  }
  ${props =>
    props.extraInfo &&
    css`
      grid-column: 2/-1;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: baseline;
      @media screen and (max-width: 320px) {
        flex-direction: column;
        align-items: center;
        padding-top: 20px;
      }
    `};
  ${props =>
    props.column &&
    css`
      @media screen and (max-width: 320px) {
        grid-column: 2;
      }
    `};
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
  margin-top: 20px;
  display: inline-block;
  padding: 0 10px;
  font-weight: 500;
  color: ${props => (props.list ? 'white' : 'inherit')};
  font-size: ${props => (props.extraInfo ? '1em' : '2em')};
  margin-bottom: ${props => (props.list ? '0px' : '20px')};
  margin-top: 20px;
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
  margin-top: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  color: white;
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
  color: white;
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
  padding-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
`;

export const WrapperList = styled.div`
  padding-bottom: 20px;
`;

export const Switcher = styled.div`
  padding-top: 10px;
`;
