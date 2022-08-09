import React, { Component } from 'react'

export default class Cars extends Component {
  render() {
    return (
      <article id={this.props.id} className='car'>
        <div className="car-description">
          <h3 className='car-title'>{this.props.title}</h3>
          <p className='car-bodywork'>{this.props.bodywork}</p>
        </div>
        <img src={this.props.image} alt='' />
        <div className="car-information">
          <div>
            <h4>Top Speed</h4>
            <p>{this.props.topSpeed} <span>Km/h</span></p>
          </div>
          <div>
            <h4>0-100 Km/h</h4>
            <p>{this.props.acceleration} <span>sec.</span></p> 
          </div>
          <div>
            <h4>Passengers</h4>
            <p>{this.props.passengers} </p>
          </div>
        </div>
        <div className="car-buttons">
          <a href={this.props.moreDetails} className='btn' target='_blank' rel='noreferrer'>MORE DETAILS</a>
          <a href={this.props.bookNow} className='btn' target='_blank' rel='noreferrer'>BOOK NOW</a>
        </div>
      </article>
    )
  }
}