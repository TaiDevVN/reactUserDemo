import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tempValue : '',
            userObj : {}
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj : info
        });
        this.props.getUserEditInfoApp(info);
    }
    
    isShowEditForm = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
                        getUserEditInfo={(info) => this.getUserEditInfo(info)}
                        changeEditUserStatus={() => this.props.changeEditUserStatus()}
                        userEditObject={this.props.userEditObject}
                    />;
        } else {
            return null;
        }
    }

    isChange = (event) => {
        this.setState({
            tempValue : event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }

    hienThiNut = () => {
        if(this.props.hienThiForm === true) {
            return <div className="btn  btn-outline-secondary ml-4" onClick={() => this.props.ketNoi()}>Click đóng lại</div>;
        } else {
            return <div className="btn  btn-outline-info ml-4" onClick={() => this.props.ketNoi()}>Click thêm mới</div>;
        }
    }

    render() {   
        return (
            <div className="col-12 text-left">
                {this.isShowEditForm()}
                <div className="form-group">
                    <div className="btn-group">
                        <input 
                            type="text" 
                            className="form-control" style={{width: '200px'}}
                            placeholder="Nhập tên cần tìm"
                            onChange={(event) => this.isChange(event)}
                        />
                        <div 
                            className="btn btn-info" 
                            onClick={(dl) => this.props.checkConnectProps(this.state.tempValue)} 
                        >
                            Search
                        </div>
                    </div>
                    {this.hienThiNut()}
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;