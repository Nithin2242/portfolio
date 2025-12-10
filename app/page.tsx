'use client';

import { motion, Variants } from 'framer-motion';

export default function Home() {
  // Fixed: Added ': Variants' type so TypeScript stops complaining
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    // UPDATED BACKGROUND: Deep neutral with a subtle red spotlight at the top
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,0,0,0.3),rgba(255,255,255,0))] text-gray-200 font-sans selection:bg-red-500 selection:text-white">
      
      {/* Navigation Bar */}
      <header className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md border-b border-red-900/20 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-red-600 tracking-tighter"
          >
            NITHIN <span className="text-white">NS</span>
          </motion.h1>
          <nav className="space-x-8 text-sm font-medium hidden md:block">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-500 transition-colors duration-300">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          
          {/* Profile Image */}
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8 relative inline-block"
          >
            {/* Added a subtle glow behind the image */}
            <div className="absolute inset-0 bg-red-600 blur-2xl opacity-20 rounded-full"></div>
            <div className="relative w-32 h-32 rounded-full border-4 border-red-600/50 shadow-2xl overflow-hidden mx-auto bg-neutral-900">
               <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition" />
            </div>
          </motion.div>

          <motion.h2 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-white tracking-tight"
          >
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Nithin NS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Electronics & Communication Engineer transforming raw data into 
            <span className="text-red-500 font-semibold"> actionable insights</span>.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-4 items-center"
          >
            <a href="#contact" className="px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition duration-300">
              Contact Me
            </a>

            <a href="/resume.pdf" download className="px-8 py-3 border border-red-600/50 text-red-400 rounded-full font-bold hover:bg-red-600 hover:text-white hover:border-red-600 transition duration-300 flex items-center gap-2 group bg-neutral-900/50 backdrop-blur-sm">
              <span>Download Resume</span>
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-950/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-16 text-center text-white"
          >
            Technical <span className="text-red-600">Arsenal</span>
          </motion.h3>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Programming", skills: "Python, SQL, C++, MATLAB" },
              { title: "Data Visualization", skills: "Power BI, Tableau, Excel, DAX" },
              { title: "Soft Skills", skills: "Analytical Mindset, Problem Solving" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-neutral-900/50 p-8 rounded-2xl border border-neutral-800 hover:border-red-600/50 transition duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                <h4 className="text-xl font-bold text-red-500 mb-4">{skill.title}</h4>
                <p className="text-gray-400">{skill.skills}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-16 text-center text-white"
          >
            Featured <span className="text-red-600">Projects</span>
          </motion.h3>
          
          <div className="grid gap-12">
            {[
              { 
                title: "D-Mart Sales Insights", 
                tools: "SQL, Power BI, Excel", 
                desc: ["End-to-end retail analytics solution.", "Designed normalized SQL schema.", "Built interactive Power BI dashboards."],
                year: "2025"
              },
              { 
                title: "HR Analytics Dashboard", 
                tools: "Tableau", 
                desc: ["Analyzed workforce demographics.", "Created calculated fields for attrition.", "Visualized salary distributions."],
                year: "2025"
              },
              { 
                title: "Cyber Sentinel (App)", 
                tools: "Flutter, ML, Dart", 
                desc: ["Cross-platform threat detection.", "Integrated ML behavioral analytics.", "RSA encryption for security."],
                year: "Ongoing"
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative bg-neutral-900/50 rounded-2xl p-8 border border-neutral-800 hover:border-red-900/50 overflow-hidden backdrop-blur-sm"
              >
                {/* Gradient Glow Effect on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full group-hover:bg-red-600/20 transition duration-500"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start mb-6 relative z-10">
                  <div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-red-500 transition">{project.title}</h4>
                    <p className="text-red-400 font-mono text-sm mt-2">{project.tools}</p>
                  </div>
                  <span className="mt-2 md:mt-0 px-3 py-1 rounded-full text-xs font-bold border border-red-900 text-red-500 bg-red-900/10">
                    {project.year}
                  </span>
                </div>
                
                <ul className="space-y-3 relative z-10">
                  {project.desc.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="mr-3 text-red-600">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-neutral-950/50">
         <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-10 text-white">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Analytics (Infosys)', 'AWS APAC Solutions Architecture', 'Web Development (Fliprlabs)', 'Data Analytics (Deloitte)'].map((cert) => (
              <span key={cert} className="bg-neutral-900/80 border border-neutral-800 px-6 py-3 rounded-xl text-gray-300 font-medium hover:border-red-600/50 hover:text-red-500 transition duration-300">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-neutral-950 to-red-950/20 text-white text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="mb-10 max-w-xl mx-auto text-gray-300">
            Ready to bring data-driven insights to your team.
          </p>
          <div className="space-y-4 text-lg">
            <p className="font-semibold text-red-400">nithinns1402@gmail.com</p>
            <p className="font-semibold">+91-6364348530</p>
            <div className="flex justify-center gap-6 mt-8">
               <a href="https://linkedin.com/in/nithin-n-s-23b3ba290" className="hover:text-red-500 transition transform hover:scale-110">
                 LinkedIn
               </a>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="bg-neutral-950 text-neutral-600 py-8 text-center text-sm border-t border-neutral-900">
        <p>&copy; {new Date().getFullYear()} Nithin NS. Designed with Next.js & Framer Motion.</p>
      </footer>
    </div>
  );
}