import request from '/@/utils/request'
const env = import.meta.env.DEV
import pages from '/@/datajs/page.js'
export const fetchPages = () => {
    if(env){
        return request({
            url: '/api/Page',
            method: 'get',
        })
    } else {
        return new Promise((resolve, reject) => {
            resolve(pages)
        });
    }
}
