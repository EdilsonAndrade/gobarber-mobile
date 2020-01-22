import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Title, Appointments } from './styles';
import Background from '~/components/Background'
import Appointment from '~/components/Appointment'
import api from '~/services/api';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
   
    async function loadAppointments() {
      const response = await api.get('appointments?limit=20&page=1');
      setAppointments(response.data);
    }
    loadAppointments();
  }, [])
  
  async function handleDelete(id){
      const response = await api.delete(`appointments/${id}`);
      setAppointments(response.data);
  }
  return (
    <Background>
      <Container>
        <Title>Dashboard</Title>
        <Appointments data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Appointment onCancel={()=>handleDelete(item.id)} data={item} />}
        >

        </Appointments>
      </Container>
    </Background>

  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => <Icon name="dashboard" size={22} color={tintColor} />
}

