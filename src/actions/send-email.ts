"use server";

import { Resend } from "resend";
import { type ContactSchema, contactSchema } from "@/schemas/contact-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactSchema) {
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { error: "invalid-data" as const };
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "sblmnrd@gmail.com",
      replyTo: parsed.data.email,
      subject: `${parsed.data.name} sent a message from your website`,
      text: `From: ${parsed.data.name} (${parsed.data.email})\n\n${parsed.data.message}`,
    });
    if (error) {
      return { error: "send-failed" as const };
    }
    return { success: true as const };
  } catch {
    return { error: "unknown" as const };
  }
}
