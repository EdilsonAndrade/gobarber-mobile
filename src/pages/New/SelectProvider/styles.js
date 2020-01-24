import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.View`
  flex:1;
  margin-top:45px;
`;

export const ProviderList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  numColumns:2
})`
 
  padding: 0 20px;
  margin-top:40px;
`;

export const Provider = styled(RectButton)`
  background:#fff;
  margin:10px;
  padding:20px;
  justify-content:center;
  align-items:center;
  flex:1;
  border-radius:4px;
  
`;

export const Avatar = styled.Image`
  height:50px;
  width:50px;
  border-radius:25px;
`;

export const Name = styled.Text`
  font-weight:bold;
  font-size:14px;
  margin-top:5px;
  text-align:center;
`;
