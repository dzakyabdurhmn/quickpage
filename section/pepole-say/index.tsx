"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/card";
// import Marquee from "@/components/marquee-element";

function index() {
  return (
    <>
      <div className="flex items-center justify-center mt-20 mx-auto max-w-[1000px]">
        <div className="flex flex-col  space-y-8">
          {/*  */}
          <div className="flex-row xl:gap-4 xl:flex">
            <div className="flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
              <div className="flex  justify-between">
                <img
                  src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705191530/user/wgspg4abzvlypvj5bcjt.jpg"
                  alt="eji"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="none"
                    viewBox="0 0 512 512"
                    id="twitter"
                  >
                    <g clip-path="url(#clip0_84_15698)">
                      <rect width="512" height="512" fill="#fff" rx="60"></rect>
                      <path
                        fill="#000"
                        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_84_15698">
                        <rect width="512" height="512" fill="#fff"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span>
                Saya memiliki pengalaman yang luar biasa di Kumonitas
                Muhammadiyah, sebuah platform yang membawa pendidikan ke tingkat
                baru. Fitur tugas terkoneksi memberikan fleksibilitas luar biasa
                dan membantu saya terlibat dalam pembelajaran yang lebih
                personal. Notasi mendalam membantu saya melacak perkembangan
                pribadi, sementara diskusi berbasis pemikiran kritis membuka
                peluang berharga untuk berbagi dan mendengarkan sudut pandang
                yang beragam.
              </span>
              <span className="font-semibold">
                Afkar,{" "}
                <span className="font-bold">SMK MUHAMMADIYAH 1 YOGYAKARTA</span>
              </span>
            </div>
            <div className=" border-[3px] space-y-7 mt-5 xl:mt-0 rounded-xl flex flex-col border-black px-7  py-7">
              <div className="flex  justify-between">
                <img
                  src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705191525/user/svxarygareyj7xmxys6z.jpg"
                  alt="eji"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="none"
                    viewBox="0 0 512 512"
                    id="twitter"
                  >
                    <g clip-path="url(#clip0_84_15698)">
                      <rect width="512" height="512" fill="#fff" rx="60"></rect>
                      <path
                        fill="#000"
                        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_84_15698">
                        <rect width="512" height="512" fill="#fff"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span>
                Rekomendasi tinggi untuk semua yang mencari pengalaman
                pendidikan yang holistik dan terhubung secara global. 🌐✨
              </span>
              <span className="font-semibold">
                Keyza arya
                <span className="font-bold">
                  , SMK MUHAMMADIYAH 1 YOGYAKARTA
                </span>
              </span>
            </div>
          </div>
          {/*  */}
          <div className="flex-row xl:flex gap-5">
            <div className="border-[3px] space-y-7 rounded-xl flex flex-col border-black px-7  py-7">
              <div className="flex  justify-between">
                <img
                  src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705191526/user/avuwdfipv6k9spneeeda.jpg"
                  alt="eji"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 5 1036 990"
                    id="linkedin"
                  >
                    <path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"></path>
                  </svg>
                </div>
              </div>
              <span>
                Yang paling mengesankan adalah konektivitas komunitas
                pendidikan. Saya merasa terhubung dengan sesama pembelajar,
                mendapatkan inspirasi dari pengalaman mereka, dan memperluas
                wawasan saya. Kumonitas Muhammadiyah benar-benar menciptakan
                lingkungan yang mendukung pertumbuhan dan keunggulan dalam
                pendidikan.
              </span>
              <span className="font-semibold">
                Celistia putri,
                <span className="font-bold">
                  {" "}
                  SMP MUHAMMADIYAH 7 YOGYAKARTA
                </span>
              </span>
            </div>
            <div className="flex flex-col space-y-4 mt-5  xl:mt-0 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
              <div className="flex  justify-between">
                <img
                  src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705191523/user/rcof2o2as5h8dh0l9hmw.jpg"
                  alt="eji"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="none"
                    viewBox="0 0 512 512"
                    id="twitter"
                  >
                    <g clip-path="url(#clip0_84_15698)">
                      <rect width="512" height="512" fill="#fff" rx="60"></rect>
                      <path
                        fill="#000"
                        d="M355.904 100H408.832L293.2 232.16L429.232 412H322.72L239.296 302.928L143.84 412H90.8805L214.56 270.64L84.0645 100H193.28L268.688 199.696L355.904 100ZM337.328 380.32H366.656L177.344 130.016H145.872L337.328 380.32Z"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_84_15698">
                        <rect width="512" height="512" fill="#fff"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <span>
                Kumonitas Muhammadiyah memberikan nuansa baru dalam dunia
                pendidikan online. Sistem tugas terkoneksi memberikan pengalaman
                belajar yang terkoordinasi, sedangkan fitur notasi memudahkan
                pemantauan kemajuan individu. Diskusi berbasis pemikiran kritis
                membuka peluang untuk mendalami materi dan memperluas wawasan.
              </span>
              <span className="font-semibold">
                Syafiq Alfarenzi,
                <span className="font-bold">
                  {" "}
                  SMA MUHAMMADIYAH 1 YOGYAKARTA
                </span>
              </span>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className=" flex flex-col space-y-4 border-[3px] rounded-xl px-7 border-gray-950 max-w- py-7">
              <div className="flex  justify-between">
                <img
                  src="https://res.cloudinary.com/dfnxmrqmt/image/upload/v1705191523/user/ccvtoa4hxqo0wmgzrfax.jpg"
                  alt="eji"
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    viewBox="0 0 2476 2476"
                    id="instagram"
                  >
                    <path d="M825.4 1238c0-227.9 184.7-412.7 412.6-412.7 227.9 0 412.7 184.8 412.7 412.7 0 227.9-184.8 412.7-412.7 412.7-227.9 0-412.6-184.8-412.6-412.7m-223.1 0c0 351.1 284.6 635.7 635.7 635.7s635.7-284.6 635.7-635.7-284.6-635.7-635.7-635.7S602.3 886.9 602.3 1238m1148-660.9c0 82 66.5 148.6 148.6 148.6 82 0 148.6-66.6 148.6-148.6s-66.5-148.5-148.6-148.5-148.6 66.5-148.6 148.5M737.8 2245.7c-120.7-5.5-186.3-25.6-229.9-42.6-57.8-22.5-99-49.3-142.4-92.6-43.3-43.3-70.2-84.5-92.6-142.3-17-43.6-37.1-109.2-42.6-229.9-6-130.5-7.2-169.7-7.2-500.3s1.3-369.7 7.2-500.3c5.5-120.7 25.7-186.2 42.6-229.9 22.5-57.8 49.3-99 92.6-142.4 43.3-43.3 84.5-70.2 142.4-92.6 43.6-17 109.2-37.1 229.9-42.6 130.5-6 169.7-7.2 500.2-7.2 330.6 0 369.7 1.3 500.3 7.2 120.7 5.5 186.2 25.7 229.9 42.6 57.8 22.4 99 49.3 142.4 92.6 43.3 43.3 70.1 84.6 92.6 142.4 17 43.6 37.1 109.2 42.6 229.9 6 130.6 7.2 169.7 7.2 500.3 0 330.5-1.2 369.7-7.2 500.3-5.5 120.7-25.7 186.3-42.6 229.9-22.5 57.8-49.3 99-92.6 142.3-43.3 43.3-84.6 70.1-142.4 92.6-43.6 17-109.2 37.1-229.9 42.6-130.5 6-169.7 7.2-500.3 7.2-330.5 0-369.7-1.2-500.2-7.2M727.6 7.5c-131.8 6-221.8 26.9-300.5 57.5-81.4 31.6-150.4 74-219.3 142.8C139 276.6 96.6 345.6 65 427.1 34.4 505.8 13.5 595.8 7.5 727.6 1.4 859.6 0 901.8 0 1238s1.4 378.4 7.5 510.4c6 131.8 26.9 221.8 57.5 300.5 31.6 81.4 73.9 150.5 142.8 219.3 68.8 68.8 137.8 111.1 219.3 142.8 78.8 30.6 168.7 51.5 300.5 57.5 132.1 6 174.2 7.5 510.4 7.5 336.3 0 378.4-1.4 510.4-7.5 131.8-6 221.8-26.9 300.5-57.5 81.4-31.7 150.4-74 219.3-142.8 68.8-68.8 111.1-137.9 142.8-219.3 30.6-78.7 51.6-168.7 57.5-300.5 6-132.1 7.4-174.2 7.4-510.4s-1.4-378.4-7.4-510.4c-6-131.8-26.9-221.8-57.5-300.5-31.7-81.4-74-150.4-142.8-219.3C2199.4 139 2130.3 96.6 2049 65c-78.8-30.6-168.8-51.6-300.5-57.5-132-6-174.2-7.5-510.4-7.5-336.3 0-378.4 1.4-510.5 7.5"></path>
                  </svg>
                </div>
              </div>
              <span>
                Diskusi berbasis pemikiran kritis di kumonitas ini memicu
                pertukaran ide yang kaya dan membantu saya melihat topik dari
                berbagai sudut pandang. Saya merasa terhubung dengan komunitas
                pembelajar yang peduli pada pertumbuhan dan pembelajaran
                bersama. 🚀🧠
              </span>
              <span className="font-semibold">
                Hafidz ar rachman,
                <span className="font-bold">
                  {" "}
                  SMA Muhammadiyah 2 yogyakarta
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;

{
  /* <Card className="px-10 py-10 max-w-[823px] min-w-[823px] max-h-[309px] min-h-[309px] border border-black p-10">
            <CardContent>
              <p>
                “Koo started to adopt BentoML more than a year ago as a platform
                of choice for model deployments and monitoring. From our early
                experience it was clear that deploying ML models, a statistic
                that most companies struggle with, was a solved problem for Koo.
                The BentoML team works closely with their community of users
                like I've never seen before. Their AMAs, the advocacy on Slack
                and getting on calls with their customers, are much appreciated
                by early-adopters and seasoned users”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card>
          <Card className="px-10 py-10 max-w-[576px] min-w-[576px] max-h-[309px] min-h-[309px]">
            <CardContent>
              <p>
                “BentoML is helping us future-proof our machine learning
                deployment infrastructure at Mission Lane. It is enabling us to
                rapidly develop and test our model scoring services , and to
                seamlessly deploy them into our dev, staging, and production
                Kubernetes clusters.”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card> */
}

{
  /* <Card className="px-10 py-10 max-w-[823px] min-w-[823px] max-h-[309px] min-h-[309px] border border-black p-10">
            <CardContent>
              <p>
                “Koo started to adopt BentoML more than a year ago as a platform
                of choice for model deployments and monitoring. From our early
                experience it was clear that deploying ML models, a statistic
                that most companies struggle with, was a solved problem for Koo.
                The BentoML team works closely with their community of users
                like I've never seen before. Their AMAs, the advocacy on Slack
                and getting on calls with their customers, are much appreciated
                by early-adopters and seasoned users”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card>
          <Card className="px-10 py-10 max-w-[576px] min-w-[576px] max-h-[309px] min-h-[309px]">
            <CardContent>
              <p>
                “BentoML is helping us future-proof our machine learning
                deployment infrastructure at Mission Lane. It is enabling us to
                rapidly develop and test our model scoring services , and to
                seamlessly deploy them into our dev, staging, and production
                Kubernetes clusters.”
              </p>
            </CardContent>
            <CardFooter>
              <p>
                Mike Kuhlen, Data Science & Machine Learning Solutions and
                Strategy, <span>Mission Lane</span>
              </p>
            </CardFooter>
          </Card> */
}
