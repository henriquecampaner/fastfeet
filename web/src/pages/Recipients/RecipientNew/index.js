import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import ContentContainer from '~/components/ContentContainer';
import EditBar from '~/components/EditBar';
import Input from '~/components/InputForm';
import api from '~/services/api';

import { Container } from './styles';

export default function RecipientAdd() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required(),
        street: Yup.string().required(),
        number: Yup.string().required(),
        city: Yup.string().required(),
        postcode: Yup.string().required(),
        country: Yup.string().required(),
        complement: Yup.string(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.post(`/recipients`, {
        name: data.name,
        street: data.street,
        number: data.number,
        city: data.city,
        postcode: data.postcode,
        country: data.country,
        complement: data.complement,
      });
      toast.success('Order updated successfully');
      formRef.current.setErrors({});
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
        <EditBar Title="Edit Order" form="addRecipient" back="/recipients" />

        <Container>
          <Form ref={formRef} onSubmit={handleSubmit} id="addRecipient">
            <div className="input-container">
              <span>Name</span>
              <Input name="name" type="text" />
            </div>

            <div className="wrapp-address">
              <div className="address-input">
                <div className="input-container">
                  <span>Number</span>
                  <Input name="number" type="text" />
                </div>

                <div className="input-container">
                  <span>Street</span>
                  <Input name="street" type="text" />
                </div>

                <div className="input-container">
                  <span>Postcode</span>
                  <Input name="postcode" type="text" />
                </div>
              </div>

              <div className="address-input">
                <div className="input-container">
                  <span>Complement</span>
                  <Input name="Complement" type="text" />
                </div>

                <div className="input-container">
                  <span>City</span>
                  <Input name="city" type="text" />
                </div>

                <div className="input-container">
                  <span>Country</span>
                  <Input name="country" type="text" />
                </div>
              </div>
            </div>
          </Form>
        </Container>
      </>
    </ContentContainer>
  );
}
