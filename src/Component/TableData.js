import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteUser(idUser);
    }

    mappingDataUser = () => this.props.dataUserProps.map((value,key) => (
       <TableDataRow
            deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
            userName={value.name} 
            key={key} 
            sst={key} 
            tel={value.tel}
            id={value.id}
            permission={value.permission} 
            editFunClick={(user) => this.props.editFun(value)}
            changeEditUserStatus={() => this.props.changeEditUserStatus()}
        /> 
    ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-inverse table-hover">
                    <thead className="thead-inverse">
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.mappingDataUser()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;