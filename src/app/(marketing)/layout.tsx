import { type PropsWithChildren } from "react";
import { Provider } from "react-wrap-balancer";
import { Navbar } from "../../components/navbar";
import { Footer } from "./_components/footer";

export default function MarketingLayout({ children }: PropsWithChildren) {
  return (
    <Provider>
      <main>
        <Navbar />
        {children}
        <Footer />
      </main>
    </Provider>
  );
}
