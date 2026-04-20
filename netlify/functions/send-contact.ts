import { Resend } from "resend";
import type { Handler } from "@netlify/functions";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  try {
    const { name, email, message } = JSON.parse(event.body || "{}");

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Email is required" }),
      };
    }

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["ragid.rafi@gmail.com"],
      replyTo: email,
      subject: `פניה חדשה מהאתר${name ? ` - ${name}` : ""}`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>פניה חדשה מאתר רגיד</h2>
          ${name ? `<p><strong>שם:</strong> ${name}</p>` : ""}
          <p><strong>מייל:</strong> ${email}</p>
          ${message ? `<p><strong>פרטי הפניה:</strong></p><p style="white-space: pre-wrap;">${message}</p>` : ""}
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("send-contact error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
