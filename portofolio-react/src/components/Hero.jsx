import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background gradient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/20 blur-[128px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[128px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-12 px-6 pt-24 pb-16 md:grid-cols-2">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="text-gradient">Dimas</span>
          </h1>

          <p className="mt-4 max-w-md text-lg text-muted-foreground">
            Web Developer — Mahasiswa Sistem &amp; Teknologi Informasi UHAMKA. Suka membangun website yang clean dan fungsional.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/25"
            >
              See my work
              <ArrowDown size={16} />
            </a>
            <a
              href="CV_Dimas Birru Palgunadi.pdf"
              download
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-white/5"
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right - Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="glass glow w-full max-w-sm rounded-2xl p-8 text-center">
            <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 text-3xl font-bold text-primary">
              DP
            </div>
            <h3 className="text-lg font-semibold">Dimas Birru Palgunadi</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Web Developer
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2">
              {['HTML', 'CSS', 'JavaScript', 'Laravel'].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
