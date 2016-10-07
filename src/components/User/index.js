import React from 'react';
import { AutoComplete } from 'antd';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataSource : []
        };
    }

    handleChange(value){
        this.setState({
            dataSource: !value || value.indexOf('@') > 0 ? [] : [
                value,
                value + '@qq.com',
                value + '@163.com',
                value + '@sina.com',
                value + '@189.com'
            ]
        });
    }

    render(){
        const { dataSource } = this.state;
        return (
            <AutoComplete style={{ width:200 }} dataSource={dataSource} onChange={this.handleChange.bind(this)} />
        );
    }
}

export default User;