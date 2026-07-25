"use client"

import Image from "next/image"
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator } from "@/components/ui"
import { type LucideIcon } from "lucide-react"

export default function NavMain({
    items,
}: {
    items: {
        title: string
        url: string
        icon?: LucideIcon
        isActive?: boolean
        items?: {
            title: string
            url: string
        }[]
    }[]
}) {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>뮤지엄 365</SidebarGroupLabel>
            <SidebarMenu className="gap-2">
                <SidebarMenuItem>
                    <SidebarMenuButton
                        tooltip="로비"
                        className="flex min-h-9 min-w-9 cursor-pointer items-center bg-neutral-100 duration-200 ease-linear hover:bg-neutral-200/50"
                    >
                        <Image src={"/icons/home.svg"} alt="home" width={20} height={20} />
                        <span className="mt-0.5 font-medium">로비</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        tooltip="뮤지엄 365"
                        className="flex min-h-9 min-w-9 cursor-pointer items-center bg-neutral-100 duration-200 ease-linear hover:bg-neutral-200/50"
                    >
                        <Image src={"/icons/read.svg"} alt="home" width={20} height={20} />
                        <span className="mt-0.5 font-medium">뮤지엄 365</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarSeparator className="my-1" />
                <SidebarMenuItem>
                    <SidebarMenuButton
                        tooltip="나의 발자취"
                        className="flex min-h-9 min-w-9 cursor-pointer items-center bg-neutral-100 duration-200 ease-linear hover:bg-neutral-200/50"
                    >
                        <Image src={"/icons/earth.svg"} alt="home" width={20} height={20} />
                        <span className="mt-0.5 font-medium">모두의 타임라인</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton
                        tooltip="창작 스튜디오"
                        className="flex min-h-9 min-w-9 cursor-pointer items-center bg-neutral-100 duration-200 ease-linear hover:bg-neutral-200/50"
                    >
                        <Image src={"/icons/input.svg"} alt="home" width={20} height={20} />
                        <span className="mt-0.5 font-medium">창작 스튜디오</span>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
        </SidebarGroup>
    )
}
