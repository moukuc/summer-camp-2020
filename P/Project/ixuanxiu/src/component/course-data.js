import React from 'react'

class CourseData extends React.Component {
  render() {
    return (
      <div className='courseData'>
        <Information 
          courseData={this.props.courseData}
        />
        <Comments 
          comments={[]}
        />
      </div>
      

    )
  }
}
class Information extends React.Component {
  render() {
    let data = this.props.courseData;
    return(
      <>
        <div></div>
        <div></div>
        <div className='courseName'>
          <span>{data.name}</span>
        </div>
        <div className='data1'>
          <div>
            <span>类别</span>
            <span>{data.category}</span>
          </div>
          <div>
            <span>学分</span>
            <span>{data.grade === '' ? '' : parseInt(data.grade)}</span>
          </div>
          <div>
            <span>针对对象</span>
            <span>{data._target}</span>
          </div>
        </div>
        <div className='data2'>
          <div>
            <div>
              <span>
                开课地点
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-didian"></use>
                </svg>
              </span>
            </div>
            <div>
              <span>{data._location[0]}</span>
            </div>
            <div>
              <span>{data._location[1]}</span>
            </div>
          </div>
          <div>
            <div>
              <span>
                开课时间
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-shijian00"></use>
                </svg>
              </span>
            </div>
            <div>
              <span>{data._time[0]}</span>
            </div>
            <div>
              <span>{data._time[1]}</span>
            </div>
          </div>
        </div>
        <div className='evaluation'>
          <div><span>课程评价</span></div>
          <div>
            <div>
              <div>
                {data._evaluation[0]}
              </div>
              <div>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-manyidu1"></use>
                </svg>
              </div>
            </div>
            <div>
              <div>
                {data._evaluation[1]}
              </div>
              <div>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-manyiduyiban"></use>
                </svg>
              </div>
            </div>
            <div>
              <div>
                {data._evaluation[2]}
              </div>
              <div>
                <svg className="icon" aria-hidden="true">
                  <use xlinkHref="#icon-manyidu"></use>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <span>
              {data.checking}
            </span>
            <span>
              {data.examine}
            </span>
          </div>
        </div>
        <div>评论</div>
      </>
    )
  }
}

class Comments extends React.Component {
  render() {
    let commits
    if(this.props.comments.length === 0) {
      commits = <div className='noComment'>
                  还没有评论哦，快来抢占沙发吧
                </div>
    }
    return (
      <div className='comments'>
        {commits}
        <div className='write'>
          <img src='./img/comment-button.png' alt='写评论'/>
        </div>
      </div>
    )
  }
}

export default CourseData