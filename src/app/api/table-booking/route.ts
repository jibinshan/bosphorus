/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name: string;
      email: string;
      phone: string;
      guests: string;
      date: string;
      time: string;
      request: string;
    };
    const { name, email, phone, guests, date, time, request } = body;

    const smtpOptions = {
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    };

    const transporter = nodemailer.createTransport({
      ...smtpOptions,
    });

    const mailOptions = {
      from: `${process.env.EMAIL_FROM_PREFIX} Reservations <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Table Booking",
      text: `
        New booking received:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Guests: ${guests}
        Date: ${new Date(date).toLocaleDateString()}
        Time: ${time}
        Special Request: ${request || "None"}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Booking received successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 },
    );
  }
}
