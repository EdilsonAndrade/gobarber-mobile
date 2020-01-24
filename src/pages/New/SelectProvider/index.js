import React, {useEffect,useState} from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, ProviderList, Provider , Avatar, Name} from './styles';
import Background from '~/components/Background';
import api from '~/services/api';

export default function SelectProvider({navigation}) {
  const [providers, setProviders] = useState([]);

  useEffect(()=>{
    async function loadProviders(){
      const response = await api.get('providers');

      setProviders(response.data);
    }
    loadProviders();
  }, [])
  return (
    <Background >
      <Container>
           <ProviderList
           data={providers}
           keyExtractor={provider=>String(provider.id)}
           renderItem={({item: provider})=>(
             <Provider onPress={()=>navigation.navigate('SelectDatetime', {provider})}>
               <Avatar source={{ uri: provider.avatar ? provider.avatar.url.replace("localhost", "192.168.15.101") : "https://avatarmaker.com/svgavatars/temp-avatars/svgA8203111376335015.png" }} />
               <Name>{provider.name}</Name> 
             </Provider>
           )}
           /> 
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions =({navigation})=>({
  title: "Selecione o prestador",
  headerLeft: ()=>(
    <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')} ><Icon name="chevron-left"  size={30} color="#fff"/></TouchableOpacity>
  )
})
