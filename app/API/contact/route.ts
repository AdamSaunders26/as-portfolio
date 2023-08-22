import { NextRequest, NextResponse } from "next/server";
import sendEmail from "./EmailSend";
import { formState } from "@/app/contact/page";

export async function POST(req: NextRequest, res: NextResponse) {
  const { formData }: { formData: formState } = await req.json();
  const body = `Message from ${formData.Name} via ${formData.Email} on Portfolio site.
  
Message: ${formData.Message}`;

  try {
    if (formData.Subject) {
      await sendEmail(formData.Subject, body);
      return NextResponse.json({ msg: "success" }, { status: 200 });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "it broke" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ msg: "compiled, ur welcome" });
}
