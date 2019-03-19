/**
 * Created By brand On 2018/2/2
 */
import React, {Component} from 'react'
import Pagecomponent from './Pagecomponent'
// import data from '../mock/tsconfig.json'
// let data = [
//     {"id":1,"name":"hello1"},
//     {"id":2,"name":"hello2"},
//     {"id":3,"name":"hello3"},
   
//   ]
class Pagecontainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList:[],
            pageConfig:null
            // pageConfig: {
            //     totalPage: this.props.msg.total //总页码
            // }
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)
    }
    getCurrentPage(currentPage) {
        this.props.getNews(currentPage)
        this.setState({
            // dataList:data[currentPage-1].name
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({pageConfig: nextProps.msg.total});
      }
    componentDidMount(){
    }
    render() {
        return (
            <div className='pagenumber_box'>
               
                <Pagecomponent  pageConfig={this.state.pageConfig}
                               pageCallbackFn={this.getCurrentPage}/>
            </div>

        )
    }
}
export default Pagecontainer