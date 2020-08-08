import React from 'react'

function find(item, arr) {
  for(let i = 0; i < arr.length; i++) {
    if(item === arr[i]) {
      return true;
    }
  }
  return false;
}

class CourseList extends React.Component {
  render() {
    let courseData = this.props.courseData;
    let courseList = [];
    let searchData = this.props.searchData;
    for(let i = 0, index = 0; i < courseData.length; i++) {
      if(! (searchData.category.length === 0 || find(courseData[i].category, searchData.category))) {
        continue;
      }
      if(! (searchData.time.length === 0 || find(courseData[i].time, searchData.time))) {
        continue;
      }
      if(! (searchData.location.length === 0 || find(courseData[i].location, searchData.location))) {
        continue;
      }
      if(! (searchData.checking.length === 0 || find(courseData[i].checking, searchData.checking))) {
        continue;
      }
      if(! (searchData.examine.length === 0 || find(courseData[i].examine, searchData.examine))) {
        continue;
      }
      courseList.push(<Course 
                        key={index} courseData={courseData[i]} index={index + 1}
                        onClick={this.props.onClick}
                      />)
      index++
    }
    return (
      <>
        <div className='filler1'></div>
        <div className='courseList'>
          <div>
            {courseList}
          </div>
      </div>
      </>
    )
  }
}

class Course extends React.Component {
  render() {
    let course = this.props.courseData;
    return (
      <div className='course' index={this.props.index}
        onClick={this.props.onClick}
      >
        <div index={this.props.index}>
          <div className='courseName' index={this.props.index}>{course.name}</div>
          <div index={this.props.index}>
            <div className='teacher' index={this.props.index}>{course.teacher}</div>
            <div className='category' index={this.props.index}>{course.category}</div>
          </div>
        </div>
        <div index={this.props.index}>
          <span className='time' index={this.props.index}>{course.time}</span>
          <span className='location' index={this.props.index}>{course.location}</span>
          <span className='grade' index={this.props.index}>{course.grade}</span>
          <span className='checking' index={this.props.index}>{course.checking}</span>
          <span className='examine' index={this.props.index}>{course.examine}</span>
        </div>
      </div>
    )
  }
}

export default CourseList

