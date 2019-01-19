import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'lib-flexible'
import {
    HashRouter,
    Route,
    hashHistory,
    BrowserRouter as Router,
    Switch,
    Link
} from 'react-router-dom'

// 路由
import user from './page/user/index'

// 变量与常量
const arrName = ['homo', 'bulla', 'feng']

import './style/demo.css'
//组件

// 组件首字母必须大写
const NameList = ({ arrName }) => {
    const pop = name => alert(name)
    return (
        <ul>
            {arrName.map((name, index) => {
                return (
                    <li key={index} className="list" onClick={() => pop(name)}>
                        {name}
                    </li>
                )
            })}
        </ul>
    )
}
NameList.proptypes = {
    arrName: PropTypes.array
}
// class NameList extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <ul>
//                 {this.props.arrName.map((name, index) => {
//                     return <li key={index}>{name}</li>
//                 })}
//             </ul>
//         )
//     }
// }
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1 onClick={this.test}>name list</h1>
                <h1>Hello, {this.props.name}</h1>
                <Link to="/#/user">About</Link>
                <NameList arrName={arrName} />
            </div>
        )
    }
}
const aaa = 192.168
App.propTypes = {
    name: PropTypes.string
}
ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route path="/" component={App} />
            <Route path="/user" component={user} />
        </Switch>
    </Router>,
    document.getElementById('root')
)
