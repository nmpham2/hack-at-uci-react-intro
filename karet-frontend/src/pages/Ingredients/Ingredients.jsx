import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import AddIngredientButton from '../../components/AddIngredientButton/AddIngredientButton';

import './Ingredients.css';

const Ingredients = () => {
  return (
    <div className="ingredientsPage">
      <div className="ingredientHeader">
        <h1 className="title">LIST OF INGREDIENTS</h1>
        <div className="addButton">
        <AddIngredientButton />
        </div>
      </div>
      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Purchase date</Th>
        <Th>Expiration date</Th>
        <Th>Location</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Tomatoes</Td>
        <Td>02/02/2023</Td>
        <Td>02/02/2025</Td>
        <Td>Fridge</Td>
      </Tr>
      <Tr>
        <Td>Onion</Td>
        <Td>02/02/2023</Td>
        <Td>02/02/2025</Td>
        <Td>Fridge</Td>
      </Tr>
      <Tr>
        <Td>Carrot</Td>
        <Td>02/02/2023</Td>
        <Td>02/02/2025</Td>
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

export default Ingredients;
