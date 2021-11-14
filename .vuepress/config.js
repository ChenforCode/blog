module.exports = {
    //加载页标题内容
    "title": "",
    "description": "我从潇潇的雨幕里，遥望漉雪千山都过尽",
    "dest": "public",
    "base": "/",
    "head": [
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico"
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco",
    //导航栏
    "themeConfig": {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            //这个地方是加有大类型的doc，需要在这里注册导航
            {
                "text": "文档",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "vuepress-reco",
                        "link": "/docs/theme-reco/"
                    },
                    {
                        "text": "mydoc",
                        "link": "/docs/mydoc/"
                    }
                ]
            },
            {
                "text": "TimeLine",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "Contact",
                "icon": "reco-message",
                "items": [
                    {
                        "text": "GitHub",
                        "link": "https://github.com/ChenforCode",
                        "icon": "reco-github"
                    },
                    {
                        "text": "Gitee",
                        "link": "https://gitee.com/chenforcode",
                        "icon": "reco-mayun"
                    }
                ],
            }
        ],
        "sidebar": {
            //这里是对每一个大类型的导航，内部注册有多少篇文档，每个文档都需要注册
            "/docs/theme-reco/": [
                "theme",
                "plugin",
                "api"
            ],
            "/docs/mydoc/": [
                "doc2"
            ]

        },
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "博客"
            },
            "tag": {
                "location": 5,
                "text": "标签"
            },
        },
        "friendLink": [
            {
                "title": "pkucoder",
                "desc": "made it",
                "email": "chenforcode@stu.pku.edu.cn",
                "link": "http://www.chenforcode.cn"
            },
            {
                "title": "github",
                "desc": "github",
                "link": "https://github.com/ChenforCode"
            },
            {
                "title": "gitee",
                "desc": "gitee",
                "link": "https://gitee.com/chenforcode"
            }
        ],
        vssueConfig: {
            platform: 'github',
            owner: 'ChenforCode',
            repo: 'chenforcode-vssue',
            clientId: '490c42c831c7c1ea4508',
            clientSecret: '12b63f7bc3bc090086a12637d8978a29b289b325',
        },
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "ChenforCode",
        "authorAvatar": "/avatar.png",
        "record": "xxxx",
        "startYear": "2019"
    },
    "markdown": {
        "lineNumbers": true
    }
}
