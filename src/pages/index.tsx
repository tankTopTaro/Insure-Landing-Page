import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-white w-96 h-96 border">
        <h1 className="text-5xl font-bold text-very-dark-violet">Hello, World!</h1>
      </div>
    </>
  )
}
