import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Ayush Raj | AI/ML Engineer & Computer Science Engineer",
  description:
    "Ayush Raj is a Computer Science & Engineering student (2024–2028) at Birla Institute of Technology, Mesra building AI/ML systems, computer vision applications, and full-stack products.",
  keywords: [
    "Ayush Raj",
    "AI Engineer",
    "Machine Learning Engineer",
    "Computer Vision",
    "Full-Stack Developer",
    "Birla Institute of Technology, Mesra",
    "BIT Mesra",
    "B.Tech CSE",
    "BE11",
    "Artificial Wisdom",
    "Data Sarthi",
    "YOLO",
    "Deep Learning",
    "Python",
    "TypeScript",
    "React",
    "FastAPI",
    "Prisma",
    "PostgreSQL",
  ],
  authors: [{ name: "Ayush Raj" }],
  creator: "Ayush Raj",
  openGraph: {
    title: "Ayush Raj | AI/ML Engineer & Computer Science Engineer",
    description:
      "Computer Science & Engineering student at Birla Institute of Technology, Mesra building AI/ML systems, computer-vision applications, and full-stack products.",
    type: "website",
    locale: "en_US",
    siteName: "Ayush Raj Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Raj | AI/ML Engineer & Computer Science Engineer",
    description:
      "Computer Science & Engineering student at Birla Institute of Technology, Mesra building AI/ML systems, computer-vision applications, and full-stack products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#03060c" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme');
                  var pref = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  var theme = saved || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
