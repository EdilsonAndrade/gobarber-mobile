import styled from 'styled-components/native';
export const Container = styled.View`
  background:#fff;
  opacity:${props=>props.past ? 0.8 : 1};
  margin:10px;
  border-radius:4px;
`;
export const DataView = styled.View`
  padding: 15px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  
`
export const Avatar = styled.Image`
  width:50px;
  height:50px;
  border-radius:25px;
`;

export const Info = styled.View`
  flex:1;
  margin-left:5px;
  
`;

export const Name = styled.Text`
font-weight:bold;
font-size:16px;
color:#716e6e;

`;

export const Time = styled.Text`
color:#999;
`;
