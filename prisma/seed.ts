// @ts-ignore
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    await prisma.user.upsert({
        where:{email:"taiji@taiji.com"},
        update:{},
        create:{
            id:0,
            email:"taiji@taiji.com",
            password:"taiji@taiji.com",
            config:{
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