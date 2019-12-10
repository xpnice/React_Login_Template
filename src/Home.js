import PropTypes from 'prop-types';
import React from 'react';
const Home = props => {
    const { history } = props;
    
    let users=history.location.query.userinfo
    const usersElements = [] // 保存每个用户渲染以后 JSX 的数组
    var i=0;
    for (let user of users) {
      usersElements.push( // 循环每个用户，构建 JSX，push 到数组中
        <div key={i++}>
          <div>姓名：{user.username}</div>
          <div>邮箱：{user.email}</div>
          <div>性别：{user.gender}</div>
          <div>密码：{user.password}</div>
          <div>上次登录时间：{user.lastlogin}</div>
          <hr />
        </div>
      )
    }
    console.log(history)
    return (

        <div>{usersElements}</div>
    )
}
Home.propTypes = {
    history: PropTypes.object
};
export default Home;