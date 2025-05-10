import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Browse | Stream+",
  description: "Browse all content on Stream+",
}

interface Category {
  id: string
  name: string
  imageUrl: string
  count: number
}

export default function BrowsePage() {
  // Mock data for categories
  const categories: Category[] = [
    {
      id: "action",
      name: "Action",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 245,
    },
    {
      id: "comedy",
      name: "Comedy",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 189,
    },
    {
      id: "drama",
      name: "Drama",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 327,
    },
    {
      id: "horror",
      name: "Horror",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 156,
    },
    {
      id: "sci-fi",
      name: "Sci-Fi",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 203,
    },
    {
      id: "fantasy",
      name: "Fantasy",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 178,
    },
    {
      id: "romance",
      name: "Romance",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 142,
    },
    {
      id: "thriller",
      name: "Thriller",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 198,
    },
    {
      id: "animation",
      name: "Animation",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 112,
    },
    {
      id: "documentary",
      name: "Documentary",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 167,
    },
    {
      id: "crime",
      name: "Crime",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 183,
    },
    {
      id: "mystery",
      name: "Mystery",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 145,
    },
    {
      id: "adventure",
      name: "Adventure",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 176,
    },
    {
      id: "family",
      name: "Family",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 128,
    },
    {
      id: "history",
      name: "History",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 94,
    },
    {
      id: "war",
      name: "War",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 87,
    },
    {
      id: "music",
      name: "Music",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 76,
    },
    {
      id: "western",
      name: "Western",
      imageUrl: "/placeholder.svg?height=400&width=600",
      count: 53,
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <h1 className="text-3xl font-bold mb-8 animate-fade-in">Browse by Category</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                href={`/category/${category.id}`}
                className="group relative overflow-hidden rounded-md transition-transform duration-300 hover:scale-105 hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={category.imageUrl || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-slate-300">{category.count} titles</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 animate-fade-in">Browse by Collection</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Link
                href="/collection/award-winners"
                className="group relative overflow-hidden rounded-md aspect-video transition-transform duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Award Winners"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-2xl mb-2">Award Winners</h3>
                  <p className="text-slate-300">The most acclaimed movies and shows of all time</p>
                </div>
              </Link>

              <Link
                href="/collection/saudi-originals"
                className="group relative overflow-hidden rounded-md aspect-video transition-transform duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Saudi Originals"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-2xl mb-2">Saudi Originals</h3>
                  <p className="text-slate-300">Exclusive content produced in Saudi Arabia</p>
                </div>
              </Link>

              <Link
                href="/collection/classics"
                className="group relative overflow-hidden rounded-md aspect-video transition-transform duration-300 hover:scale-[1.02] animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Classics"
                  fill
                  className="object-cover brightness-75 group-hover:brightness-50 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-bold text-2xl mb-2">Classics</h3>
                  <p className="text-slate-300">Timeless movies and shows that defined generations</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
