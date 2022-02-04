import request from '/@/utils/request'

export const fetchAttack = () => {
    return request({
        url: '/api/Attack',
        method: 'get',
    })
}
