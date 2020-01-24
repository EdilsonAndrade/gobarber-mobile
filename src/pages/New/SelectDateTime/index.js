import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {useState, useEffect} from 'react';
import {parseISO} from 'date-fns';
import { Container, HourList, HourButton, HourText } from './styles';
import DateInput from '~/components/DateInput';
import Background from '~/components/Background';
import api from '~/services/api';

export default function SelectDateTime({navigation}) {
  const [date, setDate] = useState(new Date());
const [hours, setHour] = useState([]);
  const provider = navigation.getParam('provider');

  useEffect(()=>{
    async function loadAvailableTimes(){
      const response = await api.get(`providers/${provider.id}/availables`,
      {
       params:{
         date: date.getTime(),
       } 
      })
      setHour(response.data)
    }

    loadAvailableTimes();
  }, [date]);

  function handleConfirm(time){
    navigation.navigate('Confirm',
    {
      provider,
      date: parseISO(time)
    });
  }
  return (
    <Background>
      <Container>
        <DateInput onChange={setDate} date={date} />
        <HourList 
          data={hours}
          keyExtractor={item=> String(item.time)}
          renderItem={({item})=>(
            <HourButton onPress={()=>handleConfirm(item.value)} enabled={item.available}>
              <HourText>{item.time}</HourText>
            </HourButton>
      )}
        />
      </Container>
    </Background>
  );
}
SelectDateTime.navigationOptions =({navigation})=>({
  title: "Selecione o horário",
  headerLeft: ()=>(
    <TouchableOpacity onPress={()=>navigation.goBack()}><Icon name="chevron-left" size={30} color="#fff" /></TouchableOpacity>
  )
})
