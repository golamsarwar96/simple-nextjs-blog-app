import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  console.log(user);
  return (
    <div>
      <nav className="container mx-auto flex justify-between items-center px-6 py-4 bg-gray-200">
        <div>
          <h1 className="text-3xl font-bold">Blog App</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href="/" prefetch={true}>
            Home
          </Link>
          <Link href="/profile" prefetch={true}>
            Profile
          </Link>
          {user ? (
            <>
              <LogoutLink href="/api/auth/logout">Logout</LogoutLink>
            </>
          ) : (
            <>
              <LoginLink href="/api/auth/login" prefetch={true}>
                Login
              </LoginLink>
              <RegisterLink href="/api/auth/register" prefetch={true}>
                Register
              </RegisterLink>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
