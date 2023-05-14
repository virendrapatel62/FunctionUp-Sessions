import Users from "@/components/Users";
import axios from "axios";
import Link from "next/link";

export default async function Home() {
  console.log("Home Page Rendering...");
  return (
    <main>
      <h1>Home Page</h1>
      <hr />

      <Link href={"/users"}>Go to Users</Link>
    </main>
  );
}
