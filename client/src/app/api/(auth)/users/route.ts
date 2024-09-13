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

export const POST = async (request : Request) => {
    try {
        const body = await request.json();
        await connect();
        const userUser = new User(body);
        await userUser.save();

        return new NextResponse(JSON.stringify({ message: 'User created', user:userUser }), { status: 200 });
    } catch (error: any) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
    }
}