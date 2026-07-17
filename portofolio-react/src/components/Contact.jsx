import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Globe, Code } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">
            Let&apos;s work together
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            action="https://formsubmit.co/dimasssbirru@gmail.com"
            method="POST"
            className="glass space-y-4 rounded-2xl p-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="Pesan dari portofolio Dimas"
            />
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary/80"
            >
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-6"
          >
            <p className="text-muted-foreground">
              If you have a project or job opportunity, feel free to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm">dimasssbirru@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm">+62 895-3321-71436</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Location</p>
                  <p className="text-sm">Jakarta, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/dimas-birru-palgunadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-white/5"
              >
                <Globe size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/dimasbirru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-white/5"
              >
                <Code size={16} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
