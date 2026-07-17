import { motion } from 'framer-motion'
import { MapPin, Mail, Phone, GraduationCap } from 'lucide-react'

const info = [
  { icon: MapPin, label: 'Location', value: 'Jakarta, Indonesia' },
  { icon: Mail, label: 'Email', value: 'dimasssbirru@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+62 895-3321-71436' },
  { icon: GraduationCap, label: 'IPK', value: '3.55' },
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About
          </h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">
            Who I am
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mahasiswa Semester 6 Program Studi Sistem dan Teknologi Informasi
              UHAMKA (IPK 3.55) dengan pengalaman langsung mengembangkan fitur
              produksi pada New SIMAKIP Phase 2 selama lima bulan Praktik Kerja
              Lapangan di BPTI UHAMKA. Terbiasa membangun aplikasi web
              menggunakan Laravel, MySQL, dan Blade pada sistem berskala besar,
              mulai dari perancangan UI/UX di Figma, implementasi alur status
              multi-tahap, quality assurance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h4 className="mb-4 font-semibold">Info</h4>
            <ul className="space-y-3">
              {info.map((item) => (
                <li key={item.label} className="flex items-start gap-3 text-sm">
                  <item.icon size={16} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <span className="text-muted-foreground">{item.label}:</span>{' '}
                    <span className="font-medium">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
