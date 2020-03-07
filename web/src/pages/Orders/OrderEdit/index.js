import React, { useRef, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Form } from '@unform/web';
import * as Yup from 'yup';

import ContentContainer from '~/components/ContentContainer';
import EditBar from '~/components/EditBar';
import Input from '~/components/InputForm';
import Select from '~/components/Select';
import api from '~/services/api';

import { Container } from './styles';

export default function OrderEdit() {
  const formRef = useRef(null);
  const { id } = useParams();

  useMemo(() => {
    async function getData() {
      const { data } = await api.get(`orders/${id}`);
      formRef.current.setData(data);

      formRef.current.setFieldValue('deliveryman_id', {
        value: data.deliveryman.id,
        label: data.deliveryman.name,
      });

      formRef.current.setFieldValue('recipient_id', {
        value: data.recipient.id,
        label: data.recipient.name,
      });
    }
    getData();
  }, [id]);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        recipient_id: Yup.string().required(),
        deliveryman_id: Yup.string().required(),
        product: Yup.string().required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await api.put(`/orders/${id}`, {
        product: data.product,
        recipient_id: data.recipient_id,
        deliveryman_id: data.deliveryman_id,
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
        <EditBar Title="Edit Order" form="editOrder" back="/orders" />

        <Container>
          <Form ref={formRef} onSubmit={handleSubmit} id="editOrder">
            <div className="select-container">
              <span>Recipent</span>
              <Select name="recipient_id" optionType="recipients" />
            </div>

            <div className="select-container">
              <span>Deliveryman</span>
              <Select name="deliveryman_id" optionType="couriers" />
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
