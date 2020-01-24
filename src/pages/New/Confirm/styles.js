import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  
  flex:1;  
  justify-content:center;
  align-items:center;
  padding:40px;
`;

export const Avatar = styled.Image`
  height:100px;
  width: 100px;
  border-radius:50px;
`;
export const ProfileName = styled.Text`
  font-weight:bold;
  font-size: 24px;
  color:#fff;
`;
export const Time = styled.Text`
  font-size:18px;
  color:rgba(255,255,255,0.6);
  margin:5px;
`;
export const ConfirmButton = styled(RectButton)`
  width:100%;
  padding: 10px;
  border-radius:4px;
  background:#0070f1;
  
`;

export const ButtonText= styled.Text`
align-self:center;
color:#fff;
`
