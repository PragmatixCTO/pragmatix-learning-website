import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function PragmatixPro() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F4F4]">
      <header className="bg-[#1e4976] py-4">
        <div className="container mx-auto px-4">
          <Link href="/" className="inline-block">
            <Button variant="ghost" className="text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-[#264B78] mb-6">College Programs</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
            Pragmatix Learning provides colleges with essential services designed to enhance student employability and skill development. Our offerings include comprehensive placement training programs that prepare students for successful job placements, specialized workshops covering topics such as quantitative aptitude and soft skills, and tailored skill development initiatives. By focusing on industry-relevant training, we empower students to thrive in competitive job markets and ensure they are well-equipped for their future careers.
            </p>
            <h2 className="text-2xl font-semibold text-[#0D98B9] mb-4">Key Offerings:</h2>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Placement-Preparedness Program</li>
              <li>Recruitment Essentials Workshop</li>
              <li>Intensive Aptitude and Technical Training Program</li>
              <li>Mock Placement Day</li>
            </ul>
            <Link href="/contact-us" passHref legacyBehavior>
            <Button className="bg-[#0D98B9] text-white hover:bg-[#264B78] transition-colors">
              Contact us!
            </Button></Link>
          </div>
          <div>
            <Image
              src="/images/logo.jpg"
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