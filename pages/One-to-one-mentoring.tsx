import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function PragmatixPro() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-[#1e4976] py-4">
        <div className="container mx-auto px-4">
          <Link href="/" passHref legacyBehavior>
            <Button as="a" variant="ghost" className="text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#264B78] mb-6">One-to-One Mentoring</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
            Pragmatix Learning is excited to introduce its new one-to-one mentoring program specifically designed for freshers and job aspirants. This personalized mentoring approach connects individuals with experienced industry professionals who provide tailored guidance, insights, and support throughout the job search process. By focusing on individual needs and career aspirations, our mentors help mentees build confidence, refine their skills, and navigate the complexities of entering the job market effectively.
            </p>
            <h2 className="text-2xl font-semibold text-[#0D98B9] mb-4">Key Features:</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Personalized Coaching and Mentoring</li>
              <li>Tailor-made Action Plan Creation</li>
              <li>Resume and Interview Preparation</li>
              <li>Approachable, Friendly and Seasoned Mentors</li>
            </ul>
            <Button className="bg-[#0D98B9] text-white hover:bg-[#264B78] transition-colors">
              Enroll Now
            </Button>
          </div>
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Pragmatix Pro"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>

      <footer className="bg-[#264B78] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Pragmatix Learning. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}