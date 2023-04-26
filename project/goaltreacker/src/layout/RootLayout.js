import React, { Component } from 'react'
import { Outlet} from 'react-router-dom';
import HeaderTop from '../components/HeaderTop';
import Sideb from '../components/Sideb';




export default class RootLayout extends Component {
  render() {
    return (
      <div className='d-flex'>
        <Sideb/>

        <div className='d-flex flex-column  w-100 contentWrapper  '>
          <HeaderTop />
          <div className='d-flex w-100 justify-content-center  align-items-center '>

            <Outlet />
          </div>
        </div>

      </div>
    )
  }
}





