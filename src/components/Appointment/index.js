import React, {useMemo} from 'react';
import {formatRelative, format, parseISO} from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Avatar, Info, Name, Time, DataView } from './styles';
import {TouchableOpacity} from 'react-native';
export default function Appointment({ data, onCancel }) {

  const date = useMemo(()=>
      formatRelative(parseISO(data.date),new Date, {locale:pt, addSuffix:true})
  ,[data.date]);
  return (
    <Container past={data.past}>
      <DataView>
      <Avatar source={{ uri: (data.provider && data.provider.avatar) ? data.provider.avatar.url.replace("localhost", "192.168.15.101") : "https://avatarmaker.com/svgavatars/temp-avatars/svgA8203111376335015.png" }}></Avatar>
      <Info >
        <Name>{data.provider.name}</Name>
        <Time>{date}</Time>
      </Info>
      {data.cancelable && 
      <TouchableOpacity onPress={onCancel}> 
        <Icon name="event-busy" size={22} color={'#f64c75'} /> 
      </TouchableOpacity>}
      </DataView>
    </Container>
  );
}
