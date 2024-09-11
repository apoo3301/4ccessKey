import * as v from "valibot";

export const SignUpSchema = v.object({
    name: v.optional(
        v.pipe(
            v.string("Your name must be a string."),
            v.nonEmpty("Please enter your name."),
            v.minLength(3, "Your name must be at least 3 characters long.")
        )
    ),
    email: v.pipe(
        v.string("Your email must be a string."),
        v.nonEmpty("Please enter your email."),
        v.email("Please enter a valid email.")
    ),
    password: v.pipe(
        v.string("Your password must be a string."),
        v.nonEmpty("Please enter your password."),
        v.maxLength(8, "Your password must be at most 8 characters long.")
    )
});

export type SignUpInput = v.InferInput<typeof SignUpSchema>;