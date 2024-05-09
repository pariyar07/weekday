import React from 'react';
import { Button, AvatarGroup, Avatar, ButtonProps } from '@mui/material';

interface CustomButtonProps extends Omit<ButtonProps, 'type'> {
  text: string;
  type?: 'primary' | 'secondary' | 'link';
  icon?: React.ReactNode;
  avatars?: { alt: string; src: string }[];
}

const getButtonStyles = (type: CustomButtonProps['type']) => {
  switch (type) {
    case 'link':
      return {
        color: '#4943da',
        background: 'transparent',
        '&:hover': {
          background: 'transparent',
          boxShadow: 'none',
        },
      };
    case 'primary':
      return {
        color: '#000',
        background: '#55efc4',
        '&:hover': {
          background: '#55efc4',
          boxShadow: 'none',
        },
      };
    case 'secondary':
      return {
        color: '#fff',
        background: '#4943da',
        '&:hover': {
          background: '#4943da',
          boxShadow: 'none',
        },
      };
    default:
      return {};
  }
};

const CustomButton: React.FC<CustomButtonProps> = ({
  type = 'primary',
  text,
  icon,
  avatars = [],
  ...restProps
}) => {
  return (
    <Button
      variant="contained"
      color="inherit"
      sx={{
        fontWeight: '500',
        padding: '8px 18px',
        border: 0,
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '8px',
        ...getButtonStyles(type),
      }}
      {...restProps}
    >
      {icon && icon}
      {avatars.length > 0 && (
        <AvatarGroup max={2} sx={{ marginRight: '8px' }}>
          {avatars.map((avatar, index) => (
            <Avatar
              key={index}
              sx={{ width: 20, height: 20 }}
              alt={avatar.alt}
              src={avatar.src}
            />
          ))}
        </AvatarGroup>
      )}
      {text}
    </Button>
  );
};

export default CustomButton;
