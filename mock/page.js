const Pages = [
    {
        header: '冒險之書',
        image: '../img/book.png',
        content: {
            row: [
                { text: '歡迎!歡迎!我尊貴的客人'},
                { text: '今日前來，所為何事？'},
                { br: true},
                { html: '古人云:<mark>「富家不用買良田，書中自有千鍾粟；安居不必架高堂，書中自有黃金屋；娶妻莫恨無良媒，書中自有顏如玉。」</mark>'},
                { br: true},
                { text: '想必貴人是想來挑戰書中的世界吧？'},
                { br: true},
                { text: '好了，請告訴我，今天您想做什麼？'},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '來問路的', 
                url: ''
            },
            {
                type: '',
                name: '來冒險的',
                url: '/page/2'
            }
        ]
    }, 
    {
        header: '啟始之門',
        image: '../img/door.png',
        content: {
            row: [
                { text: '哇哈哈哈哈，已經好久沒有客人來挑戰啦！'},
                { text: '勇者喲！'},
                { br: true},
                { html: '<mark>開啟眼前這扇大門吧！<mark>'},
                { br: true},
                { text: '前面的道路是福還是禍，我也不知道。'},
                { text: '前進吧！若是遇到危險，不妨回頭也是上策。'},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '返回', 
                url: '/page/1'
            },
            {
                type: '',
                name: '前進',
                url: '/page/3'
            }
        ]
    }, 
    {
        header: '選擇之道',
        image: '../img/arrows.png',
        content: {
            row: [
                { text: '眼前有三條道路可選，不管是那條，都藏有滿滿的冒險味。'},
                { text: '勇者喲！'},
                { br: true},
                { html: '<mark>選擇吧！<mark>'},
                { br: true},
                { text: '左邊能聽見微弱的流水聲。'},
                { text: '中間黑的什麼都看不到'},
                { text: '右邊能聞到淡淡的香味'},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '左邊', 
                url: '/page/5'
            },
            {
                type: '',
                name: '中間', 
                url: '/page/6'
            },
            {
                type: '',
                name: '右邊',
                url: '/page/7'
            },
            {
                type: '',
                name: '轉頭離開',
                url: '/page/3'
            }
        ]
    }, 
    {
        rightTitle: '',
        leftTitle: '',
        content:'',
    }, 

]


const api = [
    {
        url: '/api/Page',
        type: 'get',
        response: config => {
          return Pages
        }
    },
]

export default api;