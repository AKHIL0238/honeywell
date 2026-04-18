import { useParams } from "wouter";
import { getCertById } from "@/data/certificates";

export default function CertificateVerified() {
  const params = useParams<{ id: string }>();
  const cert = params.id ? getCertById(params.id) : undefined;
  const notFound = params.id && !cert;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-20">
        {notFound ? (
          <NotFoundContent />
        ) : cert ? (
          <VerifiedContent name={cert.name} issuedOn={cert.issuedOn} />
        ) : (
          <VerifiedContent name="sai krishna" issuedOn="Apr 15, 2026" />
        )}
      </main>
      <footer className="h-12 border-t border-gray-100 bg-gray-50" />
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-start">
            <span className="text-[9px] text-gray-500 font-normal leading-tight">CSR Initiative by</span>
            <span className="text-red-600 font-bold text-xl leading-tight tracking-tight">Honeywell</span>
          </div>
          <div className="w-px h-10 bg-gray-300" />
          <div className="flex flex-col items-start">
            <span className="text-[9px] text-gray-500 font-normal leading-tight">Implemented by</span>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex items-center">
                <span className="font-bold text-sm" style={{ color: "#005baa" }}>Bharat</span>
                <span className="font-bold text-sm" style={{ color: "#e8460a" }}>Cares</span>
              </div>
              <div className="w-5 h-5 rounded-sm overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-600 via-green-500 to-orange-500">
                <svg viewBox="0 0 20 20" className="w-4 h-4 text-white" fill="currentColor">
                  <path d="M10 2L12 8h6l-5 3.5 2 6L10 14l-5 5.5 2-6L2 8h6z" />
                </svg>
              </div>
              <span className="text-[9px] text-gray-400 ml-0.5">by MMC Trust</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">About us</a>
          <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Courses</a>
          <a href="#" className="text-gray-700 text-sm font-medium hover:text-gray-900">Contact us</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-5 py-1.5 border border-gray-800 text-gray-800 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
            SIGN IN
          </button>
          <button className="px-5 py-1.5 border border-gray-800 text-gray-800 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
            SIGN UP
          </button>
        </div>
      </div>
    </header>
  );
}

function VerifiedContent({ name, issuedOn }: { name: string; issuedOn: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1e6cc8"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 h-20"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Certificate Verified</h1>
      <p className="text-gray-500 text-base mb-4">This certificate is valid and issued to</p>
      <p className="text-xl font-bold text-gray-900 mb-2">{name}</p>
      <p className="text-gray-500 text-sm">Issued on: {issuedOn}</p>
    </div>
  );
}

function NotFoundContent() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-20 h-20"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Certificate Not Found</h1>
      <p className="text-gray-500 text-base">This certificate ID is invalid or does not exist.</p>
    </div>
  );
}
