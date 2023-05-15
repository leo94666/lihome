import * as React from 'react';


type Props = {
    className?: string
};
export const Index = (props: Props) => {

    return (
        <div className="min-h-full grid grid-cols-1 gap-5">
            <div className="theme-lignt p-10 bg-base">
                <h2 className="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
                <ul className="space-y-10">
                    <li>
                        <a>
                            <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
                                <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
                                    <div className="flex flex-row justify-between">
                                        <span>userName</span>
                                        <span className="space-x-1">
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">css</span>
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">tailwind</span>
                </span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                                        <span className="text-muted">2020-06-08</span>
                                    </div>
                                    <p className="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
                                </div>
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="theme-dark p-10 bg-base">
                <h2 className="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
                <ul className="space-y-10">
                    <li>
                        <a>
                            <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
                                <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
                                    <div className="flex flex-row justify-between">
                                        <span>userName</span>
                                        <span className="space-x-1">
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">css</span>
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">tailwind</span>
                </span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                                        <span className="text-muted">2020-06-08</span>
                                    </div>
                                    <p className="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
                                </div>
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="theme-solar p-10 bg-base">
                <h2 className="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
                <ul className="space-y-10">
                    <li>
                        <a>
                            <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
                                <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
                                    <div className="flex flex-row justify-between">
                                        <span>userName</span>
                                        <span className="space-x-1">
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">css</span>
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">tailwind</span>
                </span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                                        <span className="text-muted">2020-06-08</span>
                                    </div>
                                    <p className="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
                                </div>
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="theme-evergreen p-10 bg-base">
                <h2 className="mb-6 text-3xl font-semibold text-left text-primary">最近文章</h2>
                <ul className="space-y-10">
                    <li>
                        <a>
                            <article className="relative flex items-center transition-transform transform group hover:-translate-x-2">
                                <div className="flex flex-col flex-grow py-8 space-y-4 text-base rounded px-8 shadow-md bg-off-base">
                                    <div className="flex flex-row justify-between">
                                        <span>userName</span>
                                        <span className="space-x-1">
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">css</span>
                  <span className="bg-base px-2 py-1 rounded hover:bg-secondary hover:text-primary cursor-pointer">tailwind</span>
                </span>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h3 className="text-xl font-bold">使用 CSS variables 和Tailwind css实现主题换肤</h3>
                                        <span className="text-muted">2020-06-08</span>
                                    </div>
                                    <p className="max-w-3xl leading-8 text-muted">根据Tailwind Labs的[换肤视频]，手动实践。</p>
                                </div>
                            </article>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Index