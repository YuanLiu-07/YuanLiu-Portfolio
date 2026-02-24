// components/Experience.tsx
export default function Experience() {
    const experiences = [
      {
        company: "Capgemini Greater China",
        role: "AI Workflow Developer Intern",
        date: "2025.07 - 2025.09",
        desc: "Used Dify as the tool to build workflow and boost efficiency in contract auditing."
      },
      
    ];
  
    return (
      <section id="experience" className="py-20 px-4 sm:px-10 text-gray-100 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-100">Internship Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="border-l-2 border-emerald-500 pl-6 ml-4">
              <h3 className="text-xl font-semibold text-gray-100">{exp.role} @ {exp.company}</h3>
              <span className="text-sm text-gray-400">{exp.date}</span>
              <p className="mt-2 text-gray-400 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }