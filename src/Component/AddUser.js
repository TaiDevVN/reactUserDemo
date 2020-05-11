import React, { Component } from 'react';

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : "",
            name : "",
            tel : "",
            permission : ""
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    kiemTraTrangThai = () => {
        if(this.props.hienThiForm === true) {
            return (
                <div className="col-md-3 col-12">
                    <form method="post">
                        <div className="card text-left w-100 mt-2">
                            <div className="card text-white bg-primary">
                                <div className="card-header">Thêm mới</div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label >Tên user</label>
                                        <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" placeholder="userName" />
                                        </div>
                                        <div className="form-group">
                                        <label >Điện thoại</label>
                                        <input onChange={(event) => this.isChange(event)} name="tel" type="text" className="form-control" placeholder="số" />
                                    </div>
                                    <div className="form-group">
                                        <label >Quyền</label>
                                        <select onChange={(event) => this.isChange(event)} className="form-control" name="permission">
                                            <option value={3}>Chọn quyền mặt định</option>
                                            <option value={1}>Admin</option>
                                            <option value={2}>Moderator</option>
                                            <option value={3}>Normal</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="reset"
                                            className="btn btn-block btn-success"
                                            onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)}
                                            value="Thêm mới"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </form>
                </div>
            );
        } else {
            return "";
        }
    }

    render() {
        return (         
            this.kiemTraTrangThai()
        );
    }
}

export default AddUser;