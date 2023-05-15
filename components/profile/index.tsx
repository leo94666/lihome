import React, {ReactNode} from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
    CogIcon
} from "@heroicons/react/24/outline";
import {useSession} from "next-auth/react";


const profileMenuItems = [
    {
        label: "个人信息",
        icon: UserCircleIcon,
    },
    {
        label: "设置",
        icon: CogIcon,
    },
    {
        label: "登录",
        icon: PowerIcon,
    },
    {
        label: "注销",
        icon: PowerIcon,
    }
];

type ProfileMenuItems = {
    label: string,
    icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>>
}

type Props = {
    className?: string,
    onLogin?: Function,
    items?: ProfileMenuItems[]
}

export default function ProfileMenu(props: Props) {
    const { data: session, status } = useSession()
    const {className = "pt-6 pr-10", items = profileMenuItems,onLogin} = props
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => {
        setIsMenuOpen(false);
        if (onLogin){
            onLogin()
        }
    }

    return (
        <div className={`${className}`}>
            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                <MenuHandler>
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="太极"
                        className="flex items-center rounded-full lg:ml-auto border border-blue-500"
                        src={"/taiji.svg"}
                    />
                </MenuHandler>
                <MenuList className="p-1">
                    {items.map(({label, icon}, key) => {
                        const isLastItem = key === items.length - 1;

                        return (
                            <MenuItem
                                key={label}
                                onClick={closeMenu}
                                className={`flex items-center gap-2 rounded ${
                                    isLastItem
                                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                        : ""
                                }`}>
                                {React.createElement(icon, {
                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}

                                <Typography
                                    as="span"
                                    variant="small"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}>
                                    {label}
                                </Typography>
                            </MenuItem>
                        );
                    })}
                    <MenuItem
                        key={"label"}
                        onClick={closeMenu}
                        className={`flex items-center gap-2 rounded`}>
                        <Typography
                            as="span"
                            variant="small"
                            className="font-normal">
                            主题
                        </Typography>

                    </MenuItem>
                </MenuList>
            </Menu>

        </div>

    );
}

