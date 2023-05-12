import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {


    await prisma.category.upsert({
        where: {name: "开发"},
        update: {},
        create: {
            name: "开发",
            labels: {
                create: [
                    {
                        name: 'Github',
                        url: 'https://github.com/',
                    },
                    {
                        name: 'Gitee',
                        url: 'https://gitee.com/',
                    },
                    {
                        name: '掘金',
                        url: 'https://juejin.cn/',
                    },
                    {
                        name: 'CSDN',
                        url: 'https://www.csdn.net',
                    }, {
                        name: '简书',
                        url: 'https://www.jianshu.com/',
                    }
                ]
            }
        }
    })

    await prisma.category.upsert({
        where: {name: "商业"},
        update: {},
        create: {
            name: "商业",
            labels: {
                create: [
                    {
                        name: '阿里巴巴',
                        url: 'https://alibaba.com.cn/',
                    },
                    {
                        name: '淘宝',
                        url: 'https://alibaba.com.cn/',
                    }, {
                        name: '天猫',
                        url: 'https://alibaba.com.cn/',
                    }, {
                        name: '京东',
                        url: 'https://alibaba.com.cn/',
                    }, {
                        name: '抖音商城',
                        url: 'https://alibaba.com.cn/',
                    }
                ]
            }
        }
    })

    await prisma.category.upsert({
        where: {name: "咨询"},
        update: {},
        create: {
            name: "咨询",
            labels: {
                create: [
                    {
                        name: '查策网',
                        url: '',
                    },
                    {
                        name: '全国标准网',
                        url: '',
                    },
                    {
                        name: '中国知网',
                        url: '',
                    }
                ]
            }
        }
    })

    await prisma.category.upsert({
        where: {name: "工具"},
        update: {},
        create: {
            name: "工具",
            labels: {
                create: [
                    {
                        name: 'Github',
                        url: '',
                    }
                ]
            }
        }
    })

    await prisma.category.upsert({
        where: {name: "设计"},
        update: {},
        create: {
            name: "设计",
            labels: {
                create: [
                    {
                        name: 'Github',
                        url: '',
                    }
                ]
            }
        }
    })

    await prisma.category.upsert({
        where: {name: "学习"},
        update: {},
        create: {
            name: "学习",
            labels: {
                create: [
                    {
                        name: 'Github',
                        url: '',
                    }
                ]
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