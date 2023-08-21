import { NextRequest, NextResponse } from "next/server";
import EmailSend from "./EmailSend";
import { formState } from "@/app/contact/page";

export async function POST(req: NextRequest, res: NextResponse) {
  //   const { method } = req;
  const { formData }: { formData: formState } = await req.json();
  const body = `Message from ${formData.name} via ${formData.email} on Portfolio site.
  
Message: ${formData.message}`;

  console.log("u made it bro!");
  await EmailSend(formData.subject, body);
  return NextResponse.json({ msg: "success" }, { status: 200 });
}

export async function GET() {
  return NextResponse.json({ msg: "compiled, ur welcome" });
}
