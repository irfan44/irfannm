import Image from "next/image";
import Link from "next/link";
import Meta from "../components/common/meta";
import Container from "../components/layouts/container";
import Layout from "../components/layouts/layout";

const About = () => {
  const pageMeta = {
    title: "About me",
    description: "About Irfan Nurghiffari Muhajir",
    ogImage: "/assets/images/irfan.jpeg",
  };
  return (
    <>
      <Meta data={pageMeta} />
      <Layout>
        <Container>
          <div className="space-y-12 lg:px-32">
            <div>
              <div>
                <h1 className="mb-6">About me</h1>
              </div>
              <div>
                <div className="flex justify-center mb-12">
                  <Image
                    className="rounded-full"
                    alt="Irfan Nurghiffari Muhajir"
                    src="/assets/images/irfan.jpeg"
                    width="224"
                    height="224"
                  />
                </div>
                <div className="space-y-6">
                  <p>
                    <strong>Hi everyone!</strong> I&apos;m{" "}
                    <strong>Irfan Nurghiffari Muhajir</strong>, you can call me{" "}
                    <strong>Irfan</strong>. I grew up in Tangerang, which is one
                    of the satellite cities of Jakarta. Currently I&apos;m a
                    Software Engineering student at Universitas Pendidikan
                    Indonesia. I started my study in 2019 and I&apos;m currently
                    in my last year. But, i was an Industrial Engineering
                    student in 2018 before i decided to move.
                  </p>
                  <p>
                    I focus much of my time in collage to learn about software
                    engineering. I love exploring stuff about technology.
                    I&apos;m part of Red Hat&apos;s team as a Class Assistant &
                    Help desk in{" "}
                    <Link href="https://digitalent.kominfo.go.id/">
                      <a className="font-bold underline">
                        Digital Talent Scholarship
                      </a>
                    </Link>{" "}
                    held by Kementrian Kominfo for 2 years. I&apos;m also part
                    of{" "}
                    <Link href="https://ramaniya.id/">
                      <a className="font-bold underline">Ramaniya</a>
                    </Link>{" "}
                    as a freelance Information Technology Staff in 2021. I also
                    took part in{" "}
                    <Link href="https://www.anakbangsabisa.org/generasi-gigih/">
                      <a className="font-bold underline">Generasi Gigih</a>
                    </Link>{" "}
                    held by Yayasan Anak Bangsa Bisa & GoTo Group at Front-end
                    Engineering Track.
                  </p>
                  <p>
                    Outside of tech, I learn a lot about finance. I&apos;ve been
                    part of several investors community and been investing at
                    mutual funds & stocks.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2>Contact</h2>
              </div>
              <p className="mb-2">You can contact me here :</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  Mail :{" "}
                  <Link href="mailto:irfannmuhajir@gmail.com">
                    <a className="underline">irfannmuhajir@gmail.com</a>
                  </Link>
                </li>
                <li>
                  Github :{" "}
                  <Link href="https://github.com/irfan44">
                    <a className="underline">https://github.com/irfan44</a>
                  </Link>
                </li>
                <li>
                  Gitlab :{" "}
                  <Link href="https://gitlab.com/irfannm">
                    <a className="underline">https://gitlab.com/irfannm</a>
                  </Link>{" "}
                </li>
                <li>
                  LinkedIn :{" "}
                  <Link href="https://www.linkedin.com/in/irfannm/">
                    <a className="underline">
                      https://linkedin.com/in/irfannm/
                    </a>
                  </Link>
                </li>
                <li>
                  Instagram :{" "}
                  <Link href="https://www.instagram.com/irfan_nm44/">
                    <a className="underline">
                      https://instagram.com/irfan_nm44/
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};
export default About;
