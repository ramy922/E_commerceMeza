import React from 'react'
import './Header.css'   
import SearchOutlined from '../node_modules/@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '../node_modules/@material-ui/icons/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider'
import {auth} from './firebase'
 

function Header() {
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthentication = () =>{
  if (user){
       auth.signOut();
  }}
  return (
    <div className='header'>
      <Link to='/'>
      <img
    className='header_logo'
    src='https://heise.cloudimg.io/width/1920/q75.png-lossy-75.webp-lossy-75.foil1/_www-heise-de_/tipps-tricks/imgs/96/2/2/0/1/8/8/5/amazon-de-neutral-02-00214a13eecdef0f.jpeg'
    alt='no photo'
    />
    </Link>
    <div className='header_search'>
      <input
      className='header_searchInput'
      type='text'
      />
      <SearchOutlined 
      className='header_searchIcon'/>
    </div>
    
    <div className='header_nav'>
    <Link  to={!user && '/login'}>
    <div className='header_option' onClick={handleAuthentication}>
     <span className='header_optionLineOne'>
     Hello {!user ? 'Geust' : user.email}
     </span>
    
    <span className='haeder_optionLineTwo'>
      {user? 'SIGN OUT' : 'SIGN IN'}
      
     </span>
   
    </div>
    </Link>
    <div className='header_option'>
    <span className='header_optionLineOne'>
       your
     </span>
     <span className='haeder_optionLineTwo'>
      prime
     </span>
    </div>

    
  
    </div>
     <Link to='/checkout'>
       <div className='header_optionBasket'>
     <ShoppingCartOutlinedIcon className= 'header_optionBasket' />
     <span className='header_optionLine
     header_basketCount'>{basket?.lenght }</span>
     </div>
     </Link>
    </div>
  )
}

export default Header