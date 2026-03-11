/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Figma, 
  Code2, 
  Layout, 
  Users, 
  Award, 
  ChevronRight,
  Download,
  Database,
  ShieldCheck,
  Smartphone,
  X,
  ArrowLeft
} from "lucide-react";
import { Project, Skill } from "./types";

const projects: Project[] = [
  {
    id: "dua-empat-tujuh",
    title: "Dashboard Big Data Terpadu",
    company: "PT Dua Empat Tujuh",
    role: "UI/UX Designer Intern",
    period: "Agu 2025 - Des 2025",
    description: "Merancang dashboard terpusat untuk mengelola 100+ data klien dan lisensi dalam konteks keamanan siber B2B.",
    impact: [
      "Mengembangkan antarmuka generator lisensi yang secara signifikan mempercepat proses pembuatan lisensi.",
      "Membuat 20+ wireframe dan prototipe high-fidelity untuk validasi pemangku kepentingan.",
      "Membangun sistem visual yang konsisten dengan 15+ komponen UI yang dapat digunakan kembali.",
      "Mengurangi kompleksitas navigasi melalui arsitektur informasi yang dioptimalkan."
    ],
    tags: ["Figma", "B2B", "Big Data", "Design System"]
  },
  {
    id: "jejak-patroli",
    title: "Aplikasi Jejak Patroli",
    company: "Politeknik Negeri Jember",
    role: "UI Designer & Frontend Developer",
    period: "Feb 2025 - Jun 2025",
    description: "Memimpin tim beranggotakan 5 orang untuk mengembangkan aplikasi pelacakan dan pemantauan dengan persyaratan navigasi yang kompleks.",
    impact: [
      "Menyederhanakan navigasi di 10+ halaman melalui alur pengguna yang intuitif.",
      "Mengelola 4 sprint pengembangan dengan progres dokumentasi 100%.",
      "Mencapai 90% milestone proyek yang direncanakan sesuai jadwal."
    ],
    tags: ["Team Lead", "User Flow", "Frontend", "Mobile"]
  },
  {
    id: "ud-tani-rejo",
    title: "Sistem Manajemen Pertanian",
    company: "UD Tani Rejo (PKM)",
    role: "UI Designer & Frontend Developer",
    period: "Feb 2024 - Mei 2024",
    description: "Digitalisasi proses pencatatan pertanian untuk meningkatkan efisiensi operasional bagi petani lokal.",
    impact: [
      "Meningkatkan efisiensi pencatatan sebesar 80% melalui desain berbasis prototipe.",
      "Mengembangkan antarmuka responsif yang mendukung akses multi-perangkat.",
      "Mengoptimalkan struktur input data untuk pemrosesan yang lebih cepat."
    ],
    tags: ["Responsive Design", "Agriculture Tech", "UX Research"]
  },
  {
    id: "assignme",
    title: "Manajemen Tugas ASSIGNME",
    company: "ASSIGNME",
    role: "UI Designer & Project Manager",
    period: "Sep 2023 - Des 2023",
    description: "Platform manajemen tugas yang dirancang untuk 100+ mahasiswa dan dosen universitas.",
    impact: [
      "Mengurangi keterlambatan pengumpulan tugas sebesar 40% melalui visualisasi tenggat waktu.",
      "Meningkatkan efisiensi koordinasi sebesar 30% melalui alur pengguna yang dioptimalkan.",
      "Membuat prototipe interaktif untuk validasi implementasi akhir."
    ],
    tags: ["Project Management", "EdTech", "Prototyping"]
  }
];

