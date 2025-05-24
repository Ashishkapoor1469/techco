import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, MessageCircle, Share, Users, Code, Package, MapPin, Calendar, ExternalLink } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const userPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    content:
      "Just published a comprehensive guide on building scalable React applications with proper state management and component architecture.",
    tags: ["React", "Architecture", "State Management"],
    likes: 89,
    comments: 12,
    time: "2 days ago",
  },
  {
    id: 2,
    title: "My Experience with Next.js 14",
    content:
      "After using Next.js 14 for 6 months in production, here are my thoughts on the new App Router and Server Components.",
    tags: ["Next.js", "Experience", "Review"],
    likes: 156,
    comments: 23,
    time: "1 week ago",
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    content:
      "Sharing some TypeScript best practices I've learned over the years that have helped me write better, more maintainable code.",
    tags: ["TypeScript", "Best Practices", "Tips"],
    likes: 234,
    comments: 45,
    time: "2 weeks ago",
  },
]

const userFrameworks = [
  { name: "React", level: "Expert", years: 4, color: "blue" },
  { name: "Next.js", level: "Advanced", years: 3, color: "purple" },
  { name: "Vue.js", level: "Intermediate", years: 2, color: "green" },
  { name: "Node.js", level: "Advanced", years: 3, color: "orange" },
]

const userPackages = [
  { name: "react-query", usage: "Daily", rating: 5, color: "red" },
  { name: "tailwindcss", usage: "Daily", rating: 5, color: "blue" },
  { name: "framer-motion", usage: "Weekly", rating: 4, color: "pink" },
  { name: "zustand", usage: "Daily", rating: 5, color: "green" },
]

export default function ProfilePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Profile
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Your developer journey</p>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Profile Header */}
        <Card className="mb-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 shadow-xl border-0">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24 ring-4 ring-white dark:ring-gray-700 shadow-xl">
                <AvatarImage
                  src="/placeholder.svg?height=96&width=96"
                  alt="John Doe"
                  className="object-cover rounded-full"
                />
                <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                  JD
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-1">John Doe</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-3">Full Stack Developer & Open Source Enthusiast</p>

                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                    <MapPin className="w-4 h-4 mr-1" />
                    San Francisco, CA
                  </span>
                  <span className="flex items-center bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg">
                    <Calendar className="w-4 h-4 mr-1" />
                    Joined March 2021
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 shadow-lg">
                    <div className="font-bold text-2xl text-blue-600 dark:text-blue-400">127</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">Posts</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 shadow-lg">
                    <div className="font-bold text-2xl text-green-600 dark:text-green-400">2.4k</div>
                    <div className="text-sm text-green-600 dark:text-green-400 font-medium">Followers</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 shadow-lg">
                    <div className="font-bold text-2xl text-purple-600 dark:text-purple-400">892</div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 font-medium">Following</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    <Users className="w-4 h-4 mr-2" />
                    Follow
                  </Button>
                  <Button
                    variant="outline"
                    className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-900 shadow-lg border-0 p-1">
            <TabsTrigger
              value="posts"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 rounded-lg font-medium"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="frameworks"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 rounded-lg font-medium"
            >
              Frameworks
            </TabsTrigger>
            <TabsTrigger
              value="packages"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200 rounded-lg font-medium"
            >
              Packages
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="space-y-4 mt-6">
            {userPosts.map((post) => (
              <Card
                key={post.id}
                className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
              >
                <CardHeader className="pb-3">
                  <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{post.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.time}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{post.content}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-gray-200 dark:border-gray-700">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center space-x-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                      >
                        <Heart className="w-4 h-4 mr-1" />
                        {post.likes}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        {post.comments}
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                    >
                      <Share className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {userFrameworks.map((framework) => (
                <Card
                  key={framework.name}
                  className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Code className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{framework.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{framework.years} years experience</p>
                        </div>
                      </div>
                      <Badge
                        className={
                          framework.level === "Expert"
                            ? "bg-green-500 text-white"
                            : framework.level === "Advanced"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-500 text-white"
                        }
                      >
                        {framework.level}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-4 mt-6">
            <div className="grid gap-4 md:grid-cols-2">
              {userPackages.map((pkg) => (
                <Card
                  key={pkg.name}
                  className="shadow-lg hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-900/50"
                >
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{pkg.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Used {pkg.usage.toLowerCase()}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-lg ${i < pkg.rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
