import NextImage from "next/image"
import Link from "next/link"
import { Play, Plus, Share2, ThumbsUp, Download, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ContentRow } from "@/components/content-row"

export default function MoviePage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch movie data based on the ID
  const movieId = params.id

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white pb-16">
      <Link href="/movies" className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm p-2 rounded-full">
        <ArrowLeft className="h-6 w-6" />
      </Link>

      <div className="relative h-[70vh] w-full">
        <NextImage
          src="/placeholder.svg?height=1080&width=1920"
          alt="Movie Banner"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="lg"
            className="rounded-full h-16 w-16 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white"
          >
            <Play className="h-8 w-8 fill-white" />
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 lg:w-1/5">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
              <NextImage src="/placeholder.svg?height=600&width=400" alt="Movie Poster" fill className="object-cover" />
            </div>
          </div>

          <div className="md:w-3/4 lg:w-4/5 space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">الرحلة إلى المستقبل</h1>

            <div className="flex flex-wrap gap-3">
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">خيال علمي</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">مغامرة</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">إثارة</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">2023</span>
              <span className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">120 دقيقة</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-white hover:bg-white/90 text-black">
                <Play className="mr-2 h-4 w-4 fill-black" /> شاهد الآن
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Plus className="mr-2 h-4 w-4" /> أضف إلى قائمتي
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <ThumbsUp className="mr-2 h-4 w-4" /> أعجبني
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Download className="mr-2 h-4 w-4" /> تحميل
              </Button>
              <Button variant="outline" className="border-white/30 backdrop-blur-sm hover:bg-white/20">
                <Share2 className="mr-2 h-4 w-4" /> مشاركة
              </Button>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">القصة</h2>
              <p className="text-gray-300">
                في عالم مستقبلي مليء بالتكنولوجيا المتقدمة، يجد بطلنا نفسه في مواجهة تحديات غير متوقعة تهدد مصير
                البشرية. بعد اكتشاف تقنية جديدة للسفر عبر الزمن، يتم تكليفه بمهمة خطيرة لإنقاذ العالم من كارثة وشيكة.
                رحلة مليئة بالإثارة والتشويق والمغامرات، حيث يواجه أعداء من المستقبل ويكتشف أسرارًا مذهلة عن ماضيه وعن
                مصير البشرية.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-xl font-semibold mb-2">طاقم العمل</h2>
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3, 4, 5].map((actor) => (
                  <div key={actor} className="text-center">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden mx-auto">
                      <NextImage
                        src={`/placeholder.svg?height=200&width=200`}
                        alt={`Actor ${actor}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-1 text-xs">اسم الممثل {actor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        <ContentRow
          title="أفلام مشابهة"
          viewMoreLink="/movies"
          items={[
            { id: 7, title: "الرحلة", image: "/placeholder.svg?height=400&width=600", type: "movie" },
            { id: 8, title: "الحلم", image: "/placeholder.svg?height=400&width=600", type: "movie" },
            { id: 9, title: "المستقبل", image: "/placeholder.svg?height=400&width=600", type: "movie" },
            { id: 10, title: "الماضي", image: "/placeholder.svg?height=400&width=600", type: "movie" },
            { id: 11, title: "الحاضر", image: "/placeholder.svg?height=400&width=600", type: "movie" },
            { id: 12, title: "الأمل", image: "/placeholder.svg?height=400&width=600", type: "movie" },
          ]}
        />
      </div>
    </div>
  )
}
