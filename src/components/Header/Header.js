import React from 'react';
import Logo from '../Logo/Logo';
import Search from '../../containers/Search/Search';

const Header = () => {
    return (
            <div className="row">
                <Logo />
                <Search />
            </div>
    );
}

export default Header;