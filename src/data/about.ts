export const ABOUT_TERMINAL_DATA = {
  hero: {
    command: "$ whoami",
    title: "Who Am I?",
    description:
      "Mahasiswa Teknik Informatika dengan fokus utama pada Internet of Things (IoT) dan penerapan teknologi terintegrasi antara perangkat keras dan perangkat lunak. Berpengalaman dalam pengembangan sistem berbasis mikrokontroler, sensor, serta komunikasi data, yang dipadukan dengan aplikasi web dan database untuk monitoring dan pengelolaan data.",
  },
  codeSnippet: {
    lines: [
      { key: "const", text: "profile = {" },
      { key: "name", value: "Muhammad Haqil Abdillah", indent: true },
      { key: "role", value: "IoT Engineer", indent: true },
      { key: "location", value: "Kuningan, West Java", indent: true },
      { key: "motto", value: "Simplicity is the ultimate sophistication", indent: true },
      { key: "}", text: ";" },
    ],
  },
  education: {
    school: "Universitas Kuningan",
    degree: "Teknik Informatika",
    year: "2024 - Now",
    courses: ["Web Development", "Internet of Things (IoT)"],
    quote: "Dari sensor hingga sistem, semua dirancang untuk solusi.",
  },
};

export const SKILLS_DATA = [
  { name: "HTML / CSS", level: 85, icon: "code" },
  { name: "JavaScript / TypeScript", level: 65, icon: "javascript" },
  { name: "React / Next.js", level: 70, icon: "web" },
  { name: "PHP", level: 75, icon: "php" },
  { name: "Tailwind / Bootstrap CSS", level: 80, icon: "palette" },
  { name: "Arduino / ESP32", level: 80, icon: "memory" },
  { name: "IoT & Sensor", level: 75, icon: "sensors" },
  { name: "Flutter / Dart", level: 50, icon: "smartphone" },
];

export const TOOLS_DATA = [
  { name: "VS Code", icon: "edit_note", category: "Code Editor" },
  { name: "Arduino IDE", icon: "developer_board", category: "IoT" },
  { name: "Platform IO", icon: "terminal", category: "IoT" },
  { name: "Git & GitHub", icon: "code", category: "Version Control" },
  { name: "Figma", icon: "draw", category: "Design" },
  { name: "Postman", icon: "send", category: "API Testing" },
  { name: "Chrome DevTools", icon: "bug_report", category: "Debugging" },
  { name: "Vercel", icon: "cloud_upload", category: "Deployment" },
];
