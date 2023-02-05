import React from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  import { BellIcon } from '@chakra-ui/icons'
import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

  const NotificationMenu = () => {
    return (
        <div className="notifMenu">
            <Menu>
            <MenuButton as={IconButton} icon={<BellIcon size='lg'/>} variant='ghost'>
                Notifications
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
            </Menu>
        </div>
    );
};

export default NotificationMenu;