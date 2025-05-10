"use client"

import { useState } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { User, Settings, LogOut, Heart, Download, Clock, ChevronRight, Bell } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export function UserMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-5 w-5 text-white" />
          <span className="sr-only">User menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 bg-slate-900 border-slate-800 text-white" sideOffset={8}>
        <div className="flex items-center gap-3 p-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <NextImage src="/placeholder.svg?height=100&width=100" alt="User Avatar" fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium">Abdullah</p>
            <p className="text-xs text-gray-400">Premium Subscriber</p>
          </div>
        </div>

        <DropdownMenuSeparator className="bg-slate-800" />

        <div className="p-2">
          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/profile">
              <User className="h-4 w-4 text-gray-400" />
              <span>Profile</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/my-list">
              <Heart className="h-4 w-4 text-gray-400" />
              <span>My List</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/downloads">
              <Download className="h-4 w-4 text-gray-400" />
              <span>Downloads</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/watch-history">
              <Clock className="h-4 w-4 text-gray-400" />
              <span>Watch History</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/notifications">
              <Bell className="h-4 w-4 text-gray-400" />
              <span>Notifications</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
            <Link href="/settings">
              <Settings className="h-4 w-4 text-gray-400" />
              <span>Settings</span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-auto" />
            </Link>
          </DropdownMenuItem>
        </div>

        <DropdownMenuSeparator className="bg-slate-800" />

        <DropdownMenuItem className="flex items-center gap-2 py-2 cursor-pointer hover:bg-slate-800">
          <LogOut className="h-4 w-4 text-gray-400" />
          <span>Sign Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
