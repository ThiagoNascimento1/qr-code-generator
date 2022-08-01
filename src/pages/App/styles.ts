import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    max-width: 768px;
    border-radius: 10px;
    display: flex;
    align-item: center;
    padding: 50px 20px;
    background-color: #eee;
    box-shadow: 0 8px 25px rgba(0, 0, 0, .8);
`;

export const AreaHeaderInput = styled.div`
    flex: 1;
    padding: 10px;
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        font-size: 30px;
    }

    p {
        font-size: 15px;
    }
`;

export const ImgCode = styled.div`
    width: 200px;
    height: 200px;
    background-color: #f00;
    margin-left: 20px;
`;