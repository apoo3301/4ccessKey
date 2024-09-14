// import { hashPassword } from "@/security/hash";
// // import { eq } from "drizzle-orm/expressions";
// import { NextResponse } from "next/server";
// import { users } from "@/data/schema";
// import db from "@/data/database";

// export const GET = async () => {
//   try {
//     const allUsers = await db.select().from(users);
//     // return new NextResponse(JSON.stringify(allUsers), { status: 200 });
//   } catch (error: any) {
//     console.error("Error fetching users:", error);
//     return new NextResponse(
//       JSON.stringify({
//         message: "Internal Server Error",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };

// export const POST = async (request: Request) => {
//   try {
//     const body = await request.json();
//     const { username, email, password } = body;

//     if (!username || !email || !password) {
//       return new NextResponse(
//         JSON.stringify({ message: "Missing required fields" }),
//         { status: 400 }
//       );
//     }

//     const hashedPassword = hashPassword(password);
//     const newUser = await db
//       .insert(users)
//       .values({ username, email, password: hashedPassword })
//       .returning();

//     return new NextResponse(
//       JSON.stringify({ message: "User created", user: newUser[0] }),
//       { status: 201 }
//     );
//   } catch (error: any) {
//     return new NextResponse(
//       JSON.stringify({ message: "Internal Server Error", error: error.message }),
//       { status: 500 }
//     );
//   }
// };

// export const PATCH = async (request: Request) => {
//   try {
//     const body = await request.json();
//     const { userId, newUsername } = body;

//     if (!userId || !newUsername) {
//       return new NextResponse(
//         JSON.stringify({ message: "ID or new username not found" }),
//         { status: 400 }
//       );
//     }

//     const [existingUser] = await db
//       .select()
//       .from(users)
//       .where(eq(users.id, userId))
//       .limit(1);
//     if (!existingUser) {
//       return new NextResponse(JSON.stringify({ message: "User not found" }), {
//         status: 404,
//       });
//     }

//     const updatedUser = await db
//       .update(users)
//       .set({ username: newUsername })
//       .where(eq(users.id, userId))
//       .returning();

//     return new NextResponse(
//       JSON.stringify({ message: "User updated", user: updatedUser[0] }),
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Error updating user:", error);
//     return new NextResponse(
//       JSON.stringify({
//         message: "Internal Server Error",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };

// export const DELETE = async (request: Request) => {
//   try {
//     const { searchParams } = new URL(request.url);
//     const userId = searchParams.get("userId");

//     if (!userId) {
//       return new NextResponse(
//         JSON.stringify({ message: "User ID not found" }),
//         { status: 400 }
//       );
//     }

//     const deletedUser = await db
//       .delete(users)
//       .where(eq(users.id, userId))
//       .returning();

//     if (deletedUser.length === 0) {
//       return new NextResponse(JSON.stringify({ message: "User not found" }), {
//         status: 404,
//       });
//     }

//     return new NextResponse(
//       JSON.stringify({ message: "User deleted successfully" }),
//       { status: 200 }
//     );
//   } catch (error: any) {
//     console.error("Error deleting user:", error);
//     return new NextResponse(
//       JSON.stringify({
//         message: "Internal Server Error",
//         error: error.message,
//       }),
//       { status: 500 }
//     );
//   }
// };