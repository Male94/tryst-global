import { getServerSession } from "next-auth";
// import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import { authOptions } from "./authOptions";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);

  // if (!session?.user?.isAdmin) {
  //   // console.log(session);
  //   return redirect("/admin/login");
  // }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Products Module */}
        <Link
          href="/admin/products/upload"
          className="p-6 bg-white rounded shadow hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Products</h2>
          <p>Upload and manage products</p>
        </Link>

        {/* Users Module */}
        <Link
          href="/admin/users"
          className="p-6 bg-white rounded shadow hover:bg-gray-50 transition"
        >
          <h2 className="text-xl font-semibold mb-2">Users</h2>
          <p>Manage admin and regular users</p>
        </Link>

        {/* Add more modules here */}
      </div>
    </div>
  );
}
