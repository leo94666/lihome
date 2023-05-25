// @ts-ignore
import { PrismaClient } from '@prisma/client'
import { update } from 'lodash'

const prisma = new PrismaClient()

async function main() {

    await prisma.user.upsert({
        where: { email: "taiji@taiji.com" },
        update: {
            
        },
        create: {
            id: 0,
            email: "taiji@taiji.com",
            password: "taiji@taiji.com",
            config: {
                create: {
                    category: {
                        create: [
                            {
                                name: '首页',
                                labels: {
                                    create: [
                                        {
                                            name: "Github",
                                            url: "https://github.com/"
                                        },
                                        {
                                            name: "知乎",
                                            url: "https://www.zhihu.com/"
                                        }
                                    ]
                                }
                            },
                            {
                                name: '开发',
                                labels: {
                                    create: [
                                        {
                                            name: "Github",
                                            url: "https://github.com/"
                                        },
                                        {
                                            name: "Gitee",
                                            url: "https://gitee.com/"
                                        }
                                    ]
                                }
                            },
                            {
                                name: '娱乐',
                                labels: {
                                    create: [
                                        {
                                            name: "爱奇艺",
                                            url: "https://www.iqiyi.com/"
                                        },
                                        {
                                            name: "优酷TV",
                                            url: "https://www.youku.com/"
                                        },
                                        {
                                            name: "芒果TV",
                                            url: "https://www.mgtv.com/"
                                        },
                                        {
                                            name: "腾讯视频",
                                            url: "https://v.qq.com/"
                                        },
                                        {
                                            name: "哔哩哔哩",
                                            url: "https://www.bilibili.com/"
                                        },
                                        {
                                            name: "YoutuBe",
                                            url: "https://www.youtube.com/"
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            }
        }
    })

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })