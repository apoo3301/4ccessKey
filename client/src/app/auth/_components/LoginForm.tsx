"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LoginType } from "@/types";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { startTransition, useState } from "react";
import { login } from "@/actions/login";
import { error } from "console";

const LoginForm = () => {
  const [ error, setError ] = useState<string | undefined>("")
  const [ success, setSuccess ] = useState<string | undefined>("")
  const form = useForm<z.infer<typeof LoginType>>({
    resolver: zodResolver(LoginType),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof LoginType>) => {
    setError("")
    setSuccess("")

    startTransition(() => {
      login(values)
        .then((data) => {
          setError(data.error)
          setSuccess(data.success)
        })
        .catch((err) => {
          setError(err.message)
        });
    });
  };
  
  return (
    <Card className="w-full max-w-md mx-auto my-16">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your email and password to access your account.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="xxxxx.xxxx@xyz.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <div className="space-y-4">
              <FormField control={form.control} name="password" render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} type="password" placeholder="xxxxx" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormError message={error || ""} />
            <FormSuccess message={success || ""} />
            <Button type="submit" className="w-full">Log In</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
        </p>
      </CardFooter>
    </Card>
  );
}

export default LoginForm;
