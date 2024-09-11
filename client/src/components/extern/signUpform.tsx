"use client";

import { type SignUpInput, SignUpSchema } from "@/validators/signUpValidators";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signupUserAction } from "@/actions/auth/signUpUserAction";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const SignupForm = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const form = useForm<SignUpInput>({
    resolver: valibotResolver(SignUpSchema),
    defaultValues: { name: "", email: "", password: "" },
  });

  const { handleSubmit, control, formState, setError } = form;

  const submit = async (values: SignUpInput) => {
    const res = await signupUserAction(values);

    if (res.success) {
      setSuccess(true);
      router.push("/agency/auth/signup/success");
    } else {
      switch (res.statusCode) {
        case 400:
          const nestedErrors = res.error.nested;

          for (const key in nestedErrors) {
            setError(key as keyof SignUpInput, {
              message: nestedErrors[key]?.[0],
            });
          }
          break;
        case 500:
        default:
          const error = res.error || "Internal Server Error";
          setError("password", { message: error });
      }
    }
  };

  if (success) {
    return (
      <div>
        <p>Utilisateur créé avec succès !</p>

        <span>
          Cliquez{" "}
          <Button variant="link" size="sm" className="px-0" asChild>
            <Link href="/agency/auth/signin">ici</Link>
          </Button>{" "}
          pour vous connecter.
        </span>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(submit)}
        className="max-w-[400px] space-y-8"
        autoComplete="false"
      >
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input type="text" placeholder="e.g. John Smith" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. john.smith@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mot de passe</FormLabel>
              <FormControl>
                <Input type="password" placeholder="e.g. ********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={formState.isSubmitting}
          className="w-full"
        >
          S'inscrire
        </Button>
      </form>
    </Form>
  );
};
