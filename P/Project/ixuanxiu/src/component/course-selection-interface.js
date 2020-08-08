import React from 'react'

class CourseSelectionInterface extends React.Component {
  render() {
    let className = ['', '', '', '', ''];
    if(this.props.searchNow) {
      let index = parseInt(this.props.searchNow[0]);
      className[index - 1] = 'now';
    }
    return(
      <div className='menu'>
        <div onClick={this.props.onClick}>
          <span className={className[0]} index={1}>
            类别
            <svg className="icon" aria-hidden="true" index={1}>
              <use xlinkHref="#icon-zhankai" index={1}></use>
            </svg>
          </span>
          <span className={className[1]} index={2}>
            时间
            <svg className="icon" aria-hidden="true" index={2}>
              <use xlinkHref="#icon-zhankai" index={2}></use>
            </svg>
          </span>
          <span className={className[2]} index={3}>
            地点
            <svg className="icon" aria-hidden="true" index={3}>
              <use xlinkHref="#icon-zhankai" index={3}></use>
            </svg>
          </span>
          <span className={className[3]} index={4}>
            点名方式
            <svg className="icon" aria-hidden="true" index={4}>
              <use xlinkHref="#icon-zhankai" index={4}></use>
            </svg>
          </span>
          <span className={className[4]} index={5}>
            考核方式
            <svg className="icon" aria-hidden="true" index={5}>
              <use xlinkHref="#icon-zhankai" index={5}></use>
            </svg>
          </span>
        </div>
        <div></div>
      </div>
    )
  }
}

export default CourseSelectionInterface