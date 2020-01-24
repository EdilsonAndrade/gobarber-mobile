import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
`;

export const Title = styled.Text`
font-weight:bold;
color: #fff;
font-size: 25px;
`
export const Form = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {padding:20}
})`
  align-self: stretch;
`;

export const FormInput = styled(Input)`
  margin-top: 10px;
`;
export const SubmiButton = styled(Button)`
  margin-top: 15px;
`;
export const ExitButton = styled(Button)`
  margin-top: 5px;
  background:#fe0000;
`;


export const Separator = styled.View`
  height: 1px;
  background: rgba(255,255,255,0.2);
  margin: 20px 0 15px;
`;
