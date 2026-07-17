import { motion } from 'framer-motion'
import { Briefcase, Users, Palette } from 'lucide-react'

const experiences = [
  {
    icon: Briefcase,
    role: 'Backend Developer (PKL)',
    company: 'BPTI UHAMKA — Proyek New SIMAKIP Phase 2',
    period: 'Feb 2026 – Jun 2026',
    bullets: [
      'Mengembangkan fitur borang monitoring & evaluasi (monev) serta laporan akhir penelitian secara end-to-end (UI/UX di Figma, frontend Blade, backend Laravel).',
      'Mengimplementasikan alur status proposal 8 tahap (Draft → Submitted → Review Kaprodi → Review Dekan → Lolos Administrasi → Peer Review → Lolos Substansi → Diterima/Ditolak).',
      'Memperbaiki bug kritis: validasi batas kata abstrak, batas ukuran unggah dokumen, deadline submission, dan filtering data berdasarkan homebase dosen.',
      'Deployment ke server production (Laravel 12, MySQL, Vite, Tailwind CSS) bersama tim 5 programmer.',
      'Menyusun Buku Panduan Pengguna SIMAKIP & dokumentasi dari FGD bersama LPPMP UHAMKA.',
      'Predikat akhir: Sangat Baik (80/100) — Sertifikat Backend Engineer dari BPTI UHAMKA.',
    ],
  },
  {
    icon: Users,
    role: 'Anggota Divisi Media & Komunikasi',
    company: 'PK IMM FTII UHAMKA',
    period: null,
    bullets: [
      'Pembuatan dan pengelolaan konten informasi untuk media internal organisasi.',
      'Publikasi kegiatan melalui media digital dan media sosial.',
      'Kolaborasi dengan tim dalam perencanaan dan penyampaian informasi kegiatan.',
    ],
  },
  {
    icon: Palette,
    role: 'UI/UX & Frontend Design',
    company: 'GoHotel — Sistem Reservasi Hotel (Proyek Akademik)',
    period: 'Okt 2024 – Jun 2025',
    bullets: [
      'Merancang prototype antarmuka dan user flow di Figma (halaman utama, detail kamar, form reservasi) bersama 2 anggota tim.',
      'Analisis kebutuhan dan pengujian fungsional dasar.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Experience
          </h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">
            Where I&apos;ve worked
          </h3>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-4 flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <exp.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-semibold">{exp.role}</h4>
                    {exp.period && (
                      <span className="text-xs text-muted-foreground">
                        {exp.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-primary">{exp.company}</p>
                </div>
              </div>
              <ul className="ml-14 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-4 text-sm text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-primary/50"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
