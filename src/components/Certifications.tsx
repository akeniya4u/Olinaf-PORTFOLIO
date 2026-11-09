import { useState } from 'react';
import { Award, ExternalLink, CheckCircle, ShieldCheck, FileCheck, X } from 'lucide-react';
import { PORTFOLIO_DATA, CertificateItem } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="certifications" className="py-24 border-t border-zinc-800/80 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Professional Certifications
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-zinc-400 text-base leading-relaxed">
            Accredited credentials verifying operational execution, digital organization, communication, and executive productivity tools.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 hover:border-blue-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all group"
            >
              <div>
                {/* Certificate Badge Frame */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400">
                    {cert.organization}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-blue-400 mb-4">
                  Issued by {cert.organization}
                </p>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills Acquired */}
                <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Verified Competencies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors cursor-pointer"
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}

          {/* Scalable card to add future certificates */}
          <div className="rounded-2xl bg-zinc-900/20 border border-dashed border-zinc-800 p-6 sm:p-7 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-xl bg-zinc-800/40 border border-zinc-700/40 text-zinc-400 flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-zinc-500" />
            </div>
            <h4 className="text-sm font-semibold text-zinc-300">Continuous Professional Learning</h4>
            <p className="text-xs text-zinc-500 mt-2 max-w-xs">
              Additional certifications in software engineering, cloud computing, and AI tools will be featured here as they are earned.
            </p>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono uppercase text-blue-400">Credential Verification</span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-6 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white">{selectedCert.title}</h3>
                <p className="text-xs text-zinc-400 mt-1">Issuing Organization: {selectedCert.organization}</p>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
                <p className="text-xs font-semibold text-zinc-300 mb-2">Core Skills Covered:</p>
                <ul className="space-y-1.5">
                  {selectedCert.skillsAcquired.map((s, i) => (
                    <li key={i} className="text-xs text-zinc-400 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-2 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-800 rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
