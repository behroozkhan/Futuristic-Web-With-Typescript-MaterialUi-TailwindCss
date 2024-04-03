


// interface CustomButton  extends React.HTMLAttributes<HTMLButtonElement>{

    
// }


// const Button: FC<CustomButton> = (props: Props) => {
//   return (
//     <div>Button</div>
//   )
// }

// export default Button

// import React from 'react';
// import Button, { ButtonProps } from '@mui/material/Button';

// interface CustomButtonProps extends ButtonProps {
//   customStyle?: 'primary' | 'secondary';
// }

// const CustomButton: React.FC<CustomButtonProps> = ({
//   customStyle = 'primary',
//   children,
//   ...rest
// }) => {
//   let buttonStyle = 'bg-blue-500 text-white'; // Default style
//   if (customStyle === 'secondary') {
//     buttonStyle = 'bg-gray-500 text-black'; // Custom secondary style
//   }

//   return (
//     <Button
//       className={`rounded-full px-4 py-2 p-50 ${buttonStyle}`} // Add Tailwind CSS classes
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// };

// export default CustomButton;


import styled from '@emotion/styled';


const StyledButton = styled.button`
  background: linear-gradient(45deg,#7855fe,#f77dff,#e300bf);
  border: none;
  padding: 10px 20px;
  display: inline-block;
  font-size: 20px;
  font-weight: 800;
  width: 180px;
  height: 65px;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-22deg);
  position: relative;

  &:hover {
    color: #fff;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: rgb(20, 20, 20);
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  // Add any additional custom props here
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <StyledButton
    onClick={onClick}
    {...props}>
    <span className="inline-block transform -skew-x-12">{children}</span>
    <span className="absolute inset-0 bg-gray-800 opacity-0 z-0 transition-opacity duration-500"></span>
  </StyledButton>
  );
};

export default Button;
