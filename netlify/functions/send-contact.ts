import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: Request) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { name, email, message } = await req.json();

    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
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

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact error:", err);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

export const config = { path: "/api/send-contact" };
