// src/components/Toolbox.tsx

import React from 'react';
import { Box, SimpleGrid, Icon, Tooltip } from '@chakra-ui/react';
import { Account } from '../items/Account';
import { Instruction } from '../items/Instruction';
import { Program } from '../items/Program';

const toolboxItems = [
  new Account('account-template', 'Account', '', '{}'),
  new Instruction('instruction-template', 'Instruction', '', '', ''),
  new Program('program-template', 'Program', ''),
];

const Toolbox: React.FC = () => {
  return (
    <Box width='30%' maxWidth='200px' bg='gray.100' p={4}>
      <SimpleGrid spacing={4} columns={3}>
        {toolboxItems.map((item) => (
          <Tooltip key={item.id} label={item.getName()} placement='right'>
            <Box
              as='button'
              draggable
              onDragStart={(e: any) =>
                e.dataTransfer.setData('text/plain', item.getType())
              }
              p={2}
              borderRadius='md'
              _hover={{ bg: 'gray.200' }}
            >
              <Icon as={item.getIcon()} boxSize={6} />
            </Box>
          </Tooltip>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Toolbox;
