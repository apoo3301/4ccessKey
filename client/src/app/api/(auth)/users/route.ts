import { NextResponse } from "next/server";
import User from "@/data/schemas/user";
import connect from "@/data/database";
import { Types } from "mongoose";

const ObjectId = require('mongoose').Types.ObjectId;

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

export const PATCH = async (request : Request) => {
    try {
        const body = await request.json();
        const { userId, newUsername } = body;
        await connect();
        
        if (!userId || !newUsername) {
            return new NextResponse(JSON.stringify({ message: 'ID or new username not found' }), { status: 400 });
        }

        if (!Types.ObjectId.isValid(userId)) {
            return new NextResponse(JSON.stringify({ message: 'Invalid ID' }), { status: 400 });
        }

        const updatedUser = await User.findOneAndUpdate({ _id: new ObjectId(userId) }, { username: newUsername }, { new: true });
        if (!updatedUser) {
            return new NextResponse(JSON.stringify({ message: 'User not found' }), { status: 400 });
        }
        return new NextResponse(JSON.stringify({ message: 'User updated', user: updatedUser }), { status: 200 });
    } catch (error: any) {
        return new NextResponse(JSON.stringify(error), { status: 500 });
    }
}