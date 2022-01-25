import './header.css';
import React, {useContext} from 'react'
import {Box, styled} from '@mui/system'
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import {AppContext} from '../../context';
import logo from '../img/logo.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const nav = [
    {
        to: '/skater',
        text: 'ELECTRIC SKATEBOARDS',
    },
    // {
    //     to: '/catalog',
    //     text: 'ELECTRIC SCOOTERS',
    // },
    {
        to: '/catalog',
        text: 'CATALOGUE',
    },
    {
        to: '/info',
        text: 'MORE INFO',
    },
    {
        to: '/profile',
        text: 'AUTHORIZATION'
    },
]

export const Header = () => {
    const {onExit, isAuth, basket} = useContext(AppContext)

    return (
        <div className={'header__container'}>
            <div className="header__container-logo">
                <Link to="/">
                    <img className={'logo'} src={logo} alt={logo}/>
                </Link>
            </div>
            <Box component="nav" py={2}>
                <List className={'header__list'} component="ul" mx={-2}>
                    {nav.map(({to, text}) => (
                        <Box component="li" mx={2} key={text}>
                            <LinkText to={to}>{text}</LinkText>
                        </Box>
                    ))}
                </List>
            </Box>
            <div>
                {isAuth && <>
                    <Button onClick={onExit}>Exit</Button>

                    <Button component={Link} to="/profile" color="primary" className='header__logo'>
                        <AccountCircleIcon/>
                    </Button>

                    <Button component={Link} to="/basket" color="primary" className='header__logo'>
                        <ShoppingCartIcon/>
                    </Button>
                </>}

            </div>
        </div>
    )
}

const List = styled(Box)({
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
})

const LinkText = styled(Link)({
    color: 'black',
    fontWeight: 'normal',
    fontSize: 16,
    textDecoration: 'none',
})