import { NextResponse } from "next/server";
import User from "@/app/(models)/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //confirm data exist
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    //check if duplicate emails exist
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();
    //this aboe works only if the email is exactly the same, thus all the email should be stored as small letters - no caps to assures that this works

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashPassword;

    return NextResponse.json(
      { message: "Success: User Created" },
      { status: 201 }
    );
  } catch (error) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Error",
        err,
      },
      { status: 500 }
    );
  }
}
