import styled from "styled-components";
import { CardContent, Typography } from "../../../../node_modules/@material-ui/core/index";

export const LabelStyled = styled(Typography) `
    font-weight: 500;
    font-size: 1.5rem;
`

export const ValueStyled = styled(Typography)`
    font-weight: 500;
    font-size: 1.5rem;
`
export const CardContentStyled = styled(CardContent)`
    border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`

export const CardPanelContentStyled = styled(CardContent)`
    display: flex;
    justify-content: space-between;
    padding: 25px;
`
export const ItemStyled = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 150px;
`