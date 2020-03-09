import React, { useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';

import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import { Container, WrappContainer } from '~/components/styles';
import api from '~/services/api';

import {
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
        <WrappContainer>
          <Camera
            type={Camera.Constants.Type.back}
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

ConfirmDelivery.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      infos: PropTypes.shape({
        id: PropTypes.number,
        deliveryman_id: PropTypes.number,
        recipient_id: PropTypes.number,
        product: PropTypes.string,
      }),
    }),
  }).isRequired,
};
