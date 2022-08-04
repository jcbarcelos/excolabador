import React from 'react';

import { Container, Title, ContainerKlabin, BalaoConversaKlabin, Icone } from './HistoricoConversaStyled.js';

function HistoricoConversa() {
  return (
    <Container>
        <Title>Histórico da conversa:</Title>
        <ContainerKlabin>
            <Icone />
            <BalaoConversaKlabin>

            </BalaoConversaKlabin>
        </ContainerKlabin>
    </Container>
  )
}

export default HistoricoConversa;