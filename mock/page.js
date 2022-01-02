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
                // { avatar: { size: 300, url: './img/treasure.png'}}
                // { buttonGroup: [
                //     {
                //         type: '',
                //         name: '來問路的', 
                //         url: ''
                //     },
                //     {
                //         type: '',
                //         name: '來冒險的',
                //         url: ''
                //     }
                // ]}
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
                url: '/page/next'
            }
        ]
    }, 
    {
        rightTitle: '',
        leftTitle: '',
        content:'',
    }, 
    {
        rightTitle: '',
        leftTitle: '',
        content:'',
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