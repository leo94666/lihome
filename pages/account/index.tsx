import React, {useEffect} from "react";
import {
    Button,
    Dialog,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox, Avatar,
} from "@material-tailwind/react";

type Props = {
    toggle: Boolean
}
export default function Index(props: Props) {
    const {toggle} = props
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen((cur) => !cur);

    useEffect(() => {
        handleOpen()
    }, [toggle])

    return (
        <React.Fragment>
            {/*<Button onClick={handleOpen}>Sign In</Button>*/}
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="太极"
                            className="flex items-center rounded-full h-16 w-16"
                            src={"/taiji.svg"}
                        />
                        <Typography variant="h8" color="white">
                            太极起始页
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="账号" size="lg"/>
                        <Input label="密码" size="lg"/>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleOpen} fullWidth>
                            登录
                        </Button>
                        <Typography variant="small" className="mt-6 flex justify-center">
                            没有账号?
                            <Typography
                                as="a"
                                href="#signup"
                                variant="small"
                                color="blue"
                                className="ml-1 font-bold"
                                onClick={handleOpen}
                            >
                                注册
                            </Typography>
                        </Typography>
                    </CardFooter>
                </Card>
            </Dialog>
        </React.Fragment>
    );
}