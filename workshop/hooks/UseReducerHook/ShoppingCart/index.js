import { Box, Flex } from '@chakra-ui/react';
import { useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Find the item by id in the state.items array
      const itemToAdd = state.items.find((item) => item.id === action.itemId);

      if (itemToAdd) {
        // If the item already exists in the cart, increase its quantity
        const updatedItems = state.items.map((item) =>
          item.id === action.itemId ? { ...item, quantity: item.quantity + 1 } : item
        );

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice + itemToAdd.price,
        };
      } else {
        // If the item doesn't exist in the cart, add it with quantity 1
        const newItem = { id: action.itemId, name: 'New Item', price: 10, quantity: 1 };
        return {
          ...state,
          items: [...state.items, newItem],
          totalPrice: state.totalPrice + newItem.price,
        };
      }

    case 'REMOVE_ITEM':
      // Find the item by id in the state.items array
      const itemToRemove = state.items.find((item) => item.id === action.itemId);

      if (itemToRemove && itemToRemove.quantity > 1) {
        // If the item has a quantity greater than 1, decrease its quantity
        const updatedItems = state.items.map((item) =>
          item.id === action.itemId ? { ...item, quantity: item.quantity - 1 } : item
        );

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice - itemToRemove.price,
        };
      } else {
        // If the item has a quantity of 1 or doesn't exist, remove it from the cart
        const updatedItems = state.items.filter((item) => item.id !== action.itemId);

        return {
          ...state,
          items: updatedItems,
          totalPrice: state.totalPrice - (itemToRemove ? itemToRemove.price : 0),
        };
      }

    default:
      return state;
  }
};

const ShoppingCart = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(cartReducer, {
    items: [
      { id: 1, name: 'Item 1', price: 10, quantity: 2 },
      { id: 2, name: 'Item 2', price: 15, quantity: 1 },
      // Add more sample items
    ],
    totalPrice: 40,
  });

  // Event handler for adding an item
  const handleAddItem = (itemId) => {
    dispatch({ type: 'ADD_ITEM', itemId });
  };

  // Event handler for removing an item
  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', itemId });
  };
  return (
    <div className='shopping-cart'>
      <h1>Shopping Cart</h1>
      <div className='cart-items'>
        {state.items.map((item) => (
          <Flex key={item.id} flexDir={'column'} mt={'.5rem'} bg={'red'}>
            <span className='item-name'>{item.name}</span>
            <span className='item-price'>Price: ${item.price}</span>
            <Flex justifyContent={'space-between'}>
              Quantity: {item.quantity}
              <button onClick={() => handleRemoveItem(item.id)}>-</button>
              <button onClick={() => handleAddItem(item.id)}>+</button>
            </Flex>
          </Flex>
        ))}
      </div>
      <Box mt={5}>Total Price: ${state.totalPrice}</Box>
    </div>
  );
};
export default ShoppingCart;
