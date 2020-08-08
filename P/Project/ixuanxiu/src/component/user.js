import React from 'react'

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInterface: '已评价课程',
      msgData: []
    }
  }
  handleInterfaceClick(e) {
    let index = e.target.getAttribute('index');
    if(index === '1') {
      if(this.state.showInterface === '已评价课程') {
        return;
      }
      this.setState({
        showInterface: '已评价课程',
      })
    }
    else if(index === '2') {
      if(this.state.showInterface === '消息') {
        return;
      }
      this.setState({
        showInterface: '消息',
      })
    }
  }
  render() {
    return(
      <>
        <UserData />
        <UserMsg 
          showNow={this.state.showInterface} msgData={this.state.msgData}
          onClick={this.handleInterfaceClick.bind(this)}
        />
      </>
    )
  }
}

class UserMsg extends React.Component {
  render() {
    let style = ['', ''];
    let showNow = this.props.showNow;
    let showData = <></>;
    if(showNow === '已评价课程') {
      style[1] = 'unselected';
    }
    else if(showNow === '消息') {
      style[0] = 'unselected';
    }
    if(this.props.msgData.length === 0) {
      let str = '';
      if(showNow === '已评价课程') {
        str = '还没有任何评论';
      }
      else if(showNow === '消息') {
        str = '暂时还没有收到消息哦';
      }
      showData = <>
                   <img src='./img/no-message.png' alt='没有消息'/>
                   <div>{str}</div>
                 </>
    }
    return(
      <>
        <div className='box2'>
          <div className='interfaceSelection'>
            <div className={'option ' + style[0]} index={1} onClick={this.props.onClick}>
              <span index={1} onClick={this.props.onClick}>已评价课程</span>
            </div>
            <div className={'option ' + style[1]} index={2} onClick={this.props.onClick}>
              <span index={2} onClick={this.props.onClick}>消息</span>
            </div>
          </div>
        </div>
        <div className='msg'>
          {showData}
        </div>
      </>
    )
  }
}

class UserData extends React.Component {
  render() {
    return (
      <>
        <div className='filler2'></div>
        <div className='user'>
          <div className='img'>
            <img src='./img/anonymous.png' alt='头像'/>
          </div>
        </div>
        <div className='userName'>这是用户的名字</div>
      </>
    )
  }
}

export default User