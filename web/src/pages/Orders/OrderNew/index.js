/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import ContentContainer from '~/components/ContentContainer';
import EditBar from '~/components/EditBar';
import Input from '~/components/InputForm';
import SelectAsync from '~/components/Select';
import api from '~/services/api';
// import history from '~/services/history';

import { Container } from './styles';

export default function OrderEdit() {
  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        recipient: Yup.string().required(),
        deliveryman: Yup.string().required(),
        product: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });

      const { product } = data;
      const recipient_id = data.recipient;
      const deliveryman_id = data.deliveryman;
      await api.post(`/orders/`, { product, recipient_id, deliveryman_id });
      toast.success('Order updated successfully');
    } catch (err) {
      toast.error('Something went wrong');
    }
  }
  return (
    <ContentContainer>
      <>
        <EditBar Title="Edit Order" form="editOrder" back="/orders" />

        <Container>
          <Form ref={formRef} onSubmit={handleSubmit} id="editOrder">
            <div className="select-container">
              <span>Recipent</span>
              <SelectAsync name="recipient" optionType="recipients" />
            </div>

            <div className="select-container">
              <span>Deliveryman</span>
              <SelectAsync name="deliveryman" optionType="couriers" />
            </div>

            <div className="product-container">
              <span>Product</span>
              <Input name="product" type="text" />
            </div>
          </Form>
        </Container>
      </>
    </ContentContainer>
  );
}
