import { Box, SimpleGrid, IconButton, useClipboard, useToast } from '@chakra-ui/react';
import { FaRegCopy } from 'react-icons/fa';
import React from 'react';

const emojis = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇",
  "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚",
  "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸",
  "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️",
  "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡",
  "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓",
  "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄",
  "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵",
  "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠",
  "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽"
];

const Index = () => {
  const { onCopy } = useClipboard();
  const toast = useToast();

  const handleCopy = (emoji) => {
    onCopy(emoji);
    toast({
      title: 'Copied!',
      description: `${emoji} copied to clipboard.`,
      status: 'success',
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <SimpleGrid columns={{ base: 5, md: 10 }} spacing={5}>
        {emojis.map((emoji, index) => (
          <IconButton
            key={index}
            aria-label={`Copy ${emoji}`}
            icon={<Box as="span">{emoji}</Box>}
            onClick={() => handleCopy(emoji)}
            variant="outline"
            size="lg"
            fontSize="2xl"
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;