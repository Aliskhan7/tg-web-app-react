import React, {useEffect} from 'react';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {

    const {user, onClose} = useTelegram()

    return (
        <div className={'header'}>
            <Button ooClock={onClose}>Закрыть</Button>
            <span className={'username'}>{user?.username}</span>
        </div>
    );
};

export default Header;