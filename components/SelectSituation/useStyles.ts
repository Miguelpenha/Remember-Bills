import { useTheme } from 'styled-components'
import { StylesConfig } from 'react-select'

function useStyles(): StylesConfig {
    const theme = useTheme()

    return {
        container: (baseStyles) => ({
            width: '20em',
            ...baseStyles,
            '@media screen and (max-width: 900px)': {
                width: '25em'
            },
            '@media screen and (max-width: 450px)': {
                width: '95%'
            }
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: theme.colorSecondary
        }),
        dropdownIndicator: (baseStyles) => ({
            ...baseStyles,
            color: theme.primary
        }),
        indicatorSeparator: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: theme.primary
        }),
        option: (baseStyles, state) => ({
            ...baseStyles,
            cursor: 'pointer',
            backgroundColor: state.isFocused ? theme.primary : theme.secondary
        }),
        control: (baseStyles, state) => ({
            width: '100%',
            ...baseStyles,
            margin: 'auto',
            border: 'none',
            cursor: 'pointer',
            transitionDuration: '0.2s',
            backgroundColor: theme.secondary,
            transitionTimingFunction: 'linear',
            borderRadius: state.isFocused ? '8px' : '15px',
            boxShadow: state.isFocused ? `${theme.primary} 0px 2px 8px 4px` : `${theme.primary} 0px 1px 8px 1px`
        }),
        menuList: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: theme.secondary,
            ':hover': {
                backgroundColor: theme.secondary
            }
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            fontWeight: '500',
            color: theme.primary
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: theme.color
        })
    }
}

export default useStyles