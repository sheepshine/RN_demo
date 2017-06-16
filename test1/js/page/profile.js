/**
 * Created by yangchaoben on 2017/6/16.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
    Text,
    View,
    Navigator
} from 'react-native';

class Profile extends Component {
    render() {
        let username = this.props.user?this.props.user.username:'未登录';
        let password = this.props.user?this.props.user.password:'未登录';

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Text>{'姓名:' + username + '\n年龄:' + password}</Text>
            </View>
        );
    }
}


function select(store) {
    return {
        status: store.status,
        isSuccess: store.isSuccess,
        user: store.user
    }
}


export default connect(select)(Profile);