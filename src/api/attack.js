import request from '/@/utils/request'

export const fetchAttacks = () => {
    return request({
        url: '/api/Attack',
        method: 'get',
    })
}
