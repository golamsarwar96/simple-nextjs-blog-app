import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="container mx-auto flex justify-between items-center px-6 py-4 bg-gray-200">
        <div>
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link href="/" prefetch={true}>
            Home
          </Link>
          <Link href="/profile" prefetch={true}>
            Profile
          </Link>
          <Link href="" prefetch={true}>
            Login
          </Link>
          <Link href="" prefetch={true}>
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
