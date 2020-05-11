import React, { Component } from 'react';

class TableDataRow extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }

    permission = () => {
        if(this.props.permission === 1){ return "Admin";}
        if(this.props.permission === 2){return "Moderator";}
        if(this.props.permission === 3){return "Normal user";}
        else{
            return null;
        }
    }

    editClick = () => {
        this.props.editFunClick();
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <tr>
                <td >{this.props.sst + 1}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permission()}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning sua"
                            onClick={() => this.editClick()}
                        >
                            <i className="fas fa-edit" /> sữa
                        </div>
                        <div className="btn btn-danger xoa"
                            onClick={(idUser) => this.deleteButtonClick(this.props.id)}
                        >
                            <i className="fas fa-trash-alt" /> xóa
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;