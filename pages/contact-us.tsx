import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function PragmatixPro() {
  return (
    <div className="flex flex-col min-h-screen bg- bg-white">
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
        <h1 className="text-4xl font-bold text-[#264B78] mb-6">Reach out to us!</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg mb-4">
              We will design and deliver training solutions tailor-made to the requirements of your institution and its students. 
            </p>
            <h2 className="text-2xl font-semibold text-[#0D98B9] mb-4">Get in touch:</h2>
            <p className="text-lg mb-4">
              Send us an email at support@pragmatixlearning.com or call us at +91 9645044777
            </p>
            
          </div>
          <div>
            <Image
              src="/images/logo.jpg?height=400&width=600"
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