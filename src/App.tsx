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
    title: "Unified Dashboard & License Management System",
    company: "PT Dua Empat Tujuh (Solusi247)",
    role: "UI/UX Designer Intern",
    period: "Agu 2025 - Des 2025",
    description: "Merancang antarmuka pengguna untuk membantu tim bisnis dan operasional dalam memantau data klien, mengelola lisensi produk keamanan siber, serta mengakses informasi keamanan secara lebih efisien melalui pengalaman pengguna yang intuitif..",
    impact: [
      "Menyederhanakan proses pengelolaan klien dan lisensi dalam satu platform terpusat.",
"Meningkatkan efisiensi pemantauan status lisensi, aktivitas pengguna, dan performa layanan melalui visualisasi data yang jelas.",
"Membantu tim operasional mengakses informasi keamanan siber secara cepat dan terstruktur.",
"Menghasilkan desain antarmuka yang konsisten, mudah digunakan, dan selaras dengan kebutuhan bisnis serta pengguna."
    ],
    tags: ["UI/UX Design","Product Design","Dashboard Design","User Research","Design System","Cyber Security","Data Visualization","Web Application"],
    platform: "Web Dashboard",
    tools: ["Figma"],
    problem: "Pengelolaan data klien, lisensi produk, dan informasi keamanan siber masih tersebar pada berbagai sistem sehingga menyulitkan proses monitoring, pelaporan, serta pengambilan keputusan secara cepat dan akurat.",
    goal: "Merancang dashboard terintegrasi yang mampu mengonsolidasikan data klien, lisensi, dan keamanan siber ke dalam satu platform yang mudah digunakan, sehingga meningkatkan efisiensi operasional dan pengalaman pengguna.",
    research: [
      { title: "Design Thinking", desc:"Berkolaborasi secara rutin dengan pembimbing lapangan dan tim pengembang untuk menyelaraskan kebutuhan bisnis, teknis, dan pengguna."},
      { title: "Stakeholder Discussion", desc: "Diskusi rutin dengan pembimbing lapangan dan tim pengembang untuk menyelaraskan kebutuhan bisnis." },
      { title: "Workflow Analysis", desc: "Menganalisis alur kerja pengelolaan klien, lisensi, dan informasi keamanan guna menemukan peluang peningkatan efisiensi dan usability." }
    ],
    mainFeatures: ["Unified Dashboard", "License Generator", "Threat Intelligence", "CVE Database", "Client Management", "Support Ticket System"],
    userFlow: ["Login","Dashboard Overview","Manage Client Data","Monitor Security Information","Generate & Manage License","Handle Support Tickets","View Reports & Analytics"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "SOC Unified Dashboard", desc: "Pusat pemantauan aktivitas keamanan siber real-time dengan visualisasi Alert Volume Trend, Severity Breakdown, dan Quick IP Scoring dalam tema gelap yang intuitif.", image: "/images/unified dashboard.png" },
      { title: "Threat Intelligence & CVE", desc: "Penyajian data indikator ancaman (IOCs) dan database kerentanan (CVE) yang terstruktur.", image: "/images/threadintel.png" },
      { title: "License Management", desc: "Sistem pengelolaan data klien dan status lisensi (Active, Expired, Trial) secara menyeluruh.", image: "/images/home user.png" },
      { title: "Support System", desc: "Manajemen tiket dukungan dan kategori untuk penanganan masalah yang sistematis.", image: "/images/support feature.png" }
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
    id: "ud-tani-rejo",
    title: "Aplikasi Jejak Padi",
    company: "UD Tani Rejo (Program Kreativitas Mahasiswa)",
    role: "UI/UX Designer & Frontend Developer",
    period: "Feb 2024 - Mei 2024",
    description: "Aplikasi berbasis cloud computing yang dikembangkan untuk mengoptimalkan sistem ketertelusuran dalam rantai pasok beras ekspor.",
    impact: [
      "Meningkatkan transparansi rantai pasok beras melalui sistem ketertelusuran digital yang terintegrasi.",
      "Mempermudah pencatatan dan monitoring data produksi, distribusi, dan kualitas beras secara real-time.",
      "Membantu pelaku usaha dalam menjaga standar jaminan mutu untuk kebutuhan ekspor.",
      "Menghasilkan prototype website dan mobile application yang berfokus pada kebutuhan pengguna dan proses bisnis pertanian."
    ],
    tags: ["UI/UX Design", "Product Design", "Dashboard Design", "Mobile App Design", "User Research", "Design Thinking", "AgriTech", "Supply Chain Management"],
    platform: "Web Dashboard",
    tools: ["Figma"],
    problem: "Proses pencatatan dan pelacakan produksi beras masih dilakukan secara manual sehingga menyulitkan pemantauan kualitas produk, distribusi, dan riwayat produksi. Kurangnya transparansi dalam rantai pasok juga menjadi tantangan untuk memenuhi standar ekspor dan meningkatkan kepercayaan konsumen.",
    goal: "Merancang platform JejakPadi berbasis website dan mobile yang mampu mendigitalisasi proses ketertelusuran beras, meningkatkan transparansi data, mendukung jaminan mutu, serta mempermudah monitoring rantai pasok secara terintegrasi.",
    research: [
      { title: "Design Thinking", desc: "Menerapkan metode Design Thinking untuk memahami kebutuhan pengguna dan menghasilkan solusi yang berorientasi pada pengguna" },
      { title: "User Interview", desc: "Melakukan observasi dan diskusi dengan pemilik usaha serta calon pengguna untuk mengidentifikasi kebutuhan dan permasalahan utama." },
      { title: "Business Process Analysis", desc: "Menganalisis alur produksi, pengolahan, dan distribusi beras guna menemukan peluang digitalisasi dan peningkatan efisiensi operasional" }
    ],
    mainFeatures: ["Sistem Ketertelusuran", "Sistem Pendukung Keputusan Klasifikasi Mutu", "Notifikasi Perlakuan"],
    userFlows: [
      {
        label: "Admin Dashboard",
        steps: ["Login", "Dashboard Overview", "Manage Farmer Data", "Input Production Data", "Quality Verification", "Generate QR Code", "Monitor Distribution", "View Reports & Analytics"]
      },
      {
        label: "Mobile User",
        steps: ["Login", "Scan QR Code", "View Product Information", "View Production History", "View Distribution History", "Receive Real-time Updates"]
      }
    ],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "Sistem Ketertelusuran", desc: "Platform traceability berbasis QR Code yang mencatat dan menampilkan seluruh riwayat perjalanan produk beras dari petani hingga konsumen", image: "/images/sistem ketertelusuran jejakpadi.jpeg" },
      { title: "Kalsifikasi Mutu", desc: "Fitur evaluasi kualitas beras yang membantu pengguna mengidentifikasi dan mengelompokkan produk berdasarkan standar mutu untuk mendukung jaminan kualitas ekspor", image: "/images/klasifikasi mutu jejakpadi.png" },
      { title: "Notifikasi Perlakuan", desc: "Sistem notifikasi real-time yang memberikan informasi terkait jadwal perawatan, pemupukan, serta tindakan budidaya untuk menjaga kualitas hasil panen.", image: "/images/notifikasi perlakuan jejakpadi.png" },
    ],
    // designSystem: {
    //   colors: [
    //     { name: "Accent (Red)", hex: "#ef4136" },
    //     { name: "Primary (Dark Navy)", hex: "#02353d" },
    //     { name: "Secondary (Dark Teal)", hex: "#0d6176" },
    //     { name: "Highlight (Light Blue)", hex: "#48acc5" },
    //     { name: "Dark (Black)", hex: "#231f20" },
    //     { name: "Light (Off-white)", hex: "#efefef" }
    //   ],
    //   typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
    //   components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    // }
  },
  {
    id: "jejak-patroli",
    title: "JejakPatroli - Patrol Management & Monitoring System",
    company: "Politeknik Negeri Jember",
    role: "UI/UX Designer & Frontend Developer",
    period: "Agu 2024 - Des 2024",
    description: "Merancang aplikasi mobile dan web dashboard untuk membantu organisasi dalam mengelola aktivitas patroli keamanan, memantau kehadiran petugas secara real-time, serta mendigitalisasi proses pelaporan patroli yang sebelumnya dilakukan secara manual",
    impact: [
      "Meningkatkan transparansi dan akurasi aktivitas patroli melalui sistem monitoring berbasis GPS.",
      "Mempermudah verifikasi kehadiran petugas menggunakan kombinasi lokasi GPS dan dokumentasi foto.",
      "Membantu admin memantau status patroli secara real-time melalui dashboard terpusat.",
      "Mengurangi penggunaan laporan manual dengan sistem pelaporan digital yang terdokumentasi dan mudah diakses."
    ],
    tags: ["UI/UX Design","Product Design","Mobile App Design","Dashboard Design","User Research","Design Thinking","GPS Tracking","Real-time Monitoring"],
    platform: "Mobile Application & Web Dashboard",
    tools: ["Figma", "Laravel (Blade)", "Tailwind CSS"],
    problem: "Proses pencatatan kehadiran dan aktivitas patroli keamanan masih dilakukan secara manual sehingga rentan terhadap kesalahan pencatatan, keterlambatan laporan, serta sulitnya proses monitoring dan verifikasi aktivitas petugas di lapangan.",
    goal: "Merancang sistem patroli keamanan berbasis mobile dan website yang mampu mempermudah presensi, monitoring aktivitas patroli secara real-time, serta pengelolaan laporan keamanan yang lebih akurat dan transparan",
    research: [
      { title: "User Research", desc:"Melakukan analisis kebutuhan petugas keamanan dan kepala keamanan untuk memahami tantangan dalam proses patroli dan pelaporan lapangan."},
      { title: "Competitor Analysis", desc: "Menganalisis aplikasi patroli keamanan seperti QR-Patrol dan GuardPatrolling untuk mengidentifikasi peluang peningkatan pengalaman pengguna." },
      { title: "Workflow Analysis", desc: "Mempelajari alur kerja patroli konvensional untuk mengidentifikasi hambatan operasional dan peluang digitalisasi proses patroli" }
    ],
    mainFeatures: ["Presensi Petugas", "Monitoring Real-time", "Manajemen Jadwal", "Laporan Patroli", "Riwayat Laporan",],
    userFlow: ["Login","Check Assigned Schedule","Verify Attendance","Conduct Patrol","Upload Report & Documentation","Admin Monitors Activity","View Patrol History"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "Presensi Petugas", desc: "Memungkinkan petugas melakukan presensi menggunakan validasi GPS dan dokumentasi foto untuk memastikan kehadiran tercatat secara akurat dan transparan", image: "/images/presensi patrol.png" },
      { title: "Monitoring Real-Time", desc: "Menyediakan dashboard pemantauan yang memungkinkan admin melihat status patroli, lokasi petugas, dan aktivitas keamanan secara langsung", image: "/images/location patrol.png" },
      { title: "Manajemen Jadwal", desc: "Membantu admin mengatur, memperbarui, dan mendistribusikan jadwal patroli kepada petugas secara terpusat dan terorganisir.", image: "/images/jadwal patrol.png" },
      { title: "Laporan Patroli", desc: "Memungkinkan petugas mengirim laporan patroli lengkap dengan foto, video, dan informasi kondisi keamanan langsung dari aplikasi", image: "/images/laporan patrol.png" },
      { title: "Riwayat Laporan", desc: "Menyimpan seluruh aktivitas dan laporan patroli dalam satu sistem sehingga mudah ditinjau kembali untuk kebutuhan monitoring dan evaluasi", image: "/images/riwayat patrol.png" }
    ],
    // designSystem: {
    //   colors: [
    //     { name: "Accent (Red)", hex: "#ef4136" },
    //     { name: "Primary (Dark Navy)", hex: "#02353d" },
    //     { name: "Secondary (Dark Teal)", hex: "#0d6176" },
    //     { name: "Highlight (Light Blue)", hex: "#48acc5" },
    //     { name: "Dark (Black)", hex: "#231f20" },
    //     { name: "Light (Off-white)", hex: "#efefef" }
    //   ],
    //   typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
    //   components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    // }
  },
    {
    id: "pharmaflow",
    title: "PharmaFlow - Drug Sales & Inventory Management System",
    company: "Academic Project",
    role: "UI/UX Designer & Full Stack Developer",
    period: "Feb 2026 - Jun2026",
    description: "Merancang sistem manajemen penjualan dan inventaris obat berbasis web yang membantu apotek dalam mengelola data obat, memantau stok, mencatat transaksi penjualan, serta mengoptimalkan proses operasional secara digital",
    impact: [
    "Mempermudah pengelolaan data obat, pelanggan, dan supplier dalam satu platform terintegrasi.",
    "Meningkatkan efisiensi pencatatan transaksi penjualan dan pembelian obat.",
    "Membantu pengguna memantau stok obat melalui sistem peringatan stok rendah secara real-time.",
    "Menyediakan dashboard yang informatif untuk mendukung pengambilan keputusan operasional."
    ],
    tags: [ "UI/UX Design","Product Design","Backend Development","Web Application","Dashboard Design","Inventory Management","Database Management","Information System"],
    platform: "Web Dashboard",
    tools: [ "Figma","Laravel","Tailwind CSS","PHP","MySQL"],
    problem: 'Pengelolaan data obat, stok, pelanggan, dan transaksi yang masih dilakukan secara manual dapat menyebabkan kesalahan pencatatan, keterlambatan pembaruan stok, serta kesulitan dalam memantau aktivitas penjualan secara menyeluruh.',
    goal: "Merancang sistem penjualan dan inventaris obat yang mampu menyederhanakan proses operasional apotek melalui pengelolaan data yang terintegrasi, monitoring stok yang lebih efektif, dan pencatatan transaksi yang efisien.",
    research: [
      { title: "User Research", desc:"Mempelajari kebutuhan pengguna dalam proses pengelolaan obat, transaksi penjualan, dan pemantauan stok untuk menghasilkan solusi yang mudah digunakan"},
      { title: "Workflow Analysis", desc: "Menganalisis alur bisnis penjualan dan inventaris obat untuk mengidentifikasi hambatan serta peluang peningkatan efisiensi." },
      { title: "Dashboard Planning", desc: "Merancang struktur informasi dan visualisasi data agar pengguna dapat memantau kondisi inventaris dan transaksi dengan cepat" }
    ],
    mainFeatures: ["Manajemen Inventaris Obat", "Transaksi Penjualan", "Pencarian Obat", "Monitoring Stok", "Manajemen Pelanggan & Supplier",],
    userFlow: ["Login","Dashboard Overview","View Drug Inventory","Search Drug","Create Sales Transaction","Update Stock","Manage Customers & Suppliers","View Reports"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "Dashboard Overview", desc: "Dashboard yang menampilkan ringkasan jumlah obat, stok rendah, transaksi penjualan, dan total stok secara visual dan mudah dipahami.", image: "/images/dashboard pharma.png" },
      { title: "Drug Inventory", desc: "Halaman inventaris yang memungkinkan pengguna mengelola data obat dan memantau ketersediaan stok.", image: "/images/stok obat.png" },
      { title: "Sales Transaction", desc: "Antarmuka transaksi penjualan yang dirancang untuk mempercepat proses pencatatan pembelian obat.", image: "/images/transaksi obat.png" },
      { title: "Stock Alert System", desc: "Menampilkan data penjualan secara terperinci dan terorganisir untuk membantu pemantauan transaksi serta evaluasi kinerja penjualan", image: "/images/laporan penjualan.png" },
    ],
    // designSystem: {
    //   colors: [
    //     { name: "Accent (Red)", hex: "#ef4136" },
    //     { name: "Primary (Dark Navy)", hex: "#02353d" },
    //     { name: "Secondary (Dark Teal)", hex: "#0d6176" },
    //     { name: "Highlight (Light Blue)", hex: "#48acc5" },
    //     { name: "Dark (Black)", hex: "#231f20" },
    //     { name: "Light (Off-white)", hex: "#efefef" }
    //   ],
    //   typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
    //   components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    // }
  },

    {
    id: "assignme",
    title: "AssignMe - Learning & Assignment Management Platform",
    company: "Academic Project",
    role: "Product Designer & Full Stack Developer",
    period: "Feb 2026 - Jun2026",
    description: "AssignMe adalah platform manajemen pembelajaran berbasis web yang dirancang untuk menyederhanakan proses distribusi materi, pengelolaan kelas, dan pengumpulan tugas secara digital. Dengan pengalaman pengguna yang intuitif, AssignMe membantu pengajar dan siswa berkolaborasi lebih efektif dalam lingkungan pembelajaran yang terorganisir, fleksibel, dan mudah diakses kapan saja",
    impact: [
    "Meningkatkan efisiensi proses pembelajaran dengan mengintegrasikan pengelolaan kelas, materi, dan tugas dalam satu platform.",
    "Membantu siswa mengakses materi pembelajaran dan mengumpulkan tugas secara lebih praktis tanpa batasan lokasi.",
    "Mengurangi risiko keterlambatan pengumpulan tugas melalui sistem notifikasi dan pengingat otomatis.",
    "Menciptakan pengalaman belajar yang lebih terstruktur, kolaboratif, dan terdokumentasi dengan baik bagi pengajar maupun siswa."
    ],
    tags: [ "UI/UX Design","Backend Development","Web Application","Education Technology","Learning Management System","Database Design","System Analysis","Information System"],
    platform: "Web Dashboard",
    tools: [ "Figma","Laravel","Tailwind CSS","PHP","MySQL"],
    problem: 'Proses distribusi materi dan pengumpulan tugas secara manual sering menyebabkan kesulitan dalam pengelolaan kelas, keterlambatan pengumpulan tugas, serta kurangnya transparansi antara pengajar dan siswa dalam memantau aktivitas pembelajaran.',
    goal: "Merancang platform pembelajaran daring yang memudahkan pengajar dalam mengelola kelas dan tugas, serta memberikan pengalaman belajar yang lebih fleksibel, terorganisir, dan mudah diakses bagi siswa",
    research: [
      { title: "User Research", desc:"Menganalisis kebutuhan pengajar dan siswa untuk memahami kendala yang sering terjadi dalam proses pembelajaran dan pengumpulan tugas secara online."},
      { title: "Workflow Analysis", desc: "Mempelajari alur pengelolaan kelas, distribusi materi, dan pengumpulan tugas untuk menciptakan proses yang lebih efisien." },
      { title: "Information Architecture", desc: "Menyusun struktur navigasi dan alur pengguna agar pengajar maupun siswa dapat mengakses fitur dengan mudah" }
    ],
    mainFeatures: ["Class Management", "Assignment Management", "Online Assignment Submission", "Learning Materials","Assignment Timeline",],
    userFlow: ["Register / Login","Join or Create Class","Access Learning Materials","View Assignments","Submit Assignment","Track Submission Status","People & Class Collaboration"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "Class Management", desc: "Memungkinkan pengajar membuat, mengelola, mengedit, dan mengarsipkan kelas secara digital sehingga proses pembelajaran menjadi lebih terstruktur", image: "/images/classmanagement.png" },
      { title: "Assignment Management", desc: "Mendukung pembuatan, distribusi, dan pengelolaan tugas lengkap dengan deskripsi, lampiran, dan batas waktu pengumpulan.", image: "/images/managementtugas.png" },
      { title: "Online Assignment Submission", desc: "Memudahkan siswa mengumpulkan tugas secara online, memantau status pengumpulan, serta mengelola revisi sebelum tenggat waktu berakhir", image: "/images/upload tugas.png" },
      { title: "People & Class Collaboration", desc: "Menampilkan informasi pengajar dan anggota kelas untuk mendukung kolaborasi dalam proses pembelajaran", image: "/images/anggotaclass.png" },
      { title: "Assignment Timeline", desc: "Membantu siswa memantau tugas berdasarkan status To-Do, Completed, dan Overdue sehingga aktivitas belajar lebih terorganisir", image: "/images/statustugas.png" },
    ],
    // designSystem: {
    //   colors: [
    //     { name: "Accent (Red)", hex: "#ef4136" },
    //     { name: "Primary (Dark Navy)", hex: "#02353d" },
    //     { name: "Secondary (Dark Teal)", hex: "#0d6176" },
    //     { name: "Highlight (Light Blue)", hex: "#48acc5" },
    //     { name: "Dark (Black)", hex: "#231f20" },
    //     { name: "Light (Off-white)", hex: "#efefef" }
    //   ],
    //   typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
    //   components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    // }
  },
      {
    id: "sip-laundry",
    title: "SIP Laundry - Laundry Management & Point of Sale System",
    company: "Academic Project",
    role: "UI/UX Designer & Project Manager",
    period: "Feb 2023 - May 2023",
    description: "SIP Laundry adalah aplikasi kasir berbasis desktop yang dirancang untuk membantu pemilik usaha laundry dalam mengelola transaksi, pelanggan, dan operasional bisnis secara lebih efisien. Sistem ini mengintegrasikan pencatatan transaksi, manajemen pelanggan, laporan keuangan otomatis, pembayaran digital, dan autentikasi RFID dalam satu platform yang terpusat.",
    impact: [
        "Mengelola perencanaan dan pelaksanaan proyek menggunakan metode Scrum untuk memastikan pengembangan berjalan sesuai target.",
        "Merancang dan mengevaluasi antarmuka pengguna agar proses transaksi dan pengelolaan operasional laundry lebih mudah digunakan.",
        "Berkolaborasi dengan tim pengembang untuk memastikan implementasi desain sesuai kebutuhan pengguna dan tujuan bisnis.",
        "Melaksanakan Black Box Testing dan User Acceptance Testing (UAT) yang membantu mengurangi bug hingga 90% sebelum deployment.",
        "Meningkatkan usability aplikasi melalui evaluasi UI/UX dan pengujian pengguna sehingga alur kerja menjadi lebih efisien.",
        "Mengidentifikasi risiko proyek dan mengimplementasikan solusi untuk menjaga kualitas serta kelancaran pengembangan sistem."
    ],
    tags: [ "Project Management","Quality Assurance","Software Testing","Scrum","Desktop Application","Point of Sale System","Usability Testing","Business Information System"],
    platform: "Desktop Application",
    tools: ["Figma","Trello","Microsoft Excel","Black Box Testing","User Acceptance Testing"],
    problem: 'Proses pencatatan transaksi dan pengelolaan operasional laundry yang masih dilakukan secara manual berpotensi menyebabkan kesalahan pencatatan, kesulitan dalam memantau transaksi, serta kurang efektifnya pengelolaan data pelanggan dan laporan keuangan',
    goal: "Mengembangkan sistem manajemen laundry yang mampu mengotomatisasi proses transaksi, pengelolaan pelanggan, dan pelaporan bisnis sehingga operasional usaha menjadi lebih efisien, akurat, dan mudah dipantau",
    research: [
      { title: "Requirement Analysis", desc:"Mengidentifikasi kebutuhan pengguna dan proses bisnis laundry untuk memastikan sistem yang dikembangkan mampu menyelesaikan permasalahan operasiona."},
      { title: "Scrum Project Management", desc: "Mengelola backlog, sprint planning, dan monitoring progress tim untuk memastikan proyek berjalan sesuai timeline" },
      { title: "Quality Assurance Process", desc: "Melakukan pengujian sistem menggunakan Black Box Testing dan User Acceptance Testing untuk memastikan kualitas aplikasi sebelum digunakan pengguna" }
    ],
    mainFeatures: ["Cashier Dashboard", "Admin Dashboard", "Order Management", "Revenue Management","Expense Tracking",],
    userFlow: ["Register / Login","Join or Create Class","Access Learning Materials","View Assignments","Submit Assignment","Track Submission Status","People & Class Collaboration"],
    wireframes: ["Dashboard Overview", "Client List", "License Generator Form", "Support Ticket Interface"],
    highFidelity: [
      { title: "Cashier Dashboard", desc: "Menyediakan ringkasan operasional harian dengan menampilkan jumlah pesanan yang sedang diproses, telah selesai, dan sudah diambil pelanggan sehingga memudahkan kasir memantau status layanan secara real-time", image: "/images/dahsboard_kasir-sip.png" },
      { title: "Admin Dashboard", desc: "Menampilkan laporan dan statistik bisnis secara komprehensif, termasuk pendapatan, pesanan, pengeluaran, pelanggan, dan kinerja karyawan untuk mendukung pengambilan keputusan", image: "/images/dashboard_Admin-sip.png" },
      { title: "Order Management", desc: "Memungkinkan pengguna mencatat, mengelola, dan memperbarui informasi pesanan laundry mulai dari penerimaan hingga penyelesaian layanan", image: "/images/transaksi_kasir-sip.png" },
      { title: "Revenue Management", desc: "Menyajikan data pendapatan berdasarkan periode tertentu serta jenis layanan untuk membantu pemilik usaha memantau performa bisnis secara lebih efektif", image: "/images/pendapatan-sip.png" },
    ],
    // designSystem: {
    //   colors: [
    //     { name: "Accent (Red)", hex: "#ef4136" },
    //     { name: "Primary (Dark Navy)", hex: "#02353d" },
    //     { name: "Secondary (Dark Teal)", hex: "#0d6176" },
    //     { name: "Highlight (Light Blue)", hex: "#48acc5" },
    //     { name: "Dark (Black)", hex: "#231f20" },
    //     { name: "Light (Off-white)", hex: "#efefef" }
    //   ],
    //   typography: ["Heading: Outfit (Bold/Black)", "Body: Inter (Medium/Regular)", "Data: JetBrains Mono"],
    //   components: ["Responsive Sidebar", "Status Badges", "Data Tables", "Interactive Charts", "Modal Forms"]
    // }
  },
 
];

