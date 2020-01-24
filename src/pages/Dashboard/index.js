import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {withNavigationFocus} from 'react-navigation';
import { Container, Title, Appointments } from './styles';
import Background from '~/components/Background'
import Appointment from '~/components/Appointment'
import api from '~/services/api';

function Dashboard({isFocused}) {
  const [appointments, setAppointments] = useState([]);

  async function loadAppointments() {
    const response = await api.get('appointments');
    const data = response.data.filter(d=>d.past !== true);
    setAppointments(data);
  }
  useEffect(() => {
   
    if(isFocused){
      loadAppointments();
    }
   
    
  }, [isFocused])
  
  async function handleDelete(id){
      await api.delete(`appointments/${id}`);
      loadAppointments();
  }
  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>
        <Appointments data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Appointment onCancel={()=>handleDelete(item.id)} data={item} />}
         />
      </Container>
    </Background>

  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => <Icon name="dashboard" size={22} color={tintColor} />
}

export default withNavigationFocus(Dashboard);