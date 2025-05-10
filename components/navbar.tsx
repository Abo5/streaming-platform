"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { Search, User, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [isBrowseOpen, setIsBrowseOpen] = useState(false)
  const browseRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchResultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      // Close browse dropdown when clicking outside
      if (isBrowseOpen && browseRef.current && !browseRef.current.contains(event.target as Node)) {
        setIsBrowseOpen(false)
      }

      // Close search when clicking outside
      if (
        isSearchOpen &&
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isSearchOpen, isBrowseOpen])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search submission
    console.log("Search submitted:", searchQuery)
  }

  const browseCategories = [
    { name: "Action", href: "/category/action" },
    { name: "Comedy", href: "/category/comedy" },
    { name: "Drama", href: "/category/drama" },
    { name: "Horror", href: "/category/horror" },
    { name: "Sci-Fi", href: "/category/sci-fi" },
    { name: "Documentary", href: "/category/documentary" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-slate-900 text-white border-slate-800">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link href="/series" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  Series
                </Link>
                <Link href="/movies" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  Movies
                </Link>
                <Link href="/new" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  New & Popular
                </Link>
                <Link href="/my-list" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  My List
                </Link>
                <Link href="/browse" className="text-lg font-medium hover:text-gray-300 transition-colors">
                  Browse
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="relative h-8 w-28">
            <NextImage src="/placeholder.svg?height=32&width=112" alt="Logo" fill className="object-contain" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/series" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Series
            </Link>
            <Link href="/movies" className="text-sm font-medium hover:text-gray-300 transition-colors">
              Movies
            </Link>
            <Link href="/new" className="text-sm font-medium hover:text-gray-300 transition-colors">
              New & Popular
            </Link>
            <Link href="/my-list" className="text-sm font-medium hover:text-gray-300 transition-colors">
              My List
            </Link>

            {/* Browse dropdown */}
            <div className="relative" ref={browseRef}>
              <button
                className="text-sm font-medium hover:text-gray-300 transition-colors flex items-center"
                onClick={() => setIsBrowseOpen(!isBrowseOpen)}
              >
                Browse{" "}
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isBrowseOpen ? "rotate-180" : ""}`} />
              </button>

              {isBrowseOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-black/95 border border-white/10 rounded-sm overflow-hidden z-50">
                  <div className="py-2">
                    <Link href="/browse" className="block px-4 py-2 text-sm hover:bg-white/10">
                      All Categories
                    </Link>
                    <hr className="border-white/10 my-1" />
                    {browseCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.href}
                        className="block px-4 py-2 text-sm hover:bg-white/10"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <form onSubmit={handleSearchSubmit}>
              {isSearchOpen ? (
                <div className="relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Titles, people, genres"
                    className="bg-black/80 border border-white/20 rounded-sm outline-none text-sm py-1 px-8 w-40 md:w-64"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    autoFocus
                  />
                  <Search className="h-4 w-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400 hover:text-white"
                    onClick={() => {
                      setIsSearchOpen(false)
                      setSearchQuery("")
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 rounded-full"
                  onClick={() => setIsSearchOpen(true)}
                  type="button"
                >
                  <Search className="h-5 w-5" />
                </Button>
              )}
            </form>

            {isSearchOpen && searchQuery.length > 0 && (
              <div
                ref={searchResultsRef}
                className="absolute top-full right-0 mt-2 w-[300px] md:w-[400px] bg-black/95 border border-white/10 rounded-sm shadow-lg z-50"
              >
                {/* Search results would go here */}
                <div className="p-4">
                  <p className="text-sm text-gray-400">Search results for "{searchQuery}"</p>
                  <div className="mt-2 space-y-2">
                    {/* Mock search results */}
                    <p className="text-sm">No results found. Try a different search.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User */}
          <div className="relative group">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 rounded-sm">
              <div className="h-7 w-7 rounded-sm overflow-hidden">
                <NextImage
                  src="/placeholder.svg?height=28&width=28"
                  alt="User"
                  width={28}
                  height={28}
                  className="object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Button>

            {/* Dropdown menu */}
            <div className="absolute right-0 top-full mt-1 w-48 bg-black/95 border border-white/10 rounded-sm overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-2">
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-white/10">
                  <NextImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Profile 1"
                    width={32}
                    height={32}
                    className="rounded-sm"
                  />
                  <span className="text-sm">User 1</span>
                </Link>
                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-white/10">
                  <NextImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="Profile 2"
                    width={32}
                    height={32}
                    className="rounded-sm"
                  />
                  <span className="text-sm">User 2</span>
                </Link>
                <Link href="/manage-profiles" className="flex items-center gap-2 px-4 py-2 hover:bg-white/10">
                  <User className="h-4 w-4" />
                  <span className="text-sm">Manage Profiles</span>
                </Link>
                <hr className="border-white/10 my-1" />
                <Link href="/account" className="block px-4 py-2 text-sm hover:bg-white/10">
                  Account
                </Link>
                <Link href="/help" className="block px-4 py-2 text-sm hover:bg-white/10">
                  Help Center
                </Link>
                <Link href="/signout" className="block px-4 py-2 text-sm hover:bg-white/10">
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
