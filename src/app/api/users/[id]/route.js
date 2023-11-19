import { Users } from "@/utility/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  //   return NextResponse.json({ Test: "Test Pass" }, { status: 200 });
  //   console.log(req);
  const { id } = params;
  const user = Users.filter((item) => item.id == id);
  if (user.length > 0) {
    return NextResponse.json(
      { data: user[0], message: "Users Found Successfully", success: true },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { data: null, message: "Sorry User Not Found", success: false },
    { status: 200 }
  );
}
