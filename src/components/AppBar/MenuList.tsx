import * as React from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';

interface Props {
  children: React.ReactNode;
  alt?: string;
  title?: string;
  list: string[];
  style?: React.CSSProperties;
}

const MenuList = ({ children, alt, title, list, style }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={alt}>
        <IconButton onClick={handleClick} sx={style}>
          {children}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {list.map((item: string) => (
          <MenuItem key={item} onClick={handleClose}>
            <Typography textAlign="center">{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuList;
