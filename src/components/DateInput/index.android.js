import React, { useState, useMemo } from 'react';
import { DatePickerAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container ,DateButton, DateText} from './styles';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

export default function DateInput({ date, onChange }) {

  const dateFormatted = useMemo(() =>
    format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt })
    , [date])

  async function handleOpenPicker(){
    const {action, year, month, day} = await DatePickerAndroid.open({
      date: date,
      mode:'spinner'
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }
  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}
