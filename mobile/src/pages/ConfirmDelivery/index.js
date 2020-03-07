import React, { useState } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

import Background from '~/components/Background';
import api from '~/services/api';

import {
  Container,
  HeaderContainer,
  Title,
  WrappContainer,
  SendButton,
  ButtonCapture,
  Camera,
  CameraContent,
  TextButton,
} from './styles';

export default function ConfirmDelivery({ route }) {
  const { id } = route.params.infos;
  const deliverymanId = useSelector(state => state?.auth.id);
  const [dataImage, setDataImage] = useState({});
  const navigation = useNavigation();
  const [imgPath, setImgPath] = useState(null);

  async function TakePicture(camera) {
    const options = { quality: 0.5, base64: false };
    const data = await camera.takePictureAsync(options);
    setImgPath(data.uri);
    setDataImage(data);
  }

  async function handleConfirm() {
    if (imgPath === null) {
      Alert.alert('Photograph the signature');
      return;
    }
    const dataFile = new FormData();
    dataFile.append('file', {
      uri: dataImage.uri,
      name: 'signature.jpg',
      type: 'image/jpeg',
    });

    const response = await api.post('files', dataFile);

    await api.put(`/deliveryman/${deliverymanId}/deliveredorders`, {
      orderId: id,
      signature_id: response.data.id,
    });

    Alert.alert('Successfully delivered');
    navigation.navigate('Dashboard');
  }
  return (
    <Background>
      <Container>
        <HeaderContainer>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Icon name="keyboard-arrow-left" color="#fff" size={30} />
          </TouchableOpacity>
          <View>
            <Title>Confirm delivery</Title>
          </View>
          <View />
        </HeaderContainer>

        <WrappContainer>
          <Camera
            type={Camera.Constants.Type.back}
            // flashMode={Camera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {imgPath !== null ? (
              <CameraContent source={{ uri: imgPath }} />
            ) : (
              ({ camera }) => (
                <ButtonCapture onPress={() => TakePicture(camera)}>
                  <Icon name="camera-alt" color="#FFFFFF" size={30} />
                </ButtonCapture>
              )
            )}
          </Camera>

          <SendButton onPress={handleConfirm}>
            <TextButton>Confirm</TextButton>
          </SendButton>
        </WrappContainer>
      </Container>
    </Background>
  );
}
