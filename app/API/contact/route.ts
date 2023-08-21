import { NextRequest, NextResponse } from "next/server";
import EmailSend from "@/app/api/contact/EmailSend";
import { formState } from "@/app/contact/page";

export async function POST(req: NextRequest, res: NextResponse) {
  const { method } = req;
  const { formData }: { formData: formState } = await req.json();
  const body = `Message from ${formData.name} via ${formData.email} on Portfolio site.
  
Message: ${formData.message}`;

  if (method === "POST") {
    console.log("here");
    await EmailSend(formData.subject, body);
    return NextResponse.json({ msg: "success" }, { status: 200 });
  }
}
