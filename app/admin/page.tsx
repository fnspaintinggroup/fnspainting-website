import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "F&S Painting Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  redirect("/studio");
}
