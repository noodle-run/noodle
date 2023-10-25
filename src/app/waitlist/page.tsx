import { TypographyH1 } from "@/components/TypographyH1";
import { TypographyP } from "@/components/TypographyP";
import Balancer from "react-wrap-balancer";
import { WaitlistForm } from "./_forms/waitlist";

export default function Waitlist() {
  return (
    <div className="mx-auto max-w-screen-lg px-6 pt-3 md:pt-6 lg:pt-12 xl:pt-24">
      <div className="text-center">
        <TypographyH1 className="text-4xl md:text-5xl lg:text-6xl">
          <Balancer>
            Join the waitlist and transform your educational productivity.
          </Balancer>
        </TypographyH1>
        <TypographyP>
          <Balancer>
            By signing up to our waitlist, you will be first in line to know
            when we launch and getting early access.
          </Balancer>
        </TypographyP>
      </div>

      <WaitlistForm />
    </div>
  );
}
