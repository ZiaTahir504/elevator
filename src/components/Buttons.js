import React, { Fragment, useState } from "react";
import styled from 'styled-components';
import Banner from './Banner.js'

const Div = styled.div`
    margin-top: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    background-color: #555555;
    font-size: 8vw;
    padding: 15px 32px;
    margin: 8px;
    border-radius: 10px;
    transition-duration: 0.5s;
    &:hover {
        background-color: #0000FF;
    }    
`;

const DisabledButton = styled.button`
    background-color: #555555;
    font-size: 8vw;
    padding: 15px 32px;
    margin: 8px;
    border-radius: 10px;
    opacity: 0.6;
    cursor: not-allowed;     
`;

const Key = styled.button`
    font-size: 6vw;
`;

const Buttons = () => {
    const [floor, setFloor] = useState(1);
    const [unlockFour, setUnlockFour] = useState(false);

    return (
        <Fragment>
            <Div>
                <Banner floor={floor} />
            </Div>
            <Div>
                <Button onClick={() => setFloor(1)} >1</Button>
                <Button onClick={() => setFloor(2)} >2</Button>
                <Button onClick={() => setFloor(3)} >3</Button>
                { unlockFour ? <Button onClick={() => setFloor(4)} >4</Button> : <DisabledButton>4</DisabledButton> }
            </Div>
            <Div>
                <Key onClick={() => unlockFour ? setUnlockFour(false) : setUnlockFour(true)}>🔑</Key>
            </Div>
        </Fragment>
    );
};

export default Buttons;