const projectImages: Record<string, string> = {
  "dua-empat-tujuh": "/images/secgaone.png",
  "ud-tani-rejo": "/images/jejakpadi.png",
  "jejak-patroli": "/images/jejakpatroli.png",
  "pharmaflow": "/images/pharma.png",
  "assignme": "/images/assignme.png",
   "sip-laundry": "/images/sip-laundry.png",
};

const skills: Skill[] = [
  {
    category: "Desain",
    items: [ "UI Design",
      "UX Design",
      "Figma",
      "Wireframing",
      "Prototyping",
      "Design System",
      "User Research",
      "Usability Testing",
      "Dashboard Design",
      "Mobile Design"]
  },
  {
    category: "Pengembangan",
    items: ["Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Git"]
  },
  {
    category: "Keahlian Interpersonal",
    items: [ "Project Management",
      "Scrum",
      "Leadership",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Quality Assurance",
      "Stakeholder Collaboration",
      "Critical Thinking"]
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
          <a href="#about" className="hover:text-accent transition-colors">Tentang Saya</a>
          <a href="#work" className="hover:text-accent transition-colors">Proyek</a>
          {/* <a href="#process" className="hover:text-accent transition-colors">Proses Desain</a> */}
          <a href="#skills" className="hover:text-accent transition-colors">Keahlian</a>
        </div>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ardiantisimanjuntak5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          Hubungi Saya
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
          className="max-w-7xl relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.7fr)_0.9fr] gap-16 items-center">
            <div className="lg:pr-10">
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
                TERBUKA UNTUK KESEMPATAN KARIER
              </motion.div>
              
              <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 leading-[0.95]">
                <span className="text-gradient">Merancang</span> <span className="text-slate-400">Solusi Digital yang Intuitif</span> <br />
                <span className="text-gradient">dan Berdampak</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl font-medium">
                Saya Ardianti, UI/UX Designer dengan latar belakang Teknik Informatika yang berfokus pada perancangan produk digital yang intuitif, fungsional, dan berorientasi pada kebutuhan pengguna.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <a href="#work" className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:translate-y-[-4px] transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
                  Jelajahi Proyek Saya <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
            </div>

            <div className="mx-auto lg:ml-auto lg:mr-0">
              <div className="aspect-[4/5] w-full max-w-[24rem] overflow-hidden rounded-[2.5rem] border border-white/40 shadow-2xl shadow-slate-900/10 bg-white/80">
                <img src="/images/fotoku.jpeg" alt="Foto Ardianti" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section - Bento Style */}
      <section id="about" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <h2 className="text-4xl md:text-5xl font-black">Filosofi Desain</h2>
            <p className="text-slate-500 max-w-md text-right hidden md:block">Mengubah kebutuhan pengguna menjadi pengalaman digital yang sederhana, efektif, dan bernilai.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Main Bio */}
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 flex flex-col justify-between group hover:border-accent/30 transition-colors">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-1">Pengalaman Profesional </h3>
                <h3 className="text-2xl font-bold mb-4">UI/UX Designer Intern — PT Dua Empat Tujuh</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Berkontribusi dalam proses perancangan antarmuka web dan mobile, pembuatan wireframe, prototype, serta pengembangan design system untuk mendukung kebutuhan pengguna dan bisnis.
                </p>
              </div>
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-black text-primary">3.88</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">IPK Kumulatif</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-black text-primary">3+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tahun Mempelajari UI/UX Design</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex-1">
                  <p className="text-3xl font-black text-primary">10+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Proyek Digital</p>
                </div>
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                  <p className="text-3xl font-black text-primary">5+</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Prototype Interaktif</p>
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
                <h3 className="text-2xl font-bold mb-2">Penerima Hibah Nasional PKM</h3>
                <p className="text-slate-400">Berhasil memperoleh pendanaan Program Kreativitas Mahasiswa (PKM) melalui pengembangan platform digital berbasis cloud computing. Berkontribusi dalam perancangan solusi digital yang mendukung transparansi, efisiensi, dan pengalaman pengguna yang lebih baik.</p>
              </div>
            </div>

            {/* Specialization */}
            <div className="md:col-span-2 bg-accent rounded-[2.5rem] p-10 text-white flex flex-col justify-between">
              <Layout size={50} />
              <div>
                <h3 className="text-xl font-bold mb-5">Desain Dashboard dan Sistem Informasi</h3>
                <p className="text-white/80 text-sm">Berpengalaman merancang dashboard, sistem informasi, dan antarmuka aplikasi yang membantu pengguna mengakses informasi dengan lebih cepat, jelas, dan efisien.</p>
              </div>
            </div>

            {/* Image/Visual */}
            {/* <div className="bg-slate-200 rounded-[2.5rem] overflow-hidden">
              <img 
                src="https://picsum.photos/seed/ardianti/600/600" 
                alt="Profile" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Process Section */}
      {/* <section id="process" className="section-padding bg-slate-50">
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
      </section> */}

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
                  src={projectImages[project.id] ?? `https://picsum.photos/seed/${project.id}/800/500`} 
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
                  <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 whitespace-nowrap">{project.period}</span>
                </div>
                <p className="text-slate-600 mb-8 font-medium">{project.description}</p>
                
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
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ardiantisimanjuntak5@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
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
            <a href="https://www.linkedin.com/in/ardianti-simanjuntak-43a172248" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/ardiantisimanjuntak" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ardiantisimanjuntak5@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Mail size={20} /></a>
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
            className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-start justify-start overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white w-full h-full max-w-none rounded-none overflow-hidden shadow-none flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header removed — keep close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 backdrop-blur-md text-slate-700 rounded-full hover:bg-white/20 transition-colors border border-white/20"
              >
                <X size={20} />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12 overflow-y-auto grainy-bg">
                <div className="max-w-4xl mx-auto space-y-20">
                  {/* Placeholder Notice removed */}

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
                          <p className="font-bold text-slate-900">{selectedProject.platform || "Web & Mobile"}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-100 rounded-3xl aspect-video overflow-hidden border border-slate-200 shadow-inner">
                      <img 
                        src={projectImages[selectedProject.id] ?? "/images/secgone.png"}
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
                  {selectedProject.userFlows ? (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-purple-500 rounded-full" />
                        User Flow
                      </h4>
                      <div className="grid gap-6">
                        {selectedProject.userFlows.map((flow, index) => (
                          <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-6">{flow.label}</p>
                            <div className="flex flex-wrap items-center gap-4">
                              {flow.steps.map((step, i) => (
                                <div key={i} className="flex items-center gap-4">
                                  <div className="bg-white px-5 py-3 rounded-xl shadow-sm border border-slate-200 font-bold text-sm text-slate-700">
                                    {step}
                                  </div>
                                  {i < flow.steps.length - 1 && (
                                    <ChevronRight size={20} className="text-slate-300" />
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  ) : selectedProject.userFlow ? (
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
                  ) : null}

                  {/* 5. Wireframe */}
                  {/* {selectedProject.wireframes && (
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
                  )} */}

                  {/* 6. UI Design (High Fidelity) */}
                  {selectedProject.highFidelity && (
                    <section className="space-y-10">
                      <h4 className="text-2xl font-black flex items-center gap-2">
                        <div className="w-1.5 h-6 bg-pink-500 rounded-full" />
                        UI Design (High Fidelity)
                      </h4>
                      <div className="space-y-12">
                        {selectedProject.highFidelity.map((hi, i) => (
                          <div key={i} className="space-y-6 max-w-5xl mx-auto">
                            <div className="max-w-full">
                              <h5 className="text-xl font-bold mb-2">{hi.title}</h5>
                              <p className="text-slate-600 leading-relaxed">{hi.desc}</p>
                            </div>
                            <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
                              <img
                                src={hi.image}
                                alt={hi.title}
                                className={hi.title === "Notifikasi Perlakuan" ? "w-full max-h-[640px] object-contain mx-auto bg-slate-100" : "w-full h-auto object-contain"}
                                referrerPolicy="no-referrer"
                              />
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
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=ardiantisimanjuntak5@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-accent text-slate-900 px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-accent/20"
                    >
                      <Mail size={24} />
                      Mari Berkolaborasi
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
