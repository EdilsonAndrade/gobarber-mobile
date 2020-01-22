import styled from 'styled-components/native';
import {FlatList} from 'react-native';

export const Container = styled.SafeAreaView`
  flex:1;
  align-items:center;
  margin-top:30px;
`;

export const Title = styled.Text`
font-weight:bold;
color: #fff;
font-size: 25px;
`

export const Appointments = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false
})`
    margin-top:30px;
    width:85%;
`;
 