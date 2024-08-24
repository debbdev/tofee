import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: username,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: myEmail,
      subject: `Contact Form Submission from ${name}`,
      text: message,
    });

    return NextResponse.json({ success: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message", details: (error as Error).message },
      { status: 500 }
    );
  }
}
