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
  ArrowLeft,
  Search,
  PenTool,
  Lightbulb,
  Cpu,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { Project, Skill } from "./types";

const projects: Project[] = [
  {
    id: "dua-empat-tujuh",
    title: "Perancangan UI Unified Dashboard & License Generator",
    company: "PT Dua Empat Tujuh (Solusi247)",
    role: "UI/UX Designer Intern",
    period: "Agu 2025 - Des 2025",
    description: "Perancangan antarmuka pengguna untuk pengelolaan data klien dan lisensi produk keamanan siber secara terpusat dan terintegrasi.",
    impact: [
      "Meningkatkan kemudahan akses dan pengelolaan data pemasaran serta manajemen lisensi secara efisien dan aman.",
      "Menghasilkan prototipe yang sesuai dengan prinsip keamanan siber dan kebutuhan spesifik pengguna.",
      "Unified dashboard menyediakan tampilan data yang jelas dan interaktif untuk pemantauan real-time.",
      "Generator lisensi memastikan keamanan maksimal dalam distribusi lisensi produk keamanan siber."
    ],
    tags: ["Figma", "Cyber Security", "Big Data", "Design System"],
    platform: "Web Dashboard",
    tools: ["Figma"],
    problem: "Permintaan solusi keamanan siber yang andal semakin tinggi, namun pengelolaan lisensi dan data klien yang terpisah menyulitkan pemantauan penggunaan, status klien, dan performa penjualan secara efisien.",
    goal: "Mendesain Unified Dashboard dan License Generator yang efektif untuk mempermudah pemantauan, pengelolaan data terintegrasi, dan distribusi lisensi yang aman.",
    research: [
      { title: "Design Thinking", desc: "Menerapkan metode Design Thinking (Empathize, Define, Ideate, Prototype, Test) untuk solusi yang user-centric." },
      { title: "Stakeholder Discussion", desc: "Diskusi rutin dengan pembimbing lapangan dan tim pengembang untuk menyelaraskan kebutuhan bisnis." },
      { title: "Workflow Analysis", desc: "Menganalisis proses pengelolaan lisensi dan pemantauan ancaman siber yang ada untuk efisiensi." }
    ],
    mainFeatures: ["Unified Dashboard", "License Generator", "Threat Intelligence", "CVE Database", "Client Management", "Support Ticket System"],
    userFlow: ["Login", "Dashboard Overview", "Client Management", "Generate License", "Download / Kirim ke Klien"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "SOC Unified Dashboard", desc: "Pusat pemantauan aktivitas keamanan siber real-time dengan visualisasi Alert Volume Trend, Severity Breakdown, dan Quick IP Scoring dalam tema gelap yang intuitif.", image: "https://picsum.photos/seed/security-dashboard-1/1200/800" },
      { title: "Threat Intelligence & CVE", desc: "Penyajian data indikator ancaman (IOCs) dan database kerentanan (CVE) yang terstruktur.", image: "https://picsum.photos/seed/security-data-2/1200/800" },
      { title: "License Management", desc: "Sistem pengelolaan data klien dan status lisensi (Active, Expired, Trial) secara menyeluruh.", image: "https://picsum.photos/seed/admin-panel-3/1200/800" },
      { title: "Support System", desc: "Manajemen tiket dukungan dan kategori untuk penanganan masalah yang sistematis.", image: "https://picsum.photos/seed/it-support-4/1200/800" }
    ],
    designSystem: {
      colors: [
        { name: "Accent (Red)", hex: "#ef4136" },
        { name: "Primary (Dark Navy)", hex: "#02353d" },
        { name: "Secondary (Dark Teal)", hex: "#0d6176" },
        { name: "Highlight (Light Blue)", hex: "#48acc5" },
        { name: "Dark (Black)", hex: "#231f20" },
        { name: "Light (Off-white)", hex: "#efefef" }
      ],
      typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
      components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    }
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
    <div className="min-h-screen grainy-bg">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 glass rounded-2xl px-6 h-16 flex items-center justify-between">
        <span className="font-display font-black tracking-tighter text-2xl bg-primary text-white px-2 py-0.5 rounded">AS.</span>
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <a href="#about" className="hover:text-accent transition-colors">Tentang</a>
          <a href="#work" className="hover:text-accent transition-colors">Karya</a>
          <a href="#process" className="hover:text-accent transition-colors">Proses</a>
          <a href="#skills" className="hover:text-accent transition-colors">Keahlian</a>
        </div>
        <a 
          href="mailto:ardiantisimanjuntak5@gmail.com"
          className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          Hubungi
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 px-6 md:px-12 lg:px-12 max-w-7xl mx-auto grid-bg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl relative"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[10px] font-black tracking-widest mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            OPEN FOR OPPORTUNITIES
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            <span className="text-gradient">Designing</span> <br />
            <span className="text-slate-400">Data-Driven</span> <br />
            <span className="text-gradient">Experiences.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
            Saya Ardianti, UI/UX Designer yang menjembatani <span className="text-primary underline decoration-accent/30 decoration-4 underline-offset-4">sistem data kompleks</span> dengan pengalaman yang manusiawi.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#work" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:translate-y-[-4px] transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
              Lihat Karya <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                  <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="pl-6 text-sm font-bold text-slate-500">
                10+ Proyek Selesai
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section - Bento Style */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-black">Tentang Saya</h2>
            <p className="text-slate-500 max-w-md text-right hidden md:block">Perpaduan antara logika pemrograman dan estetika desain.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
            {/* Main Bio */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col justify-between group hover:border-accent/30 transition-colors">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Latar Belakang Teknik</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Mahasiswa Teknik Informatika di Politeknik Negeri Jember (IPK 3.80). Saya tidak hanya merancang antarmuka; saya memahami bagaimana data mengalir di baliknya.
                </p>
              </div>
              <div className="pt-8 flex gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
                  <p className="text-3xl font-black text-primary">3.80</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IPK Kumulatif</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
                  <p className="text-3xl font-black text-primary">2+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tahun Desain</p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                <Award size={120} />
              </div>
              <div className="relative z-10">
                <div className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-[10px] font-black mb-4">PRESTASI</div>
                <h3 className="text-2xl font-bold mb-2">Hibah Kemdikbudristek</h3>
                <p className="text-slate-400">Menerima pendanaan untuk platform 'JejakPadi', sistem ketertelusuran beras berbasis cloud.</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="bg-accent rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
              <Layout size={32} />
              <div>
                <h3 className="text-xl font-bold mb-1">B2B Expert</h3>
                <p className="text-white/80 text-sm">Spesialis Dashboard & Sistem Kompleks.</p>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="bg-slate-200 rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/ardianti/600/600" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Proses Desain</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Bagaimana saya mengubah masalah kompleks menjadi solusi yang intuitif.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { icon: <Search />, title: "Empathize", desc: "Riset pengguna & observasi." },
              { icon: <PenTool />, title: "Define", desc: "Analisis masalah & user flow." },
              { icon: <Lightbulb />, title: "Ideate", desc: "Brainstorming & wireframing." },
              { icon: <Cpu />, title: "Prototype", desc: "High-fidelity & interaksi." },
              { icon: <CheckCircle2 />, title: "Test", desc: "Validasi & iterasi desain." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-200 hover:border-accent transition-colors group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-accent/10 group-hover:text-accent transition-colors mb-6">
                  {step.icon}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="section-padding max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Karya Terpilih</h2>
            <p className="text-slate-500">Proyek-proyek yang mendefinisikan standar desain saya.</p>
          </div>
          <div className="flex gap-3">
            <div className="px-6 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">UI/UX</div>
            <div className="px-6 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">Frontend</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative bg-white rounded-[3rem] border border-slate-200 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                <img 
                  src={`https://picsum.photos/seed/${project.id}/800/500`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-10">
                  <span className="text-white font-bold flex items-center gap-2">
                    Lihat Studi Kasus <ChevronRight size={20} />
                  </span>
                </div>
              </div>
              <div className="p-10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em]">{project.company}</span>
                    <h3 className="text-3xl font-bold mt-2">{project.title}</h3>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">{project.period}</span>
                </div>
                <p className="text-slate-600 mb-8 line-clamp-2 font-medium">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-4 py-1.5 rounded-full">
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
      <section id="skills" className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Keahlian & Toolkit</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                    {index === 0 ? <Figma size={24} /> : index === 1 ? <Code2 size={24} /> : <Users size={24} />}
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skill.items.map(item => (
                    <span key={item} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium opacity-70 hover:opacity-100 transition-all">
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
          className="bg-slate-900 rounded-[4rem] p-16 md:p-24 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-10" />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Mari bangun sesuatu <br />yang bermakna.</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg">
              Saya selalu terbuka untuk diskusi tentang desain, teknologi, atau peluang kolaborasi baru.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:ardiantisimanjuntak5@gmail.com"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-accent text-slate-900 px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-accent/20"
              >
                <Mail size={24} />
                Email Saya
              </a>
              <a 
                href="https://www.linkedin.com/in/ardianti-simanjuntak-43a172248"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
            </div>
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
              <div className="relative h-56 md:h-80 bg-slate-100 shrink-0">
                <img 
                  src={`https://picsum.photos/seed/${selectedProject.id}-hero-final/1200/800`} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-3 bg-white/10 backdrop-blur-md text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-8 left-8 md:left-12 right-8 md:right-12">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.2em] mb-2 block">{selectedProject.company}</span>
                  <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 overflow-y-auto grainy-bg">
                <div className="max-w-4xl mx-auto space-y-20">
                  {/* Placeholder Notice */}
                  <div className="bg-amber-50 border border-amber-100 p-5 rounded-3xl flex items-start gap-4 text-amber-800 text-xs leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold shrink-0">!</div>
                    <p>
                      <span className="font-black block mb-1">CATATAN PENTING:</span>
                      Gambar yang ditampilkan saat ini adalah <span className="font-bold underline">placeholder (contoh)</span> karena sistem tidak dapat mengakses file lokal Anda secara langsung. Anda dapat mengganti URL gambar di kode sumber dengan link screenshot asli Anda.
                    </p>
                  </div>

                  {/* 1. Hero / Introduction */}
                  <section className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-4">Project Info</h4>
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Role</p>
                          <p className="font-bold text-slate-900">{selectedProject.role}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Durasi</p>
                          <p className="font-bold text-slate-900">{selectedProject.period}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Tools</p>
                          <p className="font-bold text-slate-900">{selectedProject.tools?.join(", ") || "Figma"}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase">Platform</p>
                          <p className="font-bold text-slate-900">{selectedProject.platform || "Web Dashboard"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-video overflow-hidden border border-slate-200 shadow-inner">
                      <img 
                        src={`https://picsum.photos/seed/${selectedProject.id}-mockup-final/800/600`} 
                        alt="Mockup" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </section>

                  {/* 2. Problem & Goal */}
                  {selectedProject.problem && (
                    <section className="grid md:grid-cols-2 gap-12">
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-red-500 rounded-full" />
                          Problem
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {selectedProject.problem}
                        </p>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-2xl font-black flex items-center gap-2">
                          <div className="w-1.5 h-6 bg-accent rounded-full" />
                          Goal
                        </h4>
                        <p className="text-slate-600 leading-relaxed font-medium">
                          {selectedProject.goal}
                        </p>
                      </div>
                    </section>
                  )}

                  {/* 3. Research */}
                  {selectedProject.research && (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-blue-500 rounded-full" />
                        Research & Features
                      </h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        {selectedProject.research.map((item, i) => (
                          <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h5 className="font-bold text-primary mb-2">{item.title}</h5>
                            <p className="text-xs text-slate-500">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      <div className="bg-slate-900 text-white p-8 rounded-3xl">
                        <p className="text-[10px] font-black text-accent uppercase tracking-widest mb-4">Fitur Utama</p>
                        <div className="flex flex-wrap gap-4">
                          {selectedProject.mainFeatures?.map(feature => (
                            <div key={feature} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10">
                              <CheckCircle2 size={14} className="text-accent" />
                              <span className="text-sm font-bold">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </section>
                  )}

                  {/* 4. User Flow */}
                  {selectedProject.userFlow && (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
                        User Flow
                      </h4>
                      <div className="flex flex-wrap items-center justify-center gap-4 bg-slate-50 p-10 rounded-3xl border border-slate-100">
                        {selectedProject.userFlow.map((step, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-slate-200 font-bold text-sm text-slate-700">
                              {step}
                            </div>
                            {i < selectedProject.userFlow!.length - 1 && (
                              <ChevronRight size={20} className="text-slate-300" />
                            )}
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 5. Wireframe */}
                  {selectedProject.wireframes && (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-orange-500 rounded-full" />
                        Wireframe
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {selectedProject.wireframes.map((wf, i) => (
                          <div key={i} className="aspect-[3/4] bg-slate-100 rounded-2xl border border-slate-200 flex flex-col items-center justify-center p-4 text-center group hover:bg-white transition-colors">
                            <div className="w-full h-full bg-slate-200 rounded-lg mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                            <p className="text-[10px] font-bold text-slate-500 uppercase">{wf}</p>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 6. UI Design (High Fidelity) */}
                  {selectedProject.highFidelity && (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-pink-500 rounded-full" />
                        UI Design (High Fidelity)
                      </h4>
                      <div className="space-y-12">
                        {selectedProject.highFidelity.map((hi, i) => (
                          <div key={i} className="space-y-6">
                            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl relative group">
                              <img src={hi.image} alt={hi.title} className="w-full h-auto" referrerPolicy="no-referrer" />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <div className="bg-white/90 px-6 py-3 rounded-2xl text-xs font-black tracking-widest text-slate-900 shadow-xl">
                                  PLACEHOLDER IMAGE
                                </div>
                              </div>
                            </div>
                            <div className="max-w-2xl">
                              <h5 className="text-xl font-bold mb-2">{hi.title}</h5>
                              <p className="text-slate-600 leading-relaxed">{hi.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {/* 7. Design System */}
                  {selectedProject.designSystem && (
                    <section className="space-y-12">
                      <div className="flex items-center gap-4">
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em]">Design System</h4>
                        <div className="h-px flex-grow bg-slate-100" />
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-12">
                        {/* Color System */}
                        <div className="space-y-8">
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Color System</p>
                          <div className="grid grid-cols-1 gap-4">
                            {selectedProject.designSystem.colors.map(color => (
                              <div key={color.name} className="flex items-center gap-4 p-4 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-2xl shadow-inner shrink-0" style={{ backgroundColor: color.hex }} />
                                <div>
                                  <p className="text-sm font-bold text-slate-900">{color.name}</p>
                                  <p className="text-[11px] font-mono text-slate-400 uppercase">{color.hex}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Typography */}
                        <div className="space-y-8">
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Typography</p>
                          <div className="space-y-8">
                            {selectedProject.designSystem.typography.map((typo, i) => (
                              <div key={i} className="group">
                                <p className="text-2xl font-black text-slate-800 leading-tight group-hover:text-primary transition-colors">
                                  {typo}
                                </p>
                                <div className="h-1 w-8 bg-slate-100 mt-2 group-hover:w-16 group-hover:bg-accent transition-all" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Components */}
                        <div className="space-y-8">
                          <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">Components</p>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.designSystem.components.map(comp => (
                              <div key={comp} className="px-5 py-3 bg-slate-50 rounded-2xl text-xs font-bold text-slate-600 border border-slate-100 hover:bg-white hover:shadow-sm transition-all">
                                {comp}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* 8. Result / Impact */}
                  <section className="bg-accent text-slate-900 p-12 md:p-20 rounded-[4rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                      <Sparkles size={120} />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-3xl md:text-4xl font-black mb-8">Result & Impact</h4>
                      <div className="grid gap-6">
                        {selectedProject.impact.map((item, i) => (
                          <div key={i} className="flex gap-6 p-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30">
                            <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shrink-0">
                              <CheckCircle2 size={20} className="text-accent" />
                            </div>
                            <p className="text-lg font-bold leading-tight">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>

                  {/* CTA */}
                  <div className="p-12 bg-slate-900 rounded-[3rem] text-white text-center">
                    <h5 className="text-2xl font-bold mb-4">Tertarik dengan studi kasus ini?</h5>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">Saya dapat menjelaskan lebih detail tentang proses riset dan keputusan desain di balik proyek ini.</p>
                    <a 
                      href="mailto:ardiantisimanjuntak5@gmail.com"
                      className="inline-flex items-center gap-3 bg-accent text-slate-900 px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-accent/20"
                    >
                      <Mail size={24} />
                      Hubungi Saya
                    </a>
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
