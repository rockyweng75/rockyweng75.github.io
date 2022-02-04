const Attacks = [
    {
        id: 1,
        header: '戰鬥',
        image: '../img/swords.png',
        content: {
            row: [
                { text: '你使用武器對前方的敵人進行攻擊！'},
                { br: true},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '再次攻擊', 
                url: ''
            },
            {
                type: '',
                name: '逃跑',
                url: ''
            }
        ]
    }, 
]


const api = [
    {
        url: '/api/Attack',
        type: 'get',
        response: config => {
          return Attacks
        }
    },
]

export default api;