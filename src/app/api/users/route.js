import { Users } from "@/utility/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  //   return NextResponse.json({ Test: "Test Pass" }, { status: 200 });
  const data = Users;
  return NextResponse.json(
    { data, message: "Users Found Successfully", success: true },
    { status: 200 }
  );
}

export async function POST(req) {
  //   return NextResponse.json({ Test: "Test Pass" }, { status: 200 });
  const data = await req.json();
  console.log(data, "===============");
  if (!data || !data.name) {
    return NextResponse.json(
      {
        error: "name is missing",
        message: "Please Fill The Mandatory Fields",
        success: false,
      },
      { status: 400 }
    );
  }
  return NextResponse.json(
    { data, message: "User Created Successfully", success: true },
    { status: 200 }
  );
}
