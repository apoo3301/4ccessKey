import * as v from "valibot";

export const SignInSchema = v.object({
    email: v.pipe(
        v.string("Your email must be a string."),
        v.nonEmpty("Please enter your email."),
        v.email("Please enter a valid email.")
    ),
    password: v.pipe(
        v.string("Your password must be a string."),
        v.nonEmpty("Please enter your password.")
    ),
});

export type SignInInput = v.InferInput<typeof SignInSchema>;