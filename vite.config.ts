import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';

function contactApiPlugin(): Plugin {
  return {
    name: 'contact-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, error: 'Method not allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const data = JSON.parse(body || '{}');
            const { name, email, subject, message } = data;

            if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  error: 'All fields (Name, Email, Subject, Message) are required.',
                })
              );
              return;
            }

            const resendApiKey = process.env.RESEND_API_KEY;

            if (!resendApiKey) {
              res.statusCode = 503;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  configured: false,
                  error:
                    'No backend email delivery service is configured. Please configure RESEND_API_KEY in your environment to enable server-side dispatch to olinaftesfayea@gmail.com.',
                })
              );
              return;
            }

            // Real email dispatch via Resend API
            const response = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                Authorization: `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: 'olinaftesfayea@gmail.com',
                reply_to: email.trim(),
                subject: `[Portfolio Inquiry] ${subject.trim()}`,
                text: `Sender Name: ${name.trim()}\nSender Email: ${email.trim()}\n\nMessage:\n${message.trim()}`,
              }),
            });

            if (response.ok) {
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  message: 'Your message has been delivered successfully to olinaftesfayea@gmail.com.',
                })
              );
            } else {
              const errData: any = await response.json().catch(() => ({}));
              res.statusCode = 502;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: false,
                  error: errData.message || 'Email delivery service encountered an error dispatching the message.',
                })
              );
            }
          } catch (e: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: false,
                error: e?.message || 'Internal server error processing contact submission.',
              })
            );
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), contactApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
