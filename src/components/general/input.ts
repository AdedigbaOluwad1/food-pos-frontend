import { TextField, styled } from "@mui/material";

const Input = styled(TextField)(() => ({
    '& .MuiOutlinedInput-root': {
        height: '3rem',
        minHeight: '3rem',
        alignItems: 'center',
        color: '#ABBBC2',
        fontSize: '0.875rem',
        marginTop: 0,
        background: '#2D303E',
        borderRadius: '8px',
        fontFamily: 'inter',
        '& fieldset': {
          border: '1px solid #393C49',
          borderRadius: '8px',
        },
        '&:hover fieldset': {
          borderColor: '#393C49'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#393C49',
          borderWidth: 1
        },
        '& input': {
          padding: '0.75rem',
          caretColor: '#ABBBC2',
          color: '#ABBBC2'
        }
    }
}))

export default Input;