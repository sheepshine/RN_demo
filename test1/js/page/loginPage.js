import React, { Component } from 'react';

import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {connect} from 'react-redux';
import {doLogin} from '../action/index'

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    shouldComponentUpdate(nextProps, nextState)
    {
        // 登录完成，且成功登录
        if (nextProps.status === 'done' && nextProps.isSuccess) {
            // alert(nextProps.user)
            return false;
        }
        return true;
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <TextInput
                    style={{height: 40,width:200}}
                    placeholder="姓名"
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    style={{height: 40,width:200}}
                    placeholder="密码"
                    onChangeText={(password) => this.setState({password})}
                />
                <Text>用户名密码随便输</Text>
                <TouchableOpacity style={{backgroundColor: '#FF0000'}} onPress={this.handleLogin.bind(this)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: 100, height: 50}}>
                        <Text style={{color: '#FFFFFF', fontSize: 20}}>登录</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    // 执行登录
    handleLogin()
    {
        this.props.dispatch(doLogin(this.state));
    }
}

function select(store) {
    return {
        status: store.status,
        isSuccess: store.isSuccess,
        user: store.user
    }
}


export default connect(select)(LoginPage);