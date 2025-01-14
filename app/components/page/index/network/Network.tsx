import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { useGSAP } from "@gsap/react";
import Buble from "./Buble";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);
const Network = () => {
  // Referensi untuk elemen bubble
  const buble1Ref = useRef<HTMLDivElement>(null);
  const buble2Ref = useRef<HTMLDivElement>(null);
  const buble3Ref = useRef<HTMLDivElement>(null);
  const buble4Ref = useRef<HTMLDivElement>(null);
  const buble5Ref = useRef<HTMLDivElement>(null);
  const buble6Ref = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  // const bubleAnimation1 = () => {
  //   if (buble1Ref.current) {
  //     gsap.fromTo(
  //       buble1Ref.current,
  //       { x: "-100%", y: "-100%", opacity: 0 }, // Awal: kiri atas
  //       {
  //         x: "25%",
  //         y: "100%",
  //         opacity: 1,
  //         duration: 2,
  //         ease: "power3.inOut",
  //         scrollTrigger: {
  //           trigger: buble1Ref.current,
  //           scrub: true,
  //           // markers: true,

  //           onLeave: () => {
  //             gsap.fromTo(
  //               buble1Ref.current,
  //               { x: "25%", y: "100%", opacity: 1 },
  //               {
  //                 x: "-100%",
  //                 y: "-100%",
  //                 opacity: 0,
  //                 duration: 2,
  //               }
  //             );
  //           },
  //           onEnterBack: () => {
  //             // Menampilkan kembali bola saat masuk kembali ke viewport
  //             gsap.fromTo(
  //               buble1Ref.current,
  //               { x: "-100%", y: "-100%", opacity: 0 }, // Awal: kiri atas
  //               {
  //                 x: "25%", // Target posisi horizontal
  //                 y: "100%", // Target posisi vertikal
  //                 opacity: 1,
  //                 duration: 1,
  //               }
  //             );
  //           },
  //           onLeaveBack: () => {
  //             gsap.fromTo(
  //               buble1Ref.current,
  //               { x: "25%", y: "100%", opacity: 1 },
  //               {
  //                 x: "-100%",
  //                 y: "-100%",
  //                 opacity: 0,
  //                 duration: 2,
  //               }
  //             );
  //           },
  //         },
  //       }
  //     );
  //   }
  // };
  useGSAP(() => {
    // bubleAnimation1();
    if (buble1Ref.current) {
      gsap.fromTo(
        buble1Ref.current,
        { x: "-100%", y: "-100%", opacity: 0 }, // Awal: kiri atas
        {
          x: "25%",
          y: "100%",
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current,
            scrub: 1,
            // markers: true,

            onLeave: () => {
              gsap.fromTo(
                buble1Ref.current,
                { x: "25%", y: "100%", opacity: 1 },
                {
                  x: "-100%",
                  y: "-100%",
                  opacity: 0,
                  duration: 2,
                }
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble1Ref.current,
                { x: "-100%", y: "-100%", opacity: 0 }, // Awal: kiri atas
                {
                  x: "25%", // Target posisi horizontal
                  y: "100%", // Target posisi vertikal
                  opacity: 1,
                  duration: 2,
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(
                buble1Ref.current,
                { x: "25%", y: "100%", opacity: 1 },
                {
                  x: "-100%",
                  y: "-100%",
                  opacity: 0,
                  duration: 2,
                }
              );
            },
          },
        }
      );
    }
    if (buble1Ref.current) {
      gsap.fromTo(
        buble2Ref.current,
        { x: "100%", y: "-50%", opacity: 0 }, // Awal: kanan atas
        {
          x: "10%", // Target posisi horizontal
          y: "100%", // Target posisi vertikal
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current, // Elemen yang memicu animasi
            scrub: 1, // Animasi berjalan sesuai dengan scroll
            // markers: true, // Menampilkan indikator

            onLeave: () => {
              // Menghilangkan bola saat keluar dari end
              gsap.fromTo(
                buble2Ref.current,
                {
                  x: "10%", // Target posisi horizontal
                  y: "100%",
                  opacity: 1,
                }, // Awal: kanan atas
                {
                  x: "100%",
                  y: "-50%",
                  opacity: 0,
                  duration: 2,
                }
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble2Ref.current,
                { x: "100%", y: "-50%", opacity: 0 }, // Awal: kanan atas
                {
                  x: "10%", // Target posisi horizontal
                  y: "100%",
                  opacity: 1,
                  duration: 2,
                }
              );
            },
            onLeaveBack: () => {
              gsap.fromTo(
                buble2Ref.current,
                {
                  x: "10%", // Target posisi horizontal
                  y: "100%",
                  opacity: 1,
                }, // Awal: kanan atas
                {
                  x: "100%",
                  y: "-50%",
                  opacity: 0,
                  duration: 2,
                }
              );
            },
          },
        }
      );
    }

    if (buble1Ref.current) {
      gsap.fromTo(
        buble3Ref.current,
        { x: "50%", y: "-50%", opacity: 0 }, // Awal: tengah atas
        {
          x: "90%", // Target posisi horizontal: tengah
          y: "90%", // Target posisi vertikal: tengah
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current, // Elemen yang memicu animasi
            scrub: 1, // Animasi berjalan sesuai dengan scroll
            // markers: true, // Menampilkan indikator

            onLeave: () => {
              // Menghilangkan bola saat keluar dari end
              gsap.fromTo(
                buble3Ref.current,
                {
                  x: "90%", // Target posisi horizontal: tengah
                  y: "90%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "50%", y: "50%", opacity: 0, duration: 2 }
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble3Ref.current,
                { x: "50%", y: "-50%", opacity: 0 }, // Awal: tengah atas
                {
                  x: "90%", // Target posisi horizontal: tengah
                  y: "90%",
                  opacity: 1,
                  duration: 1,
                }
              );
            },
            onLeaveBack: () => {
              // Menghilangkan bola saat keluar kembali dari viewport
              gsap.fromTo(
                buble3Ref.current,
                {
                  x: "90%", // Target posisi horizontal: tengah
                  y: "90%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "50%", y: "-50%", opacity: 0, duration: 2 }
              );
            },
          },
        }
      );
    }

    if (buble1Ref.current) {
      gsap.fromTo(
        buble4Ref.current,
        { x: "-50%", y: "100%", opacity: 0 },
        {
          x: "-30%",
          y: "-100%",
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current, // Elemen yang memicu animasi
            scrub: 1, // Animasi berjalan sesuai dengan scroll
            // markers: true, // Menampilkan indikator
            // start: "100% 100%",
            // end: "10%",
            onLeave: () => {
              // Menghilangkan bola saat keluar dari end
              gsap.fromTo(
                buble4Ref.current,
                { x: "-30%%", y: "-100%", opacity: 1 }, // Posisi saat ini
                { x: "-50%", y: "100%", opacity: 0, duration: 2 }
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble4Ref.current,
                { x: "-50%", y: "100%", opacity: 0 }, // Awal: kiri bawah
                {
                  x: "-30%", // Target posisi horizontal: tengah
                  y: "-100%",

                  opacity: 1,
                  duration: 2,
                }
              );
            },
            onLeaveBack: () => {
              // Menghilangkan bola saat keluar kembali dari viewport
              gsap.fromTo(
                buble4Ref.current,
                { x: "-50%", y: "100%", opacity: 1 }, // Awal: kiri bawah
                {
                  x: "-30%", // Target posisi horizontal: tengah
                  y: "-100%",
                  opacity: 0,
                }
              );
            },
          },
        }
      );
    }

    if (buble5Ref.current) {
      gsap.fromTo(
        buble5Ref.current,
        { x: "-50%", y: "100%", opacity: 0 }, // Awal: kiri bawah
        {
          x: "60%", // Target posisi horizontal: tengah
          y: "-70%",
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current, // Elemen yang memicu animasi
            scrub: 1, // Animasi berjalan sesuai dengan scroll
            // markers: true, // Menampilkan indikator

            onLeave: () => {
              // Menghilangkan bola saat keluar dari end
              gsap.fromTo(
                buble5Ref.current,
                {
                  x: "60%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "50%", y: "110%", opacity: 0, duration: 2 } // Kembali ke bawah tengah
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble5Ref.current,
                { x: "-50%", y: "100%", opacity: 0 }, // Awal: kiri bawah
                {
                  x: "60%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                  duration: 1,
                }
              );
            },
            onLeaveBack: () => {
              // Menghilangkan bola saat keluar kembali dari viewport
              gsap.fromTo(
                buble5Ref.current,
                {
                  x: "60%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "50%", y: "110%", opacity: 0, duration: 2 } // Kembali ke bawah tengah
              );
            },
          },
        }
      );
    }

    if (buble1Ref.current) {
      gsap.fromTo(
        buble6Ref.current,
        { x: "150%", y: "100%", opacity: 0 }, // Awal: kiri bawah
        {
          x: "270%", // Target posisi horizontal: tengah
          y: "-70%",
          opacity: 1,
          duration: 2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: buble1Ref.current, // Elemen yang memicu animasi
            scrub: 1, // Animasi berjalan sesuai dengan scroll
            // markers: true, // Menampilkan indikator

            onLeave: () => {
              // Menghilangkan bola saat keluar dari end
              gsap.fromTo(
                buble6Ref.current,
                {
                  x: "270%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "150%", y: "100%", opacity: 0, duration: 2 } // Kembali ke bawah tengah
              );
            },
            onEnterBack: () => {
              // Menampilkan kembali bola saat masuk kembali ke viewport
              gsap.fromTo(
                buble6Ref.current,
                { x: "150%", y: "100%", opacity: 0 }, // Awal: kiri bawah
                {
                  x: "270%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                  duration: 1,
                }
              );
            },
            onLeaveBack: () => {
              // Menghilangkan bola saat keluar kembali dari viewport
              gsap.fromTo(
                buble6Ref.current,
                {
                  x: "270%", // Target posisi horizontal: tengah
                  y: "-70%",
                  opacity: 1,
                }, // Posisi saat ini
                { x: "150%", y: "100%", opacity: 0, duration: 2 } // Kembali ke bawah tengah
              );
            },
          },
        }
      );
    }
  }, []);

  return (
    <div className="md:h-screen md:w-full relative overflow-hidden section-network">
      {/* Konten Utama */}
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="pin" ref={titleRef}>
          <p className="text-5xl font-bold">Trusted by Global Brands</p>
          <p className="text-lg mt-4">
            We are proud to collaborate with a growing network of retail
            pioneers who believe in building measurable impact into their
            everyday.
          </p>
        </div>
      </div>

      {/* Elemen Bubble */}
      <div className="absolute top-10 left-20 -z-20">
        <Buble brand="Kipas Angin" ref={buble1Ref} />
      </div>
      <div className="absolute top-10 right-20 -z-20">
        <Buble brand="Lampu" ref={buble2Ref} />
      </div>

      <div className="absolute top-0 left-1/4 -z-20">
        <Buble brand="Meja" ref={buble3Ref} />
      </div>

      <div className="absolute bottom-10 left-20 -z-20">
        <Buble brand="Kursi" ref={buble4Ref} />
      </div>

      <div className="absolute bottom-0 left-1/4 -z-20">
        <Buble brand="Pensil" ref={buble5Ref} />
      </div>
      <div className="absolute bottom-0 left-1/4 -z-20">
        <Buble brand="Pulpen" ref={buble6Ref} />
      </div>
    </div>
  );
};

export default Network;
