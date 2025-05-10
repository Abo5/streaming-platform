"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import NextImage from "next/image"
import { ChevronRight, Trophy, Star } from "lucide-react"

interface AwardItem {
  id: number
  title: string
  image: string
  type: "movie" | "series"
  award: string
  year: string
  rating: string
  ageRating?: string
}

interface AwardsShowcaseProps {
  title: string
  viewMoreLink: string
  items: AwardItem[]
}

export function AwardsShowcase({ title, viewMoreLink, items }: AwardsShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const rowRef = useRef<HTMLDivElement>(null)

  return (
    <div className="relative group">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-400" />
          <h2 className="text-xl font-bold tracking-wide">{title}</h2>
        </div>
        <Link href={viewMoreLink} className="text-sm text-white hover:text-gray-300 flex items-center">
          View All <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>

      <div className="relative">
        <div
          ref={rowRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-8 pt-1 px-1 -mx-1"
          style={{ scrollbarWidth: "none" }}
        >
          {items.map((item, index) => (
            <div key={item.id} className="relative flex-shrink-0 group/item" onMouseEnter={() => setActiveIndex(index)}>
              <Link href={`/${item.type}/${item.id}`}>
                <div className="relative h-[300px] w-[220px] rounded-lg overflow-hidden group-hover/item:ring-2 group-hover/item:ring-yellow-400 transition-all">
                  <NextImage
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/item:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                  {/* Award Badge */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full z-30 flex items-center gap-1 shadow-lg">
                    <Trophy className="h-3 w-3" />
                    <span>{item.award}</span>
                  </div>

                  {/* Age Rating Badge */}
                  {item.ageRating && (
                    <div className="absolute top-12 left-2 bg-black/70 text-white text-xs font-bold px-1.5 py-0.5 rounded z-30 border border-white/30">
                      {item.ageRating}
                    </div>
                  )}

                  {/* Year */}
                  <div className="absolute top-12 right-2 bg-black/60 backdrop-blur-sm rounded px-2 py-0.5 z-30">
                    <span className="text-white text-xs">{item.year}</span>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 z-30">
                    <Star className="h-4 w-4 text-yellow-400 mr-1 fill-yellow-400" />
                    <span className="text-white text-sm font-bold">{item.rating}</span>
                  </div>

                  {/* Title at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-center z-30">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                  </div>

                  {/* Shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover/item:opacity-100 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent z-20 transition-opacity duration-700 -translate-x-full group-hover/item:translate-x-full"
                    style={{ transitionProperty: "opacity, transform", transitionDuration: "0.7s" }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
