import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import './AboutToExpire.css';


const AboutToExpire = () => {
  return (
    <div className="AboutToExpirePage">
      <div className="AboutToExpireHeader">
        <h1 className="title">About To Expire</h1>
      </div>
      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>About To Expire</Th>
        <Th>Location</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Tomatoes</Td>
        <Td>6 days</Td>
        <Td>Fridge</Td>
      </Tr>
      <Tr>
        <Td>Onion</Td>
        <Td>6 days</Td>
        <Td>Fridge</Td>
      </Tr>
      <Tr>
        <Td>Carrot</Td>
        <Td>6 days</Td>
        <Td>Fridge</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  );
};

export default AboutToExpire;
