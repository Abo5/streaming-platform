"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Bell, X, Settings } from "lucide-react"

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface Notification {
  id: number
  title: string
  message: string
  image?: string
  link: string
  time: string
  isNew: boolean
}

// Mock notifications data
const notifications: Notification[] = [
  {
    id: 1,
    title: "New Release",
    message: "Black Falcon is now available to watch",
    image: "/placeholder.svg?height=100&width=100",
    link: "/movie/101",
    time: "Just now",
    isNew: true,
  },
  {
    id: 2,
    title: "New Episode",
    message: "Family House S2E5 is now available",
    image: "/placeholder.svg?height=100&width=100",
    link: "/series/201",
    time: "2 hours ago",
    isNew: true,
  },
  {
    id: 3,
    title: "Coming Soon",
    message: "The Last Knight will be available next week",
    image: "/placeholder.svg?height=100&width=100",
    link: "/movie/103",
    time: "Yesterday",
    isNew: false,
  },
  {
    id: 4,
    title: "Recommendation",
    message: "Based on your watchlist: Desert Road",
    image: "/placeholder.svg?height=100&width=100",
    link: "/movie/102",
    time: "2 days ago",
    isNew: false,
  },
]

export function NotificationMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeNotifications, setActiveNotifications] = useState<Notification[]>(notifications)

  const hasNewNotifications = activeNotifications.some((notification) => notification.isNew)

  const dismissNotification = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setActiveNotifications(activeNotifications.filter((notification) => notification.id !== id))
  }

  const markAllAsRead = () => {
    setActiveNotifications(
      activeNotifications.map((notification) => ({
        ...notification,
        isNew: false,
      })),
    )
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-white" />
          {hasNewNotifications && <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>}
          <span className="sr-only">Notifications</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-80 bg-slate-900 border-slate-800 text-white max-h-[80vh] overflow-hidden flex flex-col"
        sideOffset={8}
      >
        <div className="flex items-center justify-between p-3 border-b border-slate-800">
          <h3 className="font-medium">Notifications</h3>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs hover:bg-slate-800" onClick={markAllAsRead}>
              Mark all as read
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-slate-800">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="overflow-y-auto flex-grow">
          {activeNotifications.length === 0 ? (
            <div className="p-6 text-center text-gray-400">
              <p>No notifications</p>
            </div>
          ) : (
            activeNotifications.map((notification) => (
              <Link
                key={notification.id}
                href={notification.link}
                className={`block p-3 hover:bg-slate-800 border-b border-slate-800 transition-colors ${notification.isNew ? "bg-slate-800/50" : ""}`}
                onClick={() => setIsOpen(false)}
              >
                <div className="flex gap-3">
                  {notification.image && (
                    <div className="relative h-12 w-12 flex-shrink-0 rounded overflow-hidden">
                      <NextImage src={notification.image} alt={notification.title} fill className="object-cover" />
                    </div>
                  )}
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-medium text-sm">{notification.title}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5 -mt-1 -mr-1 hover:bg-slate-700"
                        onClick={(e) => dismissNotification(notification.id, e)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Dismiss</span>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-2">{notification.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                  </div>
                </div>
                {notification.isNew && (
                  <span className="block h-2 w-2 rounded-full bg-purple-500 absolute top-1/2 left-1 -translate-y-1/2"></span>
                )}
              </Link>
            ))
          )}
        </div>

        <div className="p-2 border-t border-slate-800">
          <Button variant="ghost" className="w-full justify-center hover:bg-slate-800" asChild>
            <Link href="/notifications">View all notifications</Link>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
