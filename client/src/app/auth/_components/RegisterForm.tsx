"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RegisterType } from "@/types";  // Ajoutez le schéma de validation RegisterType
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { startTransition, useState } from "react";
import { register } from "@/actions/register";

const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>("")
  const [success, setSuccess] = useState<string | undefined>("")
  
  const form = useForm<z.infer<typeof RegisterType>>({
    resolver: zodResolver(RegisterType),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof RegisterType>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values)
        .then((data) => {
          setError(data.error);
          setSuccess(data.success);
        })
        .catch((err) => {
          setError(err.message);
        });
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto my-16">
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create your account by filling in the details below.</CardDescription>
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
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="johndoe" />
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
                    <Input {...field} type="password" placeholder="*******" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
            <FormError message={error || ""} />
            <FormSuccess message={success || ""} />
            <Button type="submit" className="w-full">Sign Up</Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Already have an account? <a href="#" className="text-primary hover:underline">Log in</a>
        </p>
      </CardFooter>
    </Card>
  );
}

export default RegisterForm;
