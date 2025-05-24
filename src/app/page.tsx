import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Share, Bookmark, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

const posts = [
  {
    id: 1,
    type: "framework",
    author: "React Team",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "React 18 - New Features",
    content:
      "Introducing concurrent features, automatic batching, and new hooks in React 18. The future of React development is here!",
    tags: ["React", "JavaScript", "Frontend"],
    likes: 234,
    comments: 45,
    time: "2h ago",
    trending: true,
  },
  {
    id: 2,
    type: "package",
    author: "Sarah Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Lodash vs Native JS",
    content:
      "Comparing performance and bundle size between Lodash utilities and native JavaScript methods. Results might surprise you!",
    tags: ["JavaScript", "Performance", "Utilities"],
    likes: 156,
    comments: 23,
    time: "4h ago",
    trending: false,
  },
  {
    id: 3,
    type: "profile",
    author: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Full Stack Developer Journey",
    content:
      "From learning HTML/CSS to building scalable applications with Next.js and Node.js. Here's my 3-year journey in tech.",
    tags: ["Career", "Full Stack", "Next.js"],
    likes: 89,
    comments: 12,
    time: "6h ago",
    trending: false,
  },
  {
    id: 4,
    type: "framework",
    author: "Vue Team",
    avatar: "/placeholder.svg?height=40&width=40",
    title: "Vue 3 Composition API",
    content:
      "Deep dive into Vue 3's Composition API and how it improves code organization and reusability in large applications.",
    tags: ["Vue", "JavaScript", "Frontend"],
    likes: 178,
    comments: 34,
    time: "8h ago",
    trending: true,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevHub
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Discover • Connect • Build</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Welcome Card */}
        <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Welcome to DevHub</h2>
              <p className="text-blue-100">Discover the latest in frameworks, packages, and developer stories</p>
            </div>
          </CardContent>
        </Card>

        {/* Posts */}
        {posts.map((post) => (
          <Card
            key={post.id}
            className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 ring-2 ring-gray-100 dark:ring-gray-800">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} alt={post.author} />
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-semibold">
                    {post.author.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{post.author}</h3>
                    <Badge
                      variant="secondary"
                      className={cn(
                        "text-xs font-medium",
                        post.type === "framework" && "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
                        post.type === "package" &&
                          "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
                        post.type === "profile" &&
                          "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
                      )}
                    >
                      {post.type}
                    </Badge>
                    {post.trending && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:border-orange-800"
                      >
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{post.time}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <h4 className="font-semibold mb-3 text-gray-900 dark:text-gray-100 text-lg">{post.title}</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{post.content}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {post.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {post.comments}
                  </Button>
                </div>
                <div className="flex items-center space-x-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    <Share className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
