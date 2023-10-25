import { type PropsWithChildren } from "react";
import { Navbar } from "../../components/navbar";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
