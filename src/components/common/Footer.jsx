import { BackToTop } from './footer/BackToTop';
import { Copyright } from './footer/Copyright';
import { FooterNav } from './footer/FooterNav';

export const Footer = () => {
  return (
    <>
      <section className="container mx-auto px-4">
        <FooterNav></FooterNav>
      </section>

      <div className="relative border-t border-t-neutral-500 hover:text-cyan-500 hover:border-cyan-500 animate-pulse">
        <BackToTop></BackToTop>
      </div>

      <section className="container mx-auto px-4">
        <Copyright></Copyright>
      </section>
    </>
  );
};
