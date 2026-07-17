import { motion } from 'framer-motion'

const skills = [
  { name: 'PHP & Laravel (MVC, Blade, Actions)', percent: 35 },
  { name: 'JavaScript', percent: 30 },
  { name: 'HTML & CSS (Tailwind, Bootstrap)', percent: 40 },
  { name: 'MySQL', percent: 30 },
  { name: 'Git & GitHub', percent: 35 },
  { name: 'Figma (Desain UI/UX)', percent: 25 },
  { name: 'Java', percent: 20 },
  { name: 'SDLC, Agile/Scrum, QA & Perbaikan Bug', percent: 30 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Skills
          </h2>
          <h3 className="mb-8 text-3xl font-bold md:text-4xl">
            My toolkit
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">
                  {skill.percent}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
