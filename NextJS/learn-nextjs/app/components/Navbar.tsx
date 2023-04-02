import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="bg-white p-2 flex justify-between">
    <Link href="/" className="font-bold text-gray-700 text-3xl"> OpenTable </Link>
    <div>
      <div className="flex">
        <button className="bg-blue-400 text-white border p-2 rounded mr-3">
          SignIn
        </button>
        <button className="border p-1 px-4 rounded">SignUp</button>
      </div>
    </div>
  </nav>
  )
}