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
            <a
              href="https://digitalent.kominfo.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Digital Talent Scholarship
            </a>{' '}
            held by Kementrian Kominfo for 3 years. I&apos;m also part of{' '}
            <a
              href="https://ramaniya.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Ramaniya
            </a>{' '}
            as a freelance Information Technology Staff in 2021. I also took
            part in{' '}
            <a
              href="https://www.anakbangsabisa.org/generasi-gigih/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              Generasi Gigih
            </a>{' '}
            held by Yayasan Anak Bangsa Bisa & GoTo Group at Frontend
            Engineering Track.
          </p>
          <p>
            Outside of tech, I learn a lot about finance. I&apos;ve been part of
            several investors community and been investing at mutual funds &
            stocks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
