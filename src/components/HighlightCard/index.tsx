import React from 'react';

import { 
    Container,
    Header,
    Title,
    Icon,
    Fotter,
    Amount,
    LastTransaction,
 } from './styles';

interface Props {
    type: 'up' | 'down' | 'total',
    title: string;
    amount: string;
    lastTrasaction: string;
   
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

export function HighlightCard({ 
    type,
    title, 
    amount, 
    lastTrasaction 
} : Props){
    return(
       <Container type={type}>
           <Header>
            <Title type={type}>{title}</Title>
            <Icon 
            name={icon[type]} 
            type={type}/>
           </Header>

           <Fotter>
               <Amount type={type}>
                   {amount}
                </Amount>
               <LastTransaction type={type}>{lastTrasaction}</LastTransaction>
           </Fotter>
       </Container>
    )
}