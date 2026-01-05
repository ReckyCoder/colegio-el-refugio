"use server";

import type { FormContact } from "@/types/types";

const nodemailer = require("nodemailer");

export async function sendFormData(data: FormContact) {
    
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    try {
        await transporter.sendMail({
            from: `"${data.nombre}" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            replyTo: data.correo as string,
            subject: "Consulta desde el formulario",
            text: data.mensaje,
            html: `<b>Mensaje:</b> <p>${data.mensaje}</p>`,
        });

        return { success: true };
    } catch (error) {
        return { success: false };
    }
}