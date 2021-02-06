import styled from 'styled-components/native';

const Heading = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0px;
  color: ${(props) => props.theme.main};
`;

export default Heading;
