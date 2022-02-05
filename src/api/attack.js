import request from '/@/utils/request'

const env = import.meta.env.DEV
import attacks from '/@/datajs/attack.js'
export const fetchAttacks = () => {
    if(env){
        return request({
            url: '/api/Attack',
            method: 'get',
        })
    } else {
        return new Promise((resolve, reject) => {
            resolve(attacks)
        });
    }
}
