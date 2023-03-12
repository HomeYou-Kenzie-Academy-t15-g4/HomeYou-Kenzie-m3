import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { CssTextField } from './style';
import { StyledFieldset } from './fieldSetStyled';
import { useContext } from 'react';
import { HousesContext } from '../../../../providers/HousesContext';
import { StyledParagraph } from '../../../../styles/typograthy';
import { CSSProperties } from 'react';

interface IInputProps {
  label: React.ReactNode;
  register?: UseFormRegisterReturn<string>;
  type: 'text' | 'number';
  error?: FieldError;
  fontColor?: string;
  value?: string;
  onChange?: any;
  multiline?: boolean;
  helperText?: boolean;
  controlSx?: CSSProperties;
}

const HouseInput = ({
  label,
  register,
  type,
  error,
  value,
  onChange,
  multiline,
  helperText,
  controlSx,
}: IInputProps) => {
  const { loadValues } = useContext(HousesContext);

  return (
    <StyledFieldset style={controlSx}>
      <CssTextField
        fullWidth
        maxRows={5}
        helperText={
          helperText && loadValues.houseDesc?.length > 2
            ? `${loadValues.houseDesc?.length} caracteres (min:200 max:550)`
            : false
        }
        multiline={multiline ? true : false}
        value={value}
        {...register}
        onChange={(event) => onChange(event)}
        label={label}
        type={type}
      />
      {error ? (
        <StyledParagraph $fontColor='red'>{error.message}</StyledParagraph>
      ) : null}
    </StyledFieldset>
  );
};

export default HouseInput;
