import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import style from "./style.module.scss"

export const showUser = (props) => {
  return (
    <div className="card my-4" style={{ maxHeight: 150 }}>
      <div className="row g-0">
        <div className={`col-md-4 ${style.UserAvatarContainer}`}>
          <img src={props.UserAvatar} className="img-thumbnail" alt={props.UserName} />
        </div>
        <div className="col-md-8">
          <div className="card-body my-1">
            <div className='container my-2'>
              <div className='row'>
                <div className={`col-8`}>
                  <h5 className={`card-title`}>{props.UserName}</h5>
                </div>
                <div className='col-4'>
                  <button type="button" className="btn btn-primary">dsafkjh</button>
                </div>
              </div>
            </div>

            <div className='container'>
              <div className='row g-o'>
                <div className='col-6 g-o'>
                  <p className="card-text text-center">{props.followers} followers</p>
                </div>
                <div className='col-6'>
                  <p className="card-text text-center">{props.following} following</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
