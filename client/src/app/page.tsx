import SignupForm from "@/components/extern/signUpForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="container max-w-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">Sign Up</h1>
        <SignupForm />
      </div>
    </div>
  );
}
