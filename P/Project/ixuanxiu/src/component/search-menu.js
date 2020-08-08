import React from 'react'

class SearchMenu extends React.Component {
  render() {
    let menu = this.props.menu;
    let searchData = this.props.searchData;
    let data;
    if(menu === null) {
      return <></>
    }
    switch(menu[0]) {
      case '1': {
        data = searchData.category.concat();
        break;
      }
      case '2': {
        data = searchData.time.concat();
        break;
      }
      case '3': {
        data = searchData.location.concat();
        break;
      }
      case '4': {
        data = searchData.checking.concat();
        break;
      }
      case '5': {
        data = searchData.examine.concat();
        break;
      }
      default: {
        break;
      }
    }
    let list = [];
    
    for(let i = 1; i < menu.length; i++) {
      let className = find(menu[i], data) ? 'active' : '';
      list.push(<Box 
          value={menu[i]} key={i - 1} index={i} className={className}
          onClick={this.props.onClick}
        />)
    }
    return(
      <div className='searchMenu'>
        {list}
      </div>
    )
  }
}

class Box extends React.Component {
  render() {
    return(
      <div 
        index={this.props.index} className={this.props.className}
        onClick={this.props.onClick}
      >{this.props.value}</div>
    )
  }
}

function find(item, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(item === arr[i]) {
      return true;
    }
  }
  return false;
}

export default SearchMenu