import React from 'react';
import './MainHeader.css'
import { BsSearch } from "react-icons/bs";
import { search } from '../fetchinApi';

const MainHeader = () => {

    return (
        <form className='search-input position-relative'>
            <input type="text" name="city" className='form-control' placeholder='Search' />
            <a className='search-icon col-4 text-center' type="submit" onClick={() => { search() }} >
                <BsSearch />
            </a>
        </form>
    );
}

export default MainHeader;
