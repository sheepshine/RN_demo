import * as types from '../constants/ActionTypes';

// 执行登录
export function doLogin(user) {
    return dispatch => {
        dispatch(isLogining());
        // 模拟用户登录
        let result = fetch('https://github.com/').then((res) =>{
            dispatch(loginSuccess(true, user));
        }).
        catch((e) =>{
            dispatch(loginSuccess(false, null));
        });
    }
}

// 正在登录
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    }
}

// 登录完成
function loginSuccess(isSuccess, user) {
    return {
        type: types.LOGIN_IN_DONE,
        isSuccess: isSuccess,
        user: user
    }
}