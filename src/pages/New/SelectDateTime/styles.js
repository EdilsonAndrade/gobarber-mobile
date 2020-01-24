import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
export const Container = styled.SafeAreaView`
flex:1;
  
`;
export const HourList = styled(FlatList).attrs({
  numColumns: 2,
  showsVerticalScrollIndicator:false
})`
  padding: 20px;
  
`;

 export const HourButton = styled(RectButton)`
  background:#fff;
   flex:1;
   margin: 10px 10px;
   padding: 15px 15px;
   border-radius:4px;
   justify-content:center;
   align-items:center;
   opacity: ${props=>props.enabled ? 1 : 0.6};
 `;
export const  HourText = styled.Text`
  font-weight:bold;
  font-size:16px;
  padding: 0 10px;
`;