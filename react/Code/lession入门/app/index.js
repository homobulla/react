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
    Link,
    Redirect
} from 'react-router-dom'

// 路由
// import User from './page/user/index'
// import About from './page/about/index'

// 变量与常量
const arrName = ['homo', 'bulla', 'feng']
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
const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                    <li>
                        <Link to="/users/">Users</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
        </div>
    </Router>
)
ReactDOM.render(<AppRouter />, document.getElementById('root'))
