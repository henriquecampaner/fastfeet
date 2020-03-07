import React, { useState, useEffect } from 'react';

import ActionsMenu from '~/components/ActionsMenu';
import ContentContainer from '~/components/ContentContainer';
import MenuBar from '~/components/MenuBar';
import PageButton from '~/components/PageButton';
import api from '~/services/api';

import { TableContainer } from './styles';

export default function RecipientList() {
  const [problems, setProblems] = useState([]);
  const [page, setPage] = useState(1);

  async function loadProblems() {
    const { data } = await api.get('/orders/problems/list', {
      params: {
        page,
      },
    });
    setProblems(data);
  }

  useEffect(() => {
    loadProblems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <ContentContainer>
      <>
        <MenuBar
          Title="Manage Problems"
          searchItem="problems"
          setLoad={setProblems}
          to="orders/problems/add"
          noAdd
        />

        <TableContainer>
          <div className="divTable">
            <div className="divTableRow title">
              <div className="divTableCell title">Order</div>
              <div className="divTableCell title">Problem</div>
              <div className="divTableCell title">Actions</div>
            </div>

            {problems.map(item => (
              <div className="divTableRow content" key={item.id}>
                <div className="divTableCell">#{item.order_id}</div>
                <div className="divTableCell">{item.description}</div>
                <div className="divTableCell status ">
                  <ActionsMenu
                    content={item}
                    page="problems"
                    id={item.order_id}
                    reload={loadProblems}
                    moldalType="problem"
                    moldal
                  />
                </div>
              </div>
            ))}
          </div>
        </TableContainer>
        <PageButton setPage={setPage} page={page} length={problems} />
      </>
    </ContentContainer>
  );
}
