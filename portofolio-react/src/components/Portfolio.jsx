import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'Yuk Sehat',
    desc: 'Web App untuk mengikuti pola makan sesuai tujuan naik atau turunkan berat badan.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://yuk-sehat.netlify.app',
    repo: 'https://github.com/dimasbirru/Projek-Sehat.git',
  },
  {
    title: 'Auto Generate Folder Tool',
    desc: 'Aplikasi web untuk mengotomatisasi pembuatan struktur folder tugas (ZIP) menggunakan JavaScript & JSZip.',
    tags: ['JavaScript', 'JSZip', 'Netlify'],
    live: 'https://autogeneratefolder.netlify.app/',
    repo: 'https://github.com/dimasbirru/autogeneratefolder/',
  },
  {
    title: 'New SIMAKIP Phase 2',
    desc: 'Sistem Informasi Manajemen Kinerja Inovasi Penelitian — fitur monev, alur status proposal 8 tahap, deployment ke server production.',
    tags: ['Laravel', 'MySQL', 'Blade', 'Tailwind CSS'],
    live: null,
    repo: null,
    internal: true,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Portfolio
          </h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">
            Featured projects
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex flex-col rounded-2xl p-6 transition-all hover:border-primary/20"
            >
              <h4 className="mb-2 text-lg font-semibold">{project.title}</h4>
              <p className="mb-4 flex-1 text-sm text-muted-foreground">
                {project.desc}
              </p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/80"
                  >
                    <ExternalLink size={12} />
                    Live demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-white/5"
                  >
                    <Code size={12} />
                    Repo
                  </a>
                )}
                {project.internal && (
                  <span className="inline-flex items-center rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground opacity-60">
                    Internal System
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
