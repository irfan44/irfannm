import ExternalLink from 'lib/ui/ExternalLink';
import Image from 'next/image';

const AboutMe = () => {
  return (
    <div className="space-y-12">
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
            <strong>Hi everyone!</strong> I&apos;m{' '}
            <strong>Irfan Nurghiffari Muhajir</strong>, you can call me{' '}
            <strong>Irfan</strong>. I grew up in Tangerang, which is one of the
            satellite cities of Jakarta. Currently I&apos;m a Software
            Engineering student at Universitas Pendidikan Indonesia. I started
            my study in 2019 and I&apos;m currently in my last year. But, i was
            an Industrial Engineering student in 2018 before i decided to move.
          </p>
          <p>
            I focus much of my time in collage to learn about software
            engineering & frontend web development using React & NextJS. I also
            regularly use cloud platform such as AWS, Azure & GCP and have
            experience in using Kubernetes & Red Hat Openshift. I love exploring
            stuff about technology.
          </p>
          <p>
            I&apos;m part of Red Hat&apos;s team as a Class Assistant & Help
            desk in{' '}
            <ExternalLink
              type="text"
              title="Digital Talent Scholarship"
              href="https://digitalent.kominfo.go.id/"
              className="font-bold underline"
            >
              Digital Talent Scholarship
            </ExternalLink>{' '}
            held by Kementrian Kominfo for 3 years. I&apos;m also part of{' '}
            <ExternalLink
              type="text"
              title="Ramaniya"
              href="https://ramaniya.id/"
              className="font-bold underline"
            >
              Ramaniya
            </ExternalLink>{' '}
            as a freelance Information Technology Staff in 2021. I&apos;m one of
            the alumni of{' '}
            <ExternalLink
              type="text"
              title="Generasi Gigih"
              href="https://www.anakbangsabisa.org/generasi-gigih/"
              className="font-bold underline"
            >
              Generasi Gigih
            </ExternalLink>{' '}
            held by Yayasan Anak Bangsa Bisa & GoTo Group at Frontend
            Engineering Track.
          </p>
          <p>
            Lately I have been doing internships to further enhance my knowledge
            about having a career in the professional tech industry. My first
            internship is with Sagara Technology, which is a software
            development house based in Jakarta & Bandung. After that, I&apos;m
            taking part as one of the interns at{' '}
            <ExternalLink
              type="text"
              title="PT Bank Mandiri (Persero) Tbk"
              href="https://bankmandiri.co.id"
              className="font-bold underline"
            >
              PT Bank Mandiri (Persero) Tbk
            </ExternalLink>{' '}
            in Digital Talent Program held by the company in collaboration with
            Ministry of Education&apos;s Kampus Merdeka program. Which leads me
            to learn more about IT & tech in the banking industry, which is one
            of my interest outside of tech. At the start of 2023, after quite a
            long recruitment process, I finally get an offer from{' '}
            <ExternalLink
              type="text"
              title="PT Bank Central Asia Tbk"
              href="https://bca.co.id"
              className="font-bold underline"
            >
              PT Bank Central Asia Tbk
            </ExternalLink>{' '}
            , or more widely known as BCA, to join #ITBCA&apos;s Modernization
            team as Application Developer intern.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
