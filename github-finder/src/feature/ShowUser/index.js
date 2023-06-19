import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./style.module.scss"

export const showUser = (props) => {
  return (
    <div className={`container ${style.UserContainer}`}>
      <div className='row'>
        <div className={`col-lg-6 ${style.UserName}`}>
          show User
        </div>

        <div className={` col-lg-5 ${style.UserAvatar}`}>
          show Avatar
        </div>
      </div>
    </div>
  )
}