const skills: Skill[] = [
  {
    category: "Desain",
    items: ["User Research", "User Flow", "Wireframing", "Prototyping", "Information Architecture", "Usability Testing", "Visual Design System", "Figma"]
  },
  {
    category: "Pengembangan",
    items: ["HTML5", "CSS3", "JavaScript", "Laravel (Blade)", "Tailwind CSS"]
  },
  {
    category: "Keahlian Interpersonal",
    items: ["Problem Solving", "Komunikasi", "Kolaborasi", "Atensi Terhadap Detail", "Manajemen Waktu"]
  }
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono font-bold tracking-tighter text-xl">AS.</span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-accent transition-colors">Tentang</a>
            <a href="#work" className="hover:text-accent transition-colors">Karya</a>
            <a href="#skills" className="hover:text-accent transition-colors">Keahlian</a>
            <a href="#contact" className="hover:text-accent transition-colors">Kontak</a>
          </div>
          <a 
            href="mailto:ardiantisimanjuntak5@gmail.com"
            className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all"
          >
            Hubungi Saya
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            TERSEDIA UNTUK PELUANG BARU
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient">
            Ardianti Simanjuntak
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            UI/UX Designer dengan latar belakang Ilmu Komputer. Saya menjembatani kesenjangan antara 
            <span className="text-primary font-semibold"> sistem data yang kompleks</span> dan 
            <span className="text-primary font-semibold"> pengalaman yang berpusat pada manusia</span>. 
            Spesialisasi dalam dashboard B2B dan antarmuka teknis.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
              <Database size={16} />
              Fokus Big Data
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
              <ShieldCheck size={16} />
              Pengalaman Keamanan Siber
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-4 py-2 rounded-full border border-slate-200">
              <Code2 size={16} />
              Mampu Frontend
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-row-2 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Tentang Saya</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Saat ini sedang menempuh Diploma Teknik Informatika di Politeknik Negeri Jember (IPK 3.80/4.00). 
              Perjalanan saya dalam desain berakar pada pemahaman mendalam tentang bagaimana perangkat lunak dibangun, memungkinkan saya membuat desain yang tidak hanya indah tetapi juga layak secara teknis dan berperforma tinggi.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-slate-100 text-primary">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Pemenang Hibah Kemdikbudristek</h4>
                  <p className="text-xs text-slate-500">Menerima pendanaan untuk platform ketertelusuran beras berbasis cloud 'JejakPadi'.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="p-2 rounded-lg bg-slate-100 text-primary">
                  <Layout size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Spesialis Produk B2B</h4>
                  <p className="text-xs text-slate-500">Berpengalaman dalam merancang dashboard kompleks dan sistem manajemen lisensi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl bg-slate-100 flex items-center justify-center overflow-hidden">
               <img 
                src="https://picsum.photos/seed/design/600/600" 
                alt="Design Work" 
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-square rounded-2xl bg-slate-900 flex flex-col items-center justify-center p-6 text-white text-center">
              <span className="text-4xl font-bold mb-2">3.80</span>
              <span className="text-xs opacity-60 uppercase tracking-widest">Performa IPK</span>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold mb-2">Karya Terpilih</h2>
            <p className="text-slate-500">Kumpulan proyek di mana saya telah memberikan dampak yang terukur.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider">UI/UX</span>
            <span className="px-3 py-1 bg-slate-200 rounded-full text-[10px] font-bold uppercase tracking-wider">Frontend</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-mono text-accent font-bold uppercase tracking-widest">{project.company}</span>
                    <h3 className="text-2xl font-bold mt-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-100">{project.period}</span>
                </div>
                <p className="text-sm text-slate-600 mb-6 line-clamp-2">{project.description}</p>
                
                <div className="space-y-3 mb-8">
                  {project.impact.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <p className="text-xs text-slate-500 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Keahlian & Keterampilan</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                    {index === 0 ? <Figma size={18} /> : index === 1 ? <Code2 size={18} /> : <Users size={18} />}
                  </div>
                  <h3 className="text-lg font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm opacity-80 hover:opacity-100 hover:bg-white/10 transition-all">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-[3rem] p-12 md:p-20 border border-slate-200"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Mari bangun sesuatu <br />yang bermakna bersama.</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Saya saat ini sedang mencari peran UI/UX Designer di mana saya dapat berkontribusi pada produk digital yang berdampak.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:ardiantisimanjuntak5@gmail.com"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
            >
              <Mail size={20} />
              Email Saya
            </a>
            <a 
              href="https://www.linkedin.com/in/ardianti-simanjuntak-43a172248"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-white text-primary border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500">
            © 2026 Ardianti Simanjuntak. Dibangun dengan React & Tailwind.
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>

      {/* Project Detail Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="relative h-48 md:h-64 bg-slate-100 shrink-0">
                <img 
                  src={`https://picsum.photos/seed/${selectedProject.id}/1200/600`} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 overflow-y-auto">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                  <div>
                    <span className="text-sm font-mono text-accent font-bold uppercase tracking-widest">{selectedProject.company}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">{selectedProject.title}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-slate-400">{selectedProject.period}</p>
                    <p className="text-sm font-medium text-slate-600">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  <div className="md:col-span-2">
                    <h4 className="text-lg font-bold mb-4">Ikhtisar Proyek</h4>
                    <p className="text-slate-600 leading-relaxed mb-8">
                      {selectedProject.description}
                    </p>

                    <h4 className="text-lg font-bold mb-4">Kontribusi Utama & Dampak</h4>
                    <div className="space-y-4">
                      {selectedProject.impact.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="mt-2 h-2 w-2 rounded-full bg-accent shrink-0" />
                          <p className="text-slate-600 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold mb-4">Teknologi</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-slate-600">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                      <h5 className="font-bold text-sm mb-2">Tertarik dengan proyek ini?</h5>
                      <p className="text-xs text-slate-500 mb-4">Hubungi saya untuk mendiskusikan studi kasus lengkap dan proses desain.</p>
                      <a 
                        href="mailto:ardiantisimanjuntak5@gmail.com"
                        className="inline-flex items-center gap-2 text-accent font-bold text-sm hover:underline"
                      >
                        Kirim Pertanyaan <ChevronRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
