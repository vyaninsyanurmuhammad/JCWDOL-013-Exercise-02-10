"use client";

import ContentLayout from "@/components/layouts/content-layout";
import Photo from "@/assets/vyan_i.jpg";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import ContactLlayout from "@/components/layouts/contact-layout";

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen overflow-x-hidden bg-slate-950 flex flex-col 2xl:justify-center 2xl:items-center">
        <div className="flex flex-col 2xl:flex-row w-full h-fit px-12 md:px-32 xl:px-60 py-12 md:py-36 gap-4">
          <div className="flex flex-col w-full h-full gap-4">
            <ContentLayout>
              <p className="text-white font-bold text-5xl sm:text-[79px] leading-snug pb-16 sm:pb-0">
                Bring Your Ideas To Life Through UI Design
              </p>
              <a
                className="absolute bottom-0 right-0 bg-[#8325fd] rounded-full px-6 py-3 mb-6 mr-6 hover:opacity-70"
                href="https://www.linkedin.com/in/vyaninsyanurmuhammad/"
              >
                <span className="text-white font-bold text-xl">Hire Me 👋</span>
              </a>
            </ContentLayout>
            <div className="flex flex-col sm:flex-row gap-4 h-full w-full">
              <ContentLayout className="!h-full !bg-[#00c39a] gap-3 justify-center items-center text-white">
                <span className="text-6xl font-bold">1+</span>
                <span className="text-lg font-bold align-middle text-center">
                  Years Experience
                </span>
              </ContentLayout>
              <ContentLayout className="!h-full !bg-[#ffbf3c] gap-3 justify-center items-center">
                <span className="text-6xl font-bold">🐱‍🏍</span>
                <span className="text-lg font-bold align-middle text-center">
                  Fullstack Developer
                </span>
              </ContentLayout>
              <ContentLayout className="!h-full !bg-[#fe6d79] gap-3 justify-center items-center text-white">
                <span className="text-6xl font-bold">50+ </span>
                <span className="text-lg font-bold align-middle text-center">
                  Repositories
                </span>
              </ContentLayout>
            </div>
          </div>
          <div className="flex flex-col w-full h-full gap-4">
            <ContentLayout>
              <p className="text-white font-bold text-xl">
                Vyan <span className="text-white/30">Insya Nur Muhammad</span>
              </p>
            </ContentLayout>
            <div className="flex flex-col sm:flex-row w-full h-full gap-4">
              <div className="flex w-full h-full rounded-3xl overflow-hidden group">
                <img
                  className="object-cover group-hover:scale-125 transition-all ease-in-out duration-1000"
                  src={Photo.src}
                  alt="photo-profile"
                />
              </div>
              <div className="flex flex-col w-full h-full gap-4">
                <ContentLayout>
                  <p className="text-white font-bold text-xl">
                    Pati<span className="text-white/30"> 1999</span>
                  </p>
                </ContentLayout>
                <ContentLayout className="!h-full">
                  <p className="text-white font-bold text-xl">
                    Asempapan
                    <span className="text-white/30"> Pati</span>
                  </p>
                  <iframe
                    className="h-full w-full rounded-2xl"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2458.7004069951895!2d111.1005213!3d-6.6696855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e772b2e67469f1d%3A0xb3db8d8e53efd835!2sAIDA%20BATIK!5e1!3m2!1sid!2sid!4v1708765771164!5m2!1sid!2sid"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </ContentLayout>
                <ContentLayout className="!flex-row !gap-0 justify-between">
                  <ContactLlayout
                    className="!bg-[#2867b2]"
                    href="https://www.linkedin.com/in/vyaninsyanurmuhammad/"
                  >
                    <LinkedinLogo size={32} className="text-white" />
                  </ContactLlayout>
                  <ContactLlayout href="https://github.com/vyaninsyanurmuhammad">
                    <GithubLogo size={32} className="text-white" />
                  </ContactLlayout>
                  <ContactLlayout href="https://www.instagram.com/vyaninsyanurmuhammad/">
                    <InstagramLogo size={32} className="text-white" />
                  </ContactLlayout>
                  <ContactLlayout
                    className="!bg-[#25d366]"
                    href="https://wa.link/5zk564"
                  >
                    <WhatsappLogo size={32} className="text-white" />
                  </ContactLlayout>
                </ContentLayout>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
