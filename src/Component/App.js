import React, {Component} from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: false,
      data : [],  //DataUser
      searchText : '',
      editUserStatus : false,
      userEditObject : {}
    }
  }



  // truoc khi vao web
  componentDidMount() {
    // kiem tra xem co localStorage hay chua
    if(localStorage.getItem("userData") === null){
      localStorage.setItem('userData', JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data : temp
      });
    }
  }

  deleteUser = (idUser) => {
    var tempDate = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data : tempDate
    });
    localStorage.setItem('userData', JSON.stringify(tempDate));
  }

  getUserEditInfoApp = (info) => {
    this.state.data.forEach((value,key) => {
      if(value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  changeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject : user
    });
  }
  
  // dung cho Search
  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm
    });
  }

  // dung cho Search
  getSearchText = (dl) => {
    this.setState({
      searchText : dl
    });
  }

  // dung cho AddUser
  getNewUserData = (name, tel, permission) => {
    let item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = parseInt(permission);
    var items = this.state.data;
    items.push(item);
    this.setState({
      data : items
    });
    localStorage.setItem('userData', JSON.stringify(this.state.data));
  }

  render() { 
    //localStorage.setItem("userData", JSON.stringify(DataUser)); 
    var ketQua = [];
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketQua.push(item);
      }
    });
    
    return (
      <div className="App">
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
                ketNoi={() => this.doiTrangThai()} 
                hienThiForm={this.state.hienThiForm} 
                checkConnectProps={(dl) => this.getSearchText(dl)}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                userEditObject={this.state.userEditObject}
              />
              <TableData 
                dataUserProps={ketQua}
                editFun={(user) => this.editUser(user)}
                changeEditUserStatus={() => this.changeEditUserStatus()}
                deleteUser={(idUser) => this.deleteUser(idUser)}
              />
              <AddUser 
                hienThiForm={this.state.hienThiForm} 
                add={(name, tel, permission) => this.getNewUserData(name, tel, permission)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
