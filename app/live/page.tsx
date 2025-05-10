import { Navbar } from "@/components/navbar"
import { ContentRow } from "@/components/content-row"

export default function LivePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-slate-950 text-white">
      <Navbar />

      <main className="pt-24 px-4 md:px-8 pb-16 space-y-10">
        <h1 className="text-3xl font-bold">البث المباشر</h1>

        <ContentRow
          title="بث مباشر الآن"
          viewMoreLink="/live/now"
          items={[
            {
              id: 13,
              title: "مباراة كرة القدم",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: true,
            },
            { id: 14, title: "حفل موسيقي", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            {
              id: 15,
              title: "برنامج حواري",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: true,
            },
            { id: 16, title: "مؤتمر تقني", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            { id: 17, title: "عرض أزياء", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            {
              id: 18,
              title: "مهرجان سينمائي",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: true,
            },
          ]}
        />

        <ContentRow
          title="بث مباشر قادم"
          viewMoreLink="/live/upcoming"
          items={[
            {
              id: 19,
              title: "مباراة كرة السلة",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            { id: 20, title: "حفل جوائز", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: false },
            {
              id: 21,
              title: "مؤتمر صحفي",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            {
              id: 22,
              title: "مسابقة غنائية",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            {
              id: 23,
              title: "مناظرة سياسية",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            { id: 24, title: "عرض مسرحي", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: false },
          ]}
        />

        <ContentRow
          title="بث مباشر رياضي"
          viewMoreLink="/live/sports"
          items={[
            {
              id: 25,
              title: "مباراة كرة القدم",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: true,
            },
            {
              id: 26,
              title: "مباراة كرة السلة",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            {
              id: 27,
              title: "سباق سيارات",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: true,
            },
            {
              id: 28,
              title: "مباراة تنس",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            { id: 29, title: "مصارعة", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            { id: 30, title: "سباحة", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: false },
          ]}
        />

        <ContentRow
          title="بث مباشر ترفيهي"
          viewMoreLink="/live/entertainment"
          items={[
            { id: 31, title: "حفل موسيقي", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            {
              id: 32,
              title: "برنامج مسابقات",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            { id: 33, title: "برنامج طبخ", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            {
              id: 34,
              title: "برنامج واقعي",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
            { id: 35, title: "عرض كوميدي", image: "/placeholder.svg?height=400&width=600", type: "live", isLive: true },
            {
              id: 36,
              title: "برنامج حواري",
              image: "/placeholder.svg?height=400&width=600",
              type: "live",
              isLive: false,
            },
          ]}
        />
      </main>
    </div>
  )
}
