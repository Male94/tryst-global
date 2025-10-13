import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { logError } from "@/app/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, project, message } = await request.json();

    // Create transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // STARTTLS negotiates encryption after connection
      auth: {
        user: "maleeshpamuditha@gmail.com", // your Gmail address
        pass: "eygzwsxgbnmqouda", // Gmail App Password, not regular password
      },
      logger: true,
      debug: true,
    });

    const mailOptions = {
      from: `"${name}" <${email}>`, // who the email appears from
      to: "MarketingSL@trystglobal.com", // recipient
      subject: `New Project Inquiry from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Project Type: ${project}
            Message:
            ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error: unknown) {
    // Type guard to safely access error properties
    const err = error instanceof Error ? error : new Error(String(error));

    // console.log(err);
    logError("Email sending failed", {
      message: err.message,
      stack: err.stack,
    });

    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
