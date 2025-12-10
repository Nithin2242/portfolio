export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-700">Nithin N S</h1>
          <nav className="space-x-6 text-sm font-medium hidden md:block">
            <a href="#about" className="hover:text-blue-700 transition">About</a>
            <a href="#skills" className="hover:text-blue-700 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-700 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-700 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-6 text-slate-900">Hi, I'm Nithin N S</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Electronics & Communication Engineering Student & Aspiring Data Analyst
          </p>
          <p className="text-gray-500 mb-10">
            BMS Institute of Technology and Management (2022-2026) • CGPA: 7.5
          </p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-blue-700 text-white rounded-full font-semibold hover:bg-blue-800 transition shadow-lg">
              Contact Me
            </a>
            <a href="https://linkedin.com/in/nithin-n-s-23b3ba290" target="_blank" className="px-8 py-3 border border-gray-300 rounded-full font-semibold hover:bg-gray-100 transition">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-800">Technical Arsenal</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h4 className="text-lg font-bold text-blue-700 mb-3">Programming & Data</h4>
              <p className="text-gray-600">Python, SQL, C++, MATLAB</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h4 className="text-lg font-bold text-blue-700 mb-3">Analytics & Viz</h4>
              <p className="text-gray-600">Power BI, Tableau, Excel, DAX</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">
              <h4 className="text-lg font-bold text-blue-700 mb-3">Soft Skills</h4>
              <p className="text-gray-600">Analytical Mindset, Problem Solving, Communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center text-slate-800">Featured Projects</h3>
          <div className="grid gap-10">
            
            {/* Project 1 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">D-Mart Sales & Customer Insights Dashboard</h4>
                  <p className="text-blue-600 font-medium mt-1">Tools: SQL, Power BI, Excel</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full">Feb 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Developed an end-to-end retail analytics solution to drive business decisions.</li>
                <li>Designed normalized SQL schema for efficient data collection.</li>
                <li>Built interactive Power BI dashboards with KPIs and trend analysis.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">HR Analytics Dashboard</h4>
                  <p className="text-blue-600 font-medium mt-1">Tools: Tableau</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs font-bold bg-green-100 text-green-800 px-3 py-1 rounded-full">Sep 2025</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Cleaned raw HR datasets and created calculated fields for metrics like attrition rate.</li>
                <li>Visualized workforce demographics and salary distributions.</li>
                <li>Provided actionable insights for talent retention and planning.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">Cyber Sentinel (App)</h4>
                  <p className="text-blue-600 font-medium mt-1">Tools: Flutter, Dart, Machine Learning</p>
                </div>
                <span className="mt-2 md:mt-0 text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Ongoing</span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
                <li>Developing a cross-platform mobile app for threat detection using ML.</li>
                <li>Integrating ML models for behavioral analytics to identify trends.</li>
                <li>Implementing RSA/OAEP encryption for secure communication.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-10 text-slate-800">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Data Analytics (Infosys)', 'AWS APAC Solutions Architecture', 'Web Development (Fliprlabs)', 'Data Analytics (Deloitte)'].map((cert) => (
              <span key={cert} className="bg-white px-6 py-3 rounded-xl shadow-sm text-gray-700 font-medium border border-gray-200">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-10 max-w-xl mx-auto text-blue-100 text-lg">
          I am actively looking for opportunities in Data Analytics. Feel free to reach out!
        </p>
        <div className="space-y-4 text-lg">
          <p className="font-semibold">nithinns1402@gmail.com</p>
          <p className="font-semibold">+91-6364348530</p>
          <p className="text-blue-200">Bangalore, Karnataka, India</p>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Nithin NS. Built with Next.js & Tailwind.</p>
      </footer>
    </div>
  );
}