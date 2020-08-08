import React from 'react'

class SearchList extends React.Component {
  render() {
    return(
      <>
        <PopularSearch />
        <SearchHistory />
      </>
    )
  }
}

class SearchHistory extends React.Component {
  render() {
    return(
      <div className='searchHistory'>
        <div>
          搜索历史
        </div>
        <div>
          <div>
            <span>
              建筑史概论建筑史概
            </span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shanchu"></use>
              </svg>
          </div>
          <div>
            <span>
              网络版权法
            </span>
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-shanchu"></use>
              </svg>
          </div>
        </div>
      </div>
    )
  }
}

class PopularSearch extends React.Component {
  render() {
    return(
      <div className='popularSearch'>
        <div>
          热门搜索
        </div>
        <div>
          <span>中国文化史</span>
          <span>心理学与生活</span>
        </div>
      </div>
    )
  }
}

export default SearchList