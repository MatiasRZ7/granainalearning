"use client"
import React from "react"
import { IChannels } from "."
import { usePathname } from "next/navigation"
import { useChannelInfo } from "@/hooks/channels"
import { SIDEBAR_SETTINGS_MENU } from "@/constants/menus"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { IconRenderer } from "../icon-renderer"
import IconDropDown from "./icon-dropdown"
import { Input } from "@/components/ui/input"
import { Trash } from "lucide-react"

type Props = {
   channels: IChannels[]
   optimisticChannel:
      | {
           id: string
           name: string
           icon: string
           createdAt: Date
           groupId: string | null
        }
      | undefined
   loading: boolean
   groupid: string
   groupUserId: string
   userId: string
}

const SideBarMenu = ({
   channels,
   groupUserId,
   groupid,
   loading,
   optimisticChannel,
   userId,
}: Props) => {
   const pathname = usePathname()
   const currentPage = pathname.split("/").pop()
   const {
      channel: current,
      onEditChannel,
      channelRef,
      inputRef,
      variables,
      isPending,
      edit,
      triggerRef,
      onSetIcon,
      icon,
      onChannelDetele,
      deleteVariables,
   } = useChannelInfo()
   if (pathname.includes("settings")) {
      return (
         <div className="flex flex-col">
            {/* this function maps through the settings menu and displays the settings menu items */}
            {SIDEBAR_SETTINGS_MENU.map((item) =>
               item.integration ? (
                  userId === groupUserId && (
                     <Link
                        className={cn(
                           "flex gap-x-2 items-center font-semibold rounded-xl text-themeTextGray hover:bg-themeGray p-2",
                           currentPage === "settings"
                              ? !item.path && "text-white"
                              : currentPage === item.path && "text-white",
                        )}
                        href={`/group/${groupid}/settings/${item.path}`}
                        key={item.id}
                     >
                        {item.icon}
                        {item.label}
                     </Link>
                  )
               ) : (
                  <Link
                     className={cn(
                        "flex gap-x-2 items-center font-semibold rounded-xl text-themeTextGray hover:bg-themeGray p-2",
                        currentPage === "settings"
                           ? !item.path && "text-white"
                           : currentPage === item.path && "text-white",
                     )}
                     href={`/group/${groupid}/settings/${item.path}`}
                     key={item.id}
                  >
                     {item.icon}
                     {item.label}
                  </Link>
               ),
            )}
         </div>
      )
   }

   return (
      <div className="flex flex-col">
         {/* this function maps through the channels and displays the channels menu items */}
         {channels && channels.length > 0 ? (
            <>
               {channels.map(
                  (channel) =>
                     channel.id !== deleteVariables?.id && (
                        <Link
                           id="channel-link"
                           key={channel.id}
                           className={cn(
                              "flex justify-between hover:bg-themeGray p-2 group rounded-lg items-center",
                              channel.id === current && edit && "bg-themeGray",
                           )}
                           href={`/group/${channel.groupId}/channel/${channel.id}`}
                           {...(channel.name !== "general" &&
                              channel.name !== "announcements" && {
                                 onDoubleClick: () => onEditChannel(channel.id),
                                 ref: channelRef,
                              })}
                        >
                           <div className="flex gap-x-2 items-center">
                              {channel.id === current && edit ? (
                                 <IconDropDown
                                    ref={triggerRef}
                                    page={currentPage}
                                    onSetIcon={onSetIcon}
                                    channelid={channel.id}
                                    icon={channel.icon}
                                    currentIcon={icon}
                                 />
                              ) : (
                                 <IconRenderer
                                    icon={channel.icon}
                                    mode={
                                       currentPage === channel.id
                                          ? "LIGHT"
                                          : "DARK"
                                    }
                                 />
                              )}
                              {channel.id === current && edit ? (
                                 <Input
                                    type="text"
                                    ref={inputRef}
                                    className="bg-transparent p-0 text-lg m-0 h-full"
                                 />
                              ) : (
                                 <p
                                    className={cn(
                                       "text-lg capitalize",
                                       currentPage === channel.id
                                          ? "text-white"
                                          : "text-themeTextGray",
                                    )}
                                 >
                                    {isPending &&
                                    variables &&
                                    current === channel.id
                                       ? variables.name
                                       : channel.name}
                                 </p>
                              )}
                           </div>
                           {channel.name !== "general" &&
                              channel.name !== "announcements" &&
                              userId === groupUserId && (
                                 <Trash
                                    onClick={() => onChannelDetele(channel.id)}
                                    className="group-hover:inline hidden content-end text-themeTextGray hover:text-gray-400"
                                    size={16}
                                 />
                              )}
                        </Link>
                     ),
               )}
            </>
         ) : (
            <></>
         )}
      </div>
   )
}

export default SideBarMenu
