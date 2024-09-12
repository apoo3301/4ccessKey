import { NextResponse } from "next/server";
import User from "@/data/schemas/user";
import connect from "@/data/database";

export const GET = async () => {
    try {
        await connect();
        const users = await User.find();
        return new NextResponse(JSON.stringify(users), { status: 200 });
    } catch (error : any) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
    }
}