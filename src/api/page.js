import request from '/@/utils/request'

export const fetchPages = () => {
    return request({
        url: '/api/Page',
        method: 'get',
    })
}
