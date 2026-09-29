import nodemailer from "nodemailer";

export interface ContactInquiryPayload {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  serviceInterest?: string;
  message: string;
  source?: string;
}

export function getRecipientEmail(): { email: string; isOverride: boolean } {
  const override = process.env.CONTACT_EMAIL_OVERRIDE?.trim();
  if (override && override.length > 0) {
    return { email: override, isOverride: true };
  }
  const defaultRecipient = process.env.CONTACT_DEFAULT_RECIPIENT?.trim() || "info@coltech.co";
  return { email: defaultRecipient, isOverride: false };
}

export function createMailTransporter() {
  const host = process.env.SMTP_HOST || "mail.tajcorporation.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER || "no-reply@tajcorporation.com";
  const pass = process.env.SMTP_PASS || "PnCFjR6Wf4IYvI5o";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactInquiryEmail(payload: ContactInquiryPayload) {
  const { email: recipientEmail, isOverride } = getRecipientEmail();
  const transporter = createMailTransporter();
  const fromAddress = process.env.SMTP_FROM || "no-reply@tajcorporation.com";
  const fromHeader = `"COLTECH Inquiry Desk" <${fromAddress}>`;

  const safeName = escapeHtml(payload.name || "N/A");
  const safeEmail = escapeHtml(payload.email || "N/A");
  const safeOrg = escapeHtml(payload.organization || "Not Specified");
  const safePhone = escapeHtml(payload.phone || "Not Provided");
  const safeService = escapeHtml(payload.serviceInterest || "General Systems Architecture");
  const safeSource = escapeHtml(payload.source || "Website Inquiry Form");
  const safeMessage = escapeHtml(payload.message || "").replace(/\n/g, "<br/>");

  const timestamp = new Date().toLocaleString("en-PK", {
    timeZone: "Asia/Karachi",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const subject = `[COLTECH Inquiry] ${payload.serviceInterest || "Consultation Request"} — ${payload.organization || payload.name}`;

  const textBody = `
============================================================
COLTECH - NEW ENTERPRISE CONSULTATION INQUIRY
============================================================

${isOverride ? `[NOTE: ROUTING OVERRIDE ACTIVE]\nDelivered to: ${recipientEmail}\nProduction Destination: info@coltech.co\n------------------------------------------------------------\n` : ""}
CONTACT DETAILS:
- Full Name: ${payload.name}
- Corporate Email: ${payload.email}
- Organization / Company: ${payload.organization || "Not Specified"}
- Phone / WhatsApp: ${payload.phone || "Not Provided"}
- Discipline / Service: ${payload.serviceInterest || "General Systems Architecture"}
- Submission Time: ${timestamp} (PKT)
- Intake Source: ${payload.source || "Website Form"}

------------------------------------------------------------
PROJECT SCOPE / REQUIREMENTS SUMMARY:
------------------------------------------------------------
${payload.message}

============================================================
Reply directly to this email to contact the inquirer: ${payload.email}
Circle of Life (COL) Technologies (COLTECH) • Automated Dispatch
============================================================
`.trim();

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f6f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e293b;line-height:1.6;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f4f6f9;padding:30px 15px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 20px rgba(0,26,57,0.08);border:1px solid #e2e8f0;">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color:#001a39;padding:28px 32px;text-align:left;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <span style="display:inline-block;font-size:11px;font-weight:700;color:#1CB08F;letter-spacing:0.18em;text-transform:uppercase;font-family:monospace;background:rgba(28,176,143,0.15);padding:4px 10px;border-radius:20px;margin-bottom:8px;">
                      ● NEW INQUIRY DISPATCH
                    </span>
                    <h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                      COLTECH Enterprise Consultation Request
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${
            isOverride
              ? `
          <!-- Dev Routing Notice -->
          <tr>
            <td style="padding:14px 32px;background-color:#FEF3C7;border-bottom:1px solid #FCD34D;">
              <p style="margin:0;font-size:12px;color:#92400E;font-family:monospace;line-height:1.5;">
                <strong>[DEVELOPMENT / DEPLOYMENT OVERRIDE ACTIVE]</strong><br/>
                Inquiry routed to: <strong>${escapeHtml(recipientEmail)}</strong><br/>
                <em>Production destination (when variable is cleared): <strong>info@coltech.co</strong></em>
              </p>
            </td>
          </tr>
          `
              : ""
          }

          <!-- Main Content -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 20px 0;font-size:14px;color:#475569;">
                A new technical consultation request has been submitted through the COLTECH enterprise portal. Details are outlined below:
              </p>

              <!-- Inquirer Details Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;margin-bottom:24px;border:1px solid #e2e8f0;border-radius:10px;overflow:hidden;">
                <tr style="background-color:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;width:38%;">
                    Inquirer Name
                  </td>
                  <td style="padding:12px 16px;font-size:14px;font-weight:600;color:#001a39;">
                    ${safeName}
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Enterprise / Organization
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1e293b;font-weight:600;">
                    ${safeOrg}
                  </td>
                </tr>
                <tr style="background-color:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Corporate Email
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#001a39;">
                    <a href="mailto:${safeEmail}" style="color:#1CB08F;font-weight:600;text-decoration:none;">
                      ${safeEmail}
                    </a>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding:12px 16px;font-size:14px;color:#1e293b;font-family:monospace;">
                    ${safePhone !== "Not Provided" ? `<a href="tel:${safePhone}" style="color:#001a39;text-decoration:none;font-weight:600;">${safePhone}</a>` : safePhone}
                  </td>
                </tr>
                <tr style="background-color:#f8fafc;border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Discipline / Interest
                  </td>
                  <td style="padding:12px 16px;font-size:13px;color:#001a39;font-weight:600;">
                    <span style="display:inline-block;background-color:#E6F7F3;color:#0D7A61;padding:3px 8px;border-radius:6px;font-size:12px;">
                      ${safeService}
                    </span>
                  </td>
                </tr>
                <tr style="border-bottom:1px solid #e2e8f0;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Submission Timestamp
                  </td>
                  <td style="padding:12px 16px;font-size:12px;color:#64748b;font-family:monospace;">
                    ${timestamp} (PKT)
                  </td>
                </tr>
                <tr style="background-color:#f8fafc;">
                  <td style="padding:12px 16px;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.05em;">
                    Intake Channel
                  </td>
                  <td style="padding:12px 16px;font-size:12px;color:#64748b;font-family:monospace;">
                    ${safeSource}
                  </td>
                </tr>
              </table>

              <!-- Project Scope / Message Block -->
              <div style="margin-top:24px;margin-bottom:28px;">
                <span style="display:block;font-size:12px;font-weight:700;color:#001a39;text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">
                  Deployment Scope / Inquiry Message:
                </span>
                <div style="background-color:#f8fafc;border-left:4px solid #1CB08F;border-top:1px solid #e2e8f0;border-right:1px solid #e2e8f0;border-bottom:1px solid #e2e8f0;padding:16px 20px;border-radius:0 10px 10px 0;font-size:14px;color:#1e293b;white-space:pre-wrap;line-height:1.6;">
${safeMessage || "<em>No additional details provided.</em>"}
                </div>
              </div>

              <!-- Quick Action Button -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:10px;">
                <tr>
                  <td style="border-radius:8px;background-color:#1CB08F;">
                    <a href="mailto:${safeEmail}?subject=Re:%20COLTECH%20Consultation%20Inquiry%20-%20${encodeURIComponent(payload.organization || payload.name)}" style="display:inline-block;padding:12px 24px;font-size:13px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:8px;">
                      Reply Directly to Inquirer &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#001a39;padding:24px 32px;text-align:center;border-top:1px solid rgba(255,255,255,0.08);">
              <p style="margin:0 0 6px 0;font-size:12px;font-weight:600;color:#ffffff;">
                Circle of Life (COL) Technologies (COLTECH)
              </p>
              <p style="margin:0;font-size:11px;color:#94a3b8;font-family:monospace;">
                Automated Systems Architecture Dispatch Desk &bull; info@coltech.co
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

  const info = await transporter.sendMail({
    from: fromHeader,
    to: recipientEmail,
    replyTo: payload.email,
    subject,
    text: textBody,
    html: htmlBody,
  });

  return {
    success: true,
    messageId: info.messageId,
    routedTo: recipientEmail,
    isOverride,
  };
}
