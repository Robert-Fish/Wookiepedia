import styled from 'styled-components/native';

export const ListItem = styled.View`
  padding: 22px;
  margin: 8px 0px;
  background: ${(props: {theme: {main: string}}) => props.theme.main};
  border-radius: 13px;
`;

export const ListItemText = styled.Text`
  color: white;
  font-size: 17px;
`;
