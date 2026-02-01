import { FooterBottom } from "./FooterBottom";
import { FooterTop } from "./FooterTop";

export function Footer() {
  return (
    <footer className="w-full bg-white">
      <FooterTop />
      <FooterBottom />
    </footer>
  );
}
