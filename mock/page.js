const Pages = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
                url: '/page/4'
            },
            {
                type: '',
                name: '中間', 
                url: '/page/5'
            },
            {
                type: '',
                name: '右邊',
                url: '/page/6'
            },
            {
                type: '',
                name: '轉頭離開',
                url: '/page/2'
            }
        ]
    }, 
    {
        id: 4,
        header: '遭遇強敵',
        image: '../img/monster.png',
        content: {
            row: [
                { text: '邁開腳步前進，隨著腳步向前，水聲漸漸變的清晰'},
                { br: true},
                { text: '約莫半時，前方出現一個小水池'},
                { text: '當你向前查看水池的時候，突然間，從池子內跳出一隻怪物向你攻擊'},
                { br: true},
                { text: '勇者喲！'},
                { br: true},
                { html: '<mark>選擇吧！<mark>'},
                { br: true},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '攻擊', 
                url: '/page/5'
            },
            {
                type: '',
                name: '逃走', 
                url: '/page/3'
            },
        ]
    }, 
    {
        id: 5,
        header: '黑暗侵襲',
        image: '../img/way.png',
        content: {
            row: [
                { text: '摸著牆邊前進，隨著你的勇氣向前'},
                { br: true},
                { text: '隨著身後的房間已經遠離，四處已經看不見任何東西'},
                { text: '鼓氣勇氣向前吧！'},
                { br: true},
                { text: '勇者喲！'},
                { br: true},
                { html: '<mark>選擇吧！<mark>'},
                { br: true},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '前進', 
                url: '/page/5'
            },
            {
                type: '',
                name: '逃走', 
                url: '/page/3'
            },
        ]
    },
    {
        id: 6,
        header: '道具商人',
        image: '../img/merchant.png',
        content: {
            row: [
                { text: '兩側牆上掛著明亮的燈，往這走看來是不錯選擇'},
                { text: '隨著香氣越來越濃，前方漸漸可以看到一間小屋'},
                { br: true},
                { html: '小屋上掛著<mark>西螺肉鬆<mark>字樣，看來是間道具商店'},
                { br: true},
                { text: '勇者喲！'},
                { br: true},
                { html: '<mark>選擇吧！<mark>'},
                { br: true},
            ]
        },
        footer: '',
        action:[
            {
                type: '',
                name: '進入', 
                url: '/page/5'
            },
            {
                type: '',
                name: '離開', 
                url: '/page/3'
            },
        ]
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