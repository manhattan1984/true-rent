import { createClient } from "@/utils/supabase-server";
import "server-only";
import SupabaseProvider from "./(context)/supabase-provider";
import SupabaseListener from "./(context)/supabase-listener";
import "./globals.css";
import Header from "./(components)/Header";
import MenuProvider from "./(context)/MenuContext";
import Menu from "./(components)/Menu";

export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  const links = [
    { name: "Home", link: "/" },
    { name: "Sign In", link: "/signin" },
  ];

  const accessToken = session?.access_token;
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-neutral-100">
        <SupabaseProvider accessToken={accessToken}>
          <SupabaseListener serverAccessToken={accessToken} />
          <MenuProvider>
            <Menu links={links} />
            <Header token={accessToken} id={session?.user.id} links={links} />
            <div className="mt-16">{children}</div>
          </MenuProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
