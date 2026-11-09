import { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [unconfiguredBackend, setUnconfiguredBackend] = useState(false);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Your Name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Your Email Address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Subject is required.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmissionStatus('error');
      setStatusMessage('Please fix the errors in the form before sending.');
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus('idle');
    setStatusMessage('');
    setUnconfiguredBackend(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmissionStatus('success');
        setStatusMessage(
          `Your message has been delivered directly to ${personal.email}. Thank you for reaching out, I'll get back to you by email!`
        );
        // Clear the form after successful delivery
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setErrors({});
      } else {
        setSubmissionStatus('error');
        setUnconfiguredBackend(data.configured === false || response.status === 503);
        setStatusMessage(
          data.error ||
            `Delivery failed: No backend email delivery service is configured on this server to send messages to ${personal.email}.`
        );
      }
    } catch (err: any) {
      setSubmissionStatus('error');
      setUnconfiguredBackend(true);
      setStatusMessage(
        `Unable to reach email delivery service: ${err?.message || 'Server connection failed'}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Immediate mailto fallback so user never loses message
  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Opportunity / Collaboration'}`);
    const body = encodeURIComponent(
      `Hello Olinaf,\n\n${formData.message || ''}\n\n---\nFrom: ${formData.name || ''} (${formData.email || ''})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const openGmailDirectly = () => {
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject || 'Opportunity / Collaboration'}`);
    const body = encodeURIComponent(
      `Hello Olinaf,\n\n${formData.message || ''}\n\n---\nFrom: ${formData.name || ''} (${formData.email || ''})`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="contact" className="py-24 border-t border-zinc-800/80 bg-zinc-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Let's Connect and Build Something.
          </h2>
          <div className="w-12 h-1 bg-blue-500 rounded-full mt-3 mb-4" />
          <p className="text-zinc-400 text-base leading-relaxed">
            I'm open to opportunities, collaborations, internships, and projects involving software development, AI, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 space-y-6">
              <h3 className="text-lg font-bold text-white">
                Contact Channels
              </h3>

              {/* Email Card with Mailto link and Copy button */}
              <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-xs text-zinc-500 font-mono">Email Address</p>
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono">Professional Network</p>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      LinkedIn Profile
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 flex items-center justify-between group transition-colors block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-zinc-800/80 border border-zinc-700 text-zinc-300 flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-mono">GitHub Profile (@akeniya4u)</p>
                    <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      github.com/akeniya4u
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
              </a>

              {/* Location indicator */}
              <div className="pt-4 border-t border-zinc-800/80 text-xs text-zinc-400 flex items-center justify-between">
                <span>Based in Ethiopia</span>
                <span className="font-mono text-blue-400">Haramaya University</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/90 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Have a question, project idea, or opportunity? Send me a message. I'll get back to you by email.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                {/* Your Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wide">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Abebe Bikila"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-blue-500'
                    } text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Your Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wide">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@company.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-blue-500'
                    } text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wide">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    disabled={isSubmitting}
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Inquiry / Web Development Project"
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-blue-500'
                    } text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all disabled:opacity-50`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, collaboration idea, or opportunity..."
                    className={`w-full px-4 py-2.5 rounded-xl bg-zinc-950 border ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-zinc-800 focus:border-blue-500'
                    } text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all resize-y disabled:opacity-50`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Success Message: Shown ONLY after verified successful delivery */}
                {submissionStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs sm:text-sm text-emerald-200 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Delivery Confirmed</p>
                      <p className="mt-1 text-xs text-zinc-300">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {/* Error Message: Shown if delivery fails or no service configured */}
                {submissionStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 text-xs sm:text-sm text-red-300 space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-200">Delivery Status</p>
                        <p className="text-xs text-zinc-300 mt-0.5">{statusMessage}</p>
                      </div>
                    </div>

                    {unconfiguredBackend && (
                      <div className="pt-2 border-t border-red-900/40">
                        <p className="text-xs text-zinc-300 mb-2">
                          Send directly from your email app with your message pre-filled:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={triggerMailtoFallback}
                            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Open Default Email App</span>
                          </button>
                          <button
                            type="button"
                            onClick={openGmailDirectly}
                            className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer"
                          >
                            <span>Open in Gmail</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors shadow-lg shadow-blue-600/25 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-zinc-400">
                    Messages will be delivered directly to{' '}
                    <a
                      href={`mailto:${personal.email}`}
                      className="text-blue-400 hover:underline font-mono"
                    >
                      {personal.email}
                    </a>
                    .
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
