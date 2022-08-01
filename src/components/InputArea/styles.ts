import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .url {
        font-size: 15px;
        padding: 10px;
        background-color: transparent;
        border-bottom: 1px solid #221cd1;
    }

    button {
        display: block;
        padding: 12px;
        font-size: 15px;
        font-weight: 700;
        cursor: pointer;
        border-radius: 10px;
        color: #fff;
        background-color: #1c65d1;
        position: relative;
    }

    button:before,
    button:after {
        position: absolute;
        content: '';
        bottom: 0;
        height: 100%;
        width: 0;
        border-radius: 10px;
        transition: all 1s;
    }

    button:before {
        left: 0;
        background: linear-gradient(90deg, rgba(0,181,255,1) 81%, rgba(28,101,209,1) 100%);
    }

    button:after {
        right: 0;
        background: linear-gradient(90deg, rgba(28,101,209,1) 0%, rgba(0,181,255,1) 19%);
    }

    button:hover:before,
    button:hover:after {
        width: 35%;
    }
`;