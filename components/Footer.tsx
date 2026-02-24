export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 border-t border-gray-700/50">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
        <span>© {year} Yuan Liu</span>
        <span>Built with Next.js, React & OpenAI</span>
      </div>
    </footer>
  );
}
