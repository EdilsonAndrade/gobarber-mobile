import React, {useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Background from '~/components/Background';
import Button from '~/components/Button';
import { Container, Avatar, ProfileName, Time } from './styles';
import api from '~/services/api';

export default function Confirm({ navigation }) {
  const provider = navigation.getParam('provider');
  const [loading,setLoading] = useState(false);

  const date = formatRelative(navigation.getParam('date'), new Date(),  { locale: pt });
  async function handleConfirm(){
    setLoading(true);
    
    await api.post('appointments', {
      provider_id: provider.id,
      date: navigation.getParam('date')
    })

    setLoading(false);
    navigation.navigate('Dashboard')
  }
  return (
    <Background>
      <Container>
        <Avatar source={{ uri: (provider.avatar) ? provider.avatar.url.replace("localhost", "192.168.15.101") : "https://avatarmaker.com/svgavatars/temp-avatars/svgA8203111376335015.png" }} />
        <ProfileName >Edilson</ProfileName>
        <Time>{date}</Time>
        <Button loading={loading} onPress={handleConfirm} >Confirmar Agendamento</Button>
      </Container>
    </Background>
  );
}
Confirm.navigationOptions = ({navigation}) =>({
  title: "Confirmar agendamento",
  headerLeft: ()=>(
    <TouchableOpacity onPress={()=>navigation.goBack()}><Icon name="chevron-left" size={30} color="#fff" /></TouchableOpacity>
  )
})