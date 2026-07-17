import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dimas. Built with{' '} and React
      </div>
    </footer>
  )
}
