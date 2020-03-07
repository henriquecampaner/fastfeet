import React, { useState, useEffect } from 'react';

import ActionsMenu from '~/components/ActionsMenu';
import ContentContainer from '~/components/ContentContainer';
import MenuBar from '~/components/MenuBar';
import PageButton from '~/components/PageButton';
import api from '~/services/api';

import { TableContainer } from './styles';

export default function RecipientList() {
  const [recipients, setRecipients] = useState([]);
  const [page, setPage] = useState(1);

  async function getRecipients() {
    const { data } = await api.get('recipients');

    setRecipients(data);
  }

  useEffect(() => {
    getRecipients();
  }, []);
  return (
    <ContentContainer>
      <>
        <MenuBar
          Title="Manage Recipients"
          searchItem="recipients"
          setLoad={setRecipients}
          to="/recipients/add"
        />

        <TableContainer>
          <div className="divTable">
            <div className="divTableRow title">
              <div className="divTableCell title">ID</div>
              <div className="divTableCell title">Name</div>
              <div className="divTableCell title">Address</div>
              <div className="divTableCell title">Actions</div>
            </div>

            {recipients.map(item => (
              <div className="divTableRow content" key={item.id}>
                <div className="divTableCell">#{item.id}</div>
                <div className="divTableCell">{item.name}</div>
                <div className="divTableCell">
                  {`${item.number}, ${item.street} / ${item.postcode} - ${item.city} / ${item.country}`}
                </div>
                <div className="divTableCell status ">
                  <ActionsMenu
                    page="recipients"
                    id={item.id}
                    reload={getRecipients}
                  />
                </div>
              </div>
            ))}
          </div>
        </TableContainer>
        <PageButton setPage={setPage} page={page} length={recipients} />
      </>
    </ContentContainer>
  );
}
