import React, { useState } from 'react';
import Style from './style';
import ErrorText from '../errorText/index';

type Props = {
  // variant?: string;
  type?: string;
  width?: string;
  isFloat?: boolean;
  isRequired?: boolean;
  value: string | number;
  errors?: string[];
  children: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({
  // variant = 'outlined',
  type = 'text',
  width = '100%',
  isFloat = false,
  isRequired = false,
  value,
  errors = [],
  children,
  ...props
}: Props): JSX.Element => {
  const [inputType, setInputType] = useState(type);

  const handleChangeVisible = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <Style.Wrapper width={width}>
      <Style.Field>
        <Style.Input type={inputType} value={value} errors={errors} {...props} />
        <Style.Label isInput={value} isFloat={isFloat}>
          {children}
          {isRequired ? <Style.Required>*</Style.Required> : ''}
        </Style.Label>
        {type === 'password' ? <Style.EyeIcon onClick={handleChangeVisible} /> : ''}
      </Style.Field>
      <ErrorText errors={errors} />
    </Style.Wrapper>
  );
};

export default TextField;
