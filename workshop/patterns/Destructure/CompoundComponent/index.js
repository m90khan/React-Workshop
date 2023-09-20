import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';

// Compound components:
// Compound components are a pattern in React where a group of related components work together to form a larger, more complex component.
// Example: Tabs as compound components
const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div>
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, {
            isActive: index === activeTab,
            onClick: () => setActiveTab(index),
          })
        )}
      </div>
      <div>{children[activeTab].props.children}</div>
    </div>
  );
};

const Tab = ({ isActive, onClick, label, children }) => (
  <Box>
    <button onClick={onClick} style={{ fontWeight: isActive ? 'bold' : 'normal' }}>
      {label}
    </button>
  </Box>
);
const CompoundComponent = () => {
  return (
    <Tabs>
      <Tab label='Tab 1'>Content for Tab 1</Tab>
      <Tab label='Tab 2'>Content for Tab 2</Tab>
      <Tab label='Tab 3'>Content for Tab 3</Tab>
    </Tabs>
  );
};

export default CompoundComponent;
