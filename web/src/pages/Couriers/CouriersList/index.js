import React, { useState, useEffect } from 'react';

import ActionsMenu from '~/components/ActionsMenu';
import ContentContainer from '~/components/ContentContainer';
import MenuBar from '~/components/MenuBar';
import PageButton from '~/components/PageButton';
import api from '~/services/api';

import { TableContainer } from './styles';

export default function CouriersList() {
  const [page, setPage] = useState(1);
  const [couries, setCouries] = useState([]);

  async function getCouries() {
    const { data } = await api.get('deliveryman', {
      params: {
        page,
      },
    });
    setCouries(data);
  }

  useEffect(() => {
    getCouries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <ContentContainer>
      <>
        <MenuBar
          Title="Manage Couriers"
          searchItem="couries"
          setLoad={setCouries}
          to="/couriers/add"
        />

        <TableContainer>
          <div className="divTable">
            <div className="divTableRow title">
              <div className="divTableCell title">ID</div>
              <div className="divTableCell title">Foto</div>
              <div className="divTableCell title">Name</div>
              <div className="divTableCell title">E-mail</div>
              <div className="divTableCell title">Actions</div>
            </div>

            {couries.map(item => (
              <div className="divTableRow content" key={item.id}>
                <div className="divTableCell">#{item.id}</div>
                <div className="divTableCell">
                  <img
                    src={
                      item.avatar
                        ? item.avatar.url
                        : 'https://api.adorable.io/avatars/50/abott@adorable.png'
                    }
                    alt={item.name}
                  />
                </div>
                <div className="divTableCell">{item.name}</div>
                <div className="divTableCell">{item.email}</div>
                <div className="divTableCell status ">
                  <ActionsMenu
                    id={item.id}
                    page="couries"
                    item={item}
                    reload={getCouries}
                  />
                </div>
              </div>
            ))}
          </div>
        </TableContainer>
        <PageButton setPage={setPage} page={page} length={couries} />
      </>
    </ContentContainer>
  );
}
