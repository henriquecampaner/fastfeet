import React from 'react';
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md';

import PropTypes from 'prop-types';

import { ButtonBack, ButtonSave, ContentHeader } from './styles';

export default function EditBar({ Title, form, back }) {
  return (
    <>
      <ContentHeader>
        <h2>{Title}</h2>

        <aside>
          <ButtonBack to={back}>
            <MdKeyboardArrowLeft size={25} color="#fff" />
            <span>Back</span>
          </ButtonBack>
          <ButtonSave type="submit" form={form}>
            <MdDone size={25} color="#fff" />
            <span>Save</span>
          </ButtonSave>
        </aside>
      </ContentHeader>
    </>
  );
}

EditBar.propTypes = {
  Title: PropTypes.string.isRequired,
  form: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
};
