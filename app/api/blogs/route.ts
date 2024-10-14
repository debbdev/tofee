import { NextResponse } from "next/server";
import { connect } from "@/app/api/db/db";
import BlogModel from "@/app/models/blog";
export async function GET() {
  try {
    await connect();
    const blogs = await BlogModel.find();
    return NextResponse.json(blogs);
  } catch (error) {
    return NextResponse.error();
  }
}
