// @flow
import * as React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {useEffect, useState, WheelEvent} from "react";
import {Category} from "@/components/tabs/model";

type Props = {
    className?: string;
    data?: Category[];
};



const Index = (props: Props) => {
    const {
        className,
        data = [
            {
                id: 0,
                name: "常用",
                labels: [
                    {id: 0, name: "太极", url: ""},
                    {id: 1, name: "太极", url: ""},
                    {id: 2, name: "太极", url: ""},
                    {id: 3, name: "太极", url: ""},
                    {id: 4, name: "太极", url: ""},
                    {id: 5, name: "太极", url: ""},
                    {id: 6, name: "太极", url: ""},
                ],
            }
        ],
    } = props;
    let [activeTab, setActiveTab] = React.useState(0);
    const [source, setSource] = useState(data);

    const [activeAnchor, setActiveAnchor] = useState(null);

    useEffect(() => {


    }, []);

    function zoom(event: WheelEvent) {
       // event.preventDefault();

        let nextId = activeTab
        if (event.deltaY > 0) {
            nextId = ++activeTab
            if (nextId > data.length - 1) {
                nextId = 0
            }
        } else if (event.deltaY < 0) {
            nextId = --activeTab
            if (nextId < 0) {
                nextId = data.length-1
            }
        }
        setActiveTab(nextId)
    }


    return (
        <div onWheel={zoom}>

            <Tabs value={activeTab} id={""} className={className} >
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-2 border-blue-500 shadow-none rounded-none",
                    }}
                >
                    {source.map(({name, id}) => (
                        <Tab
                            key={id}
                            value={id}
                            onClick={() => setActiveTab(id)}
                            className={activeTab === id ? "text-blue-500" : ""}
                        >
                            {name}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {source.map(({id, name, labels}) => (
                        <TabPanel key={id} value={id}>
                            <div className="grid grid-cols-2 gap-4 md:grid-cols-5 md:gap-4 ">
                                {labels.map(({name, url, id}) => (
                                    <div
                                        className={"border-2 text-center hover:bg-gray-400"}
                                        key={id}
                                    >
                                        <a
                                            href={url}
                                            target={"_blank"}
                                            className={"block text-center line-clamp-4 p-1"}
                                        >
                                            {name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default Index;
