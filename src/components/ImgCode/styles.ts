import styled from 'styled-components';

// Types
type ContainerProps = {
    state: boolean;
};

export const Container = styled.div(({ state}: ContainerProps) => (`
    width: ${state ? '200px' : '0'};
    heigth: 200px;
    overflow: hidden;
    transition: all .5s linear;
    
`));