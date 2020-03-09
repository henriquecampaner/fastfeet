import React, { useMemo, useState } from 'react';

import { format, parseISO } from 'date-fns';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import {
  Container,
  WrappContainer,
  InfoContainer,
  AlignContainer,
} from '~/components/styles';
import api from '~/services/api';

import NoProlem from './NoProblem';
import { ProblemText, ProblemTextSmall, Title } from './styles';

export default function ProblemView({ route }) {
  const [problems, setProblems] = useState([]);
  const { id } = route.params.infos;

  useMemo(() => {
    async function getProblem() {
      const { data } = await api.get(`/orders/${id}/problems`);
      setProblems(data);
    }
    getProblem();
  }, [id]);

  return (
    <Background>
      <Container>
        <WrappContainer>
          <Title>Delivery {id}</Title>

          {problems.length > 0 ? (
            problems.map(problem => (
              <InfoContainer key={problem.id} style={{ marginTop: 10 }}>
                <AlignContainer>
                  <ProblemText>{problem.description}</ProblemText>
                  <ProblemTextSmall>
                    {format(parseISO(problem.createdAt), 'dd/MM/yyyy')}
                  </ProblemTextSmall>
                </AlignContainer>
              </InfoContainer>
            ))
          ) : (
            <NoProlem />
          )}
        </WrappContainer>
      </Container>
    </Background>
  );
}

ProblemView.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      infos: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
