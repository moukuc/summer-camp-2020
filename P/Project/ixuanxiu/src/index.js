import React from 'react'
import ReactDOM from 'react-dom'

import Title from './component/title'
import InterfaceSelection from './component/interface-selection'
import CourseSelectionInterface from './component/course-selection-interface'
import CourseList from './component/course-list'
import SearchMenu from './component/search-menu'
import User from './component/user'
import CourseData from './component/course-data'
import SearchList from './component/search-list'

import  './css/index.css'

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'none',
      courseData: [
        {
          name: '中国历代王朝兴衰史及其启示',
          teacher: '汤黎',
          category: '沟通与管理',
          time: '周一',
          location: '西区',
          grade: '2学分',
          checking: '签到',
          examine: '论文',
          _target: '全校本科生',
          _location: ['东九楼302', '西十二楼302'],
          _time: ['7-15周', '7-15周'],
          _evaluation: ['27', '7', '3'],
        },
        {
          name: 'Python编程技术',
          teacher: '陈建文',
          category: '科技与环境',
          time: '周三',
          location: '东区',
          grade: '2学分',
          checking: '不点名不签到',
          examine: '考试',
          _target: '全校理工科本科生',
          _location: ['东九楼D103', ''],
          _time: ['3-10周', ''],
          _evaluation: ['2', '3', '0'],
        },
        {
          name: '名歌名曲与乐理',
          teacher: '毛宛平',
          category: '文学与艺术',
          time: '周一',
          location: '东区',
          grade: '2学分',
          checking: '不点名不签到',
          examine: '考试',
          _target: '全校本科生',
          _location: ['东九楼C503', '西十二楼S511'],
          _time: ['3-13周', '3-13周'],
          _evaluation: ['3', '4', '7'],
        },
        {
          name: '证券投资',
          teacher: '楚鹰',
          category: '社会与经济',
          time: '周一',
          location: '东区',
          grade: '2学分',
          checking: '不点名不签到',
          examine: '论文',
          _target: '全校本科生',
          _location: ['东九楼B201', '西十二楼S104'],
          _time: ['3-13周', '3-14周'],
          _evaluation: ['2', '6', '1'],
        },
        {
          name: '博弈论（双语）',
          teacher: '罗云峰',
          category: '思维与方法',
          time: '周二',
          location: '西区',
          grade: '2学分',
          checking: '签到',
          examine: '论文',
          _target: '全校本科生',
          _location: ['西十二楼S207', ''],
          _time: ['3-13周', ''],
          _evaluation: ['2', '1', '0'],
        },
        {
          name: '大学生个体自我认识与自我管理',
          teacher: '唐菁菁',
          category: '沟通与管理',
          time: '周二',
          location: '东区',
          grade: '1学分',
          checking: '点名',
          examine: '其它',
          _target: '全校本科生',
          _location: ['东九楼D217', ''],
          _time: ['3-8周', ''],
          _evaluation: ['1', '1', '2'],
        }
      ],
      searchData: {
        category: [],
        time: [],
        location: [],
        checking: [],
        examine: [],
      },
      searchMenu: {
        category: ['1', '沟通与管理', '科技与环境', '历史与文化', '文学与艺术', '社会与经济', '思维与方法'],
        time: ['2', '周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        location: ['3', '东区', '西区'],
        checking: ['4', '点名', '签到', '不点名不签到'],
        examine: ['5', '论文', '考试', '其它']
      },
      searchNow: null,
      showInterface: '选课',
      courseNow: {
          name: '',
          teacher: '',
          category: '',
          time: '',
          location: '',
          grade: '',
          checking: '',
          examine: '',
          _target: '',
          _location: ['', ''],
          _time: ['', ''],
          _evaluation: ['', '', ''],
      },
      showPage: 'main'
    }
  }
  handleSearchClick(e){
    let index = e.target.getAttribute('index');
    let menuTarget = [];
    if(index === null) {
      return
    }
    switch (index) {
      case '1': {
        if(this.state.searchNow && this.state.searchNow[0] === this.state.searchMenu.category[0]) {
          menuTarget = null;
        }
        else {
          menuTarget = this.state.searchMenu.category;
        }
        break;
      }
      case '2': {
        if(this.state.searchNow && this.state.searchNow[0] === this.state.searchMenu.time[0]) {
          menuTarget = null;
        }
        else {
          menuTarget = this.state.searchMenu.time;
        }
        break;
      }
      case '3': {
        if(this.state.searchNow && this.state.searchNow[0] === this.state.searchMenu.location[0]) {
          menuTarget = null;
        }
        else {
          menuTarget = this.state.searchMenu.location;
        }
        break;
      }
      case '4':  {
        if(this.state.searchNow && this.state.searchNow[0] === this.state.searchMenu.checking[0]) {
          menuTarget = null;
        }
        else {
          menuTarget = this.state.searchMenu.checking;
        }
        break;
      }
      case '5': {
        if(this.state.searchNow && this.state.searchNow[0] === this.state.searchMenu.examine[0]) {
          menuTarget = null;
        }
        else {
          menuTarget = this.state.searchMenu.examine;
        }
        break;
      }
      default:
        break;
    } 
    this.setState({
      searchNow: menuTarget
    })
  }
  handleSearchMenuClick(e) {
    let index = e.target.getAttribute('index');
    let newSearchData = Object.assign(this.state.searchData);
    switch(this.state.searchNow[0]) {
      case '1' : {
        if(find(this.state.searchMenu.category[index], this.state.searchData.category)) {
          let temp = Object.assign(this.state.searchData.category);
          newSearchData.category = splice(this.state.searchMenu.category[index], temp)
        }
        else {
          newSearchData.category = this.state.searchData.category.concat(this.state.searchMenu.category[index]);
        }
        break;
      }
      
      case '2' : {
        if(find(this.state.searchMenu.time[index], this.state.searchData.time)) {
          let temp = Object.assign(this.state.searchData.time);
          newSearchData.time = splice(this.state.searchMenu.time[index], temp)
        }
        else {
          newSearchData.time = this.state.searchData.time.concat(this.state.searchMenu.time[index]);
        }
        break;
      }
      case '3' : {
        if(find(this.state.searchMenu.location[index], this.state.searchData.location)) {
          let temp = Object.assign(this.state.searchData.location);
          newSearchData.location = splice(this.state.searchMenu.location[index], temp)
        }
        else {
          newSearchData.location = this.state.searchData.location.concat(this.state.searchMenu.location[index]);
        }
        break;
      }
      case '4' : {
        if(find(this.state.searchMenu.checking[index], this.state.searchData.checking)) {
          let temp = Object.assign(this.state.searchData.checking);
          newSearchData.checking = splice(this.state.searchMenu.checking[index], temp)
        }
        else {
          newSearchData.checking = this.state.searchData.checking.concat(this.state.searchMenu.checking[index]);
        }
        break;
      }
      case '5' : {
        if(find(this.state.searchMenu.examine[index], this.state.searchData.examine)) {
          let temp = Object.assign(this.state.searchData.examine);
          newSearchData.examine = splice(this.state.searchMenu.examine[index], temp)
        }
        else {
          newSearchData.examine = this.state.searchData.examine.concat(this.state.searchMenu.examine[index]);
        }
        break;
      }
      default: {
        break;
      }
    }
    this.setState({
      searchData: newSearchData
    })
  }
  handleInterfaceClick(e) {
    let index = e.target.getAttribute('index');
    if(index === '1') {
      if(this.state.showInterface === '选课') {
        return;
      }
      this.setState({
        showInterface: '选课',
      })
    }
    else if(index === '2') {
      if(this.state.showInterface === '我') {
        return;
      }
      this.setState({
        showInterface: '我',
        searchNow: null,
        searchData: {
          category: [],
          time: [],
          location: [],
          checking: [],
          examine: [],
        }
      })
    }
  }
  handleCourseClick(e) {
    let index = e.target.getAttribute('index');
    this.setState({
      showPage: 'course',
      courseNow: this.state.courseData[index - 1],
    })
  }
  handleSearchIconClick() {
    this.setState({
      showPage: 'search',
    })
  }
  handleCourseReturnClick(e) {
    this.setState({
      showPage: 'main',
    });
  }
  handleSearchReturnClick(e) {
    this.setState({
      showPage: 'main',
    });
  }
  render() {
    let showInterface = this.state.showInterface;
    let showTop = <></>;
    let showOthers = <></>
    if(showInterface === '选课') {
      showTop = <CourseSelectionInterface 
                  searchNow={this.state.searchNow} onClick={this.handleSearchClick.bind(this)}
                />;
      showOthers = <>
                     <CourseList 
                       courseData={this.state.courseData} searchData={this.state.searchData}
                       onClick={this.handleCourseClick.bind(this)}
                     />
                     <SearchMenu 
                       menu={this.state.searchNow} searchData={this.state.searchData}
                       onClick={this.handleSearchMenuClick.bind(this)}
                     />
                   </>
    }
    else if(showInterface === '我') {
      showOthers = <>
                     <User />
                   </>
    }

    let showPage = ['', '', ''];
    if(this.state.showPage === 'main') {
      showPage[0] = 'show'
    }
    else if(this.state.showPage === 'course') {
      showPage[1] = 'show'
    }
    else if(this.state.showPage === 'search') {
      showPage[2] = 'show'
    }
    return (
      <>
        <div className={'mainInterface ' + showPage[0]}>
          <div className="top">
            <Title />
            <InterfaceSelection 
              showNow={this.state.showInterface} onClick={this.handleInterfaceClick.bind(this)}
              onSearchClick={this.handleSearchIconClick.bind(this)}
            />
            {showTop}
          </div>
            {showOthers}
        </div>
        <div className={'courseInterface ' + showPage[1]}> 
          <Title1 onClick={this.handleCourseReturnClick.bind(this)}/>
          <CourseData 
            courseData={this.state.courseNow}
          />
        </div>
        <div className={'searchInterface ' + showPage[2]}>
          <div>
            <Title1 onClick={this.handleCourseReturnClick.bind(this)}/>
            <div className='search'>
              <div>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-sousuo"></use>
                </svg>
                <input type='text' placeholder='快速搜索课程名或教师名' />
              </div>
              <div onClick={this.handleSearchReturnClick.bind(this)}>
                取消
              </div>
            </div>
          </div>
          <div className='filler4'></div>
          <SearchList />
        </div>
      </>
    )
  }
}

class Title1 extends React.Component {
  render() {
    return(
      <>
        <div className='title title1'>
          <div>
            <svg className="icon" aria-hidden="true"
              onClick={this.props.onClick}
            >
              <use xlinkHref="#icon-fanhui"></use>
            </svg>
            爱选修
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className='filler3'></div>
      </>
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
function splice(item, arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

ReactDOM.render(<Root />, document.getElementById('root'));