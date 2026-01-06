export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} Cognitive Automation Systems. All rights reserved.
        </div>
      </footer>
    );
  }
  