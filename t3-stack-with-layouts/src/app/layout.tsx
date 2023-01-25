import Link from "next/link"
import "../styles/globals.css"

const btnClasses = "p-2 mx-1 text-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-700 hover:text-white rounded-md shadow-sm"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className="p-5 border shadow-sm">
          <Link href="/" className={btnClasses}>Home</Link>
          <Link href="/blog" className={btnClasses}>Blog</Link>
        </div>
        <div className="p-5">{children}</div>
      </body>
    </html>
  )
}
