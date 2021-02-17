import React from 'react';
import {
  Tabs as TabsChakra,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

function Tabs(props) {
  const { tabList, tabPanels } = props;
  return (
    tabList &&
    tabPanels && (
      <TabsChakra>
        <TabList
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {tabList.map((item, index) => (
            <Tab key={index}>{item}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {tabPanels.map((item, index) => (
            <TabPanel key={index}>{item}</TabPanel>
          ))}
        </TabPanels>
      </TabsChakra>
    )
  );
}

export default Tabs;
