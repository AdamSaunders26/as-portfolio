import { NextRequest, NextResponse } from "next/server";
// import EmailSend from "./EmailSend";
import sendEmail from "./EmailSend";
import { formState } from "@/app/contact/page";
// import Email from "vercel-email";

// export const runtime = "edge";

export async function POST(req: NextRequest, res: NextResponse) {
  //   const { method } = req;
  const { formData }: { formData: formState } = await req.json();

  console.log(formData);
  const body = `Message from ${formData.name} via ${formData.email} on Portfolio site.
  
Message: ${formData.message}`;

  console.log("u made it bro!");
  try {
    await sendEmail(formData.subject, body);
    return NextResponse.json({ msg: "success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "it broke" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ msg: "compiled, ur welcome" });
}
