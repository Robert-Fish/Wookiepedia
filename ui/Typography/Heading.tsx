import styled from 'styled-components/native';

const Heading = styled.Text`
  font-size: ${(props) => {
    switch (props.size) {
      case 'h1':
        return '30px';
      case 'h2':
        return '20px';
      default:
        return '30px';
    }
  }};
  text-transform: ${(props) => (props.isCapitalized ? 'capitalize' : 'none')};
  font-weight: ${(props) => (props.isBold ? 'bold' : 'normal')};
  margin: 10px 0px;
  color: ${(props) => props.theme.main};
`;

export default Heading;
