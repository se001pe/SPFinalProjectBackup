import dbConnect from "@/library/db";
import Test from "@/models/Test";
import { waitForDebugger } from "inspector";
import { NextResponse } from "next/server";

export async function GET() {
    await dbConnect();

    await Test.create({ message: "Hello from AITE"});
    
    const latest = await Test.findOne().sort({ _id: -1});
    
    return NextResponse.json({ok: true, latest});
  }