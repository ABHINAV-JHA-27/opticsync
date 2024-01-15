import {
    LoginLink,
    RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Page() {
    return (
        <div className="h-screen">
            <LoginLink>Sign in</LoginLink>
            <RegisterLink>Sign up</RegisterLink>
        </div>
    );
}
