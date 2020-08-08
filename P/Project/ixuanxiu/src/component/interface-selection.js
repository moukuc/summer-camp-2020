import React from 'react'

class InterfaceSelection extends React.Component {
  render() {
    let style = ['', ''];
    let showNow = this.props.showNow;
    if(showNow === '我') {
      style[0] = 'unselected';
    }
    else if(showNow === '选课') {
      style[1] = 'unselected';
    }
    return (
      <div className='box1'>
        <div className='interfaceSelection'>
          <div className={'option ' + style[0]} index={1} onClick={this.props.onClick}>
            <span index={1} onClick={this.props.onClick}>选课</span>
          </div>
          <div className={'option ' + style[1]} index={2} onClick={this.props.onClick}>我</div>
        </div>
        <svg className="icon" aria-hidden="true"
          onClick={this.props.onSearchClick}
        >
          <use xlinkHref="#icon-sousuo"
            onClick={this.props.onSearchClick}
          ></use>
        </svg>
      </div>
    )
  }
}

export default InterfaceSelection