import React from 'react'
import styled from 'styled-components/macro'

const Flex = styled.div`
    position: relative;
    display: flex;
    flex-wrap: ${props => {
        if (props.wrapReverse) return 'wrap-reverse'
        else if (props.noWrap) return 'nowrap'
        return 'wrap'
    }};

    justify-content: ${props => {
        if (props.justifyContent) return props.justifyContent
        if (props.justifyCenter) return 'center'
        else if (props.justifyAround) return 'space-around'
        else if (props.justifyBetween) return 'space-between'
        else if (props.justifyEnd) return 'flex-end'
        return 'flex-start'
    }};

    align-items: ${props => {
        if (props.alignItems) return props.alignItems
        else if (props.alignStretch) return 'stretch'
        else if (props.alignEnd) return 'flex-end'
        if (props.alignCenter) return 'center'
        else if (props.alignBaseline) return 'baseline'
        return 'flex-start'
    }};

    align-content: ${props => {
        if (props.alignContent) return props.content
        else if (props.contentStart) return 'flex-start'
        else if (props.contentEnd) return 'flex-end'
        else if (props.contentCenter) return 'center'
        else if (props.contentBetween) return 'space-between'
        else if (props.contentAround) return 'contentAround'
        return 'stretch'
    }};

    flex-direction: ${props => (props.column ? 'column' : 'row')};

    column-gap: ${props => (props.columnGap) ? props.columnGap : '0px'};
    row-gap: ${props => (props.rowGap) ? props.rowGap : '0px'};

    gap: ${props => (props.gap) ? props.gap : '0px 0px'};

    width: ${props => (props.fullWidth) ? '100%': 'auto'}
`

export const Column = styled.div`
    width: ${props => {
        if (props.three) return '33.33%'
        if (props.four) return '25%'
        return '50%'
    }};
    padding: ${props => (props.noPadding ? 0 : '15px')}};
`

export default Flex