import { NextResponse } from "next/server";
import { connect } from "@/app/api/db/db";
import FAQModel from "@/app/models/faq";

export async function GET() {
  try {
    await connect();
    const faqs = await FAQModel.find();
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.error();
  }
}
