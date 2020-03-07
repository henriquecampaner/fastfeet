import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import ContentContainer from '~/components/ContentContainer';
import EditBar from '~/components/EditBar';
import FileInput from '~/components/FileInput';
import Input from '~/components/InputForm';
import api from '~/services/api';

import { Container } from './styles';

export default function CouriersNew() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        avatar_id: Yup.string(),
        email: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      const dataFile = new FormData();
      dataFile.append('file', data.avatar);

      const responseFile = data.avatar
        ? await api.post('files', dataFile)
        : null;

      const { name } = data;
      const avatar_id = responseFile?.data?.id;
      const { email } = data;

      await api.post(`/deliveryman`, { name, avatar_id, email });
      toast.success('Deliveryman updated successfully');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
          toast.error(error.message);
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <ContentContainer>
      <>
        <EditBar
          Title="Edit Deliveryman"
          form="adddeliveryman"
          back="/couriers"
        />

        <Container>
          <Form ref={formRef} onSubmit={handleSubmit} id="adddeliveryman">
            <FileInput name="avatar" />

            <div className="product-container">
              <span>Name</span>
              <Input name="name" type="text" />
            </div>
            <div className="product-container">
              <span>E-mail</span>
              <Input name="email" type="email" />
            </div>
          </Form>
        </Container>
      </>
    </ContentContainer>
  );
}
