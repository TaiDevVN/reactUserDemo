import React, { Component } from 'react';


class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission 
        }   
    }   
    
    saveButton = () => {
        let info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission; 
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    render() {     
        return (
            <div className="row mb-2">
                <div className="col">
                    <form method="post">
                        <div className="card text-left w-100 mt-2">
                            <div className="card text-white bg-secondary">
                                <div className="card-header text-white text-center">Sửa thông tin user</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Tên user</label>
                                        <input
                                            defaultValue={this.props.userEditObject.name} 
                                            name="name" 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="userName"
                                            onChange={(event) => this.isChange(event)}
                                         />
                                        </div>
                                        <div className="form-group">
                                        <label >Điện thoại</label>
                                        <input 
                                            defaultValue={this.props.userEditObject.tel} 
                                            name="tel" type="text" 
                                            className="form-control" 
                                            placeholder="số" 
                                            onChange={(event) => this.isChange(event)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Quyền</label>
                                        <select  
                                            defaultValue={this.props.userEditObject.permission}
                                            className="form-control" 
                                            name="permission"
                                            onChange={(event) => this.isChange(event)}
                                        >
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="button"
                                            className="btn btn-block btn-success"
                                            value="Lưu lại"
                                            onClick={() => this.saveButton()}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        );
    }
}

export default EditUser;