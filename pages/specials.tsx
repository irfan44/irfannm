import Image from 'next/image';
import Link from 'next/link';
import Meta from 'components/common/Meta';

const Specials = () => {
  const pageMeta = {
    title: 'Selamat Ulang Tahun!',
    description: 'Selamat ulang tahun untuk kamu by',
    ogImage: '/assets/images/irfan.jpeg',
  };

  return (
    <>
      <Meta data={pageMeta} />
      <div className="flex flex-col md:flex-row items-center py-6 mb-12">
        <div className="md:w-1/2 space-y-6 mb-12 md:mb-0">
          <p className="font-bold text-xl text-black dark:text-white">
            Happy Birtday,
          </p>
          <h1>Silvi 🥳🎉</h1>
          <p>
            Selamat ulang tahun yaa buat kamu by. Selamat kamu hari ini udah 22
            tahun, secara resmi lebih tua lagi dari aku wkwk. Semoga kamu
            semuanya lancar yaa by, sehat semuanya, lebih semangat lagi buat
            semuanya, semangat juga buat revisinya yg sekarang terakhir nih
            wkwk. Semoga umur yg kamu udah lewati ini berkah buat kamu by.
            Semangat by buat kedepannya, masih panjang bet jalannya tapi aku
            yakin kamu bisa deh. Apapun kamu pasti bisa lewatin dengan usaha
            kamu.
          </p>
          <p>
            Aku seneng banget kamu mau ngejalanin beberapa tahun terakhir ini
            bareng sama aku. Aku seneng bisa bantu kamu dan ada buat kamu.
            Makasih juga kamu selalu ada buat aku by. I love you byku 💙
          </p>
        </div>
        <div className="md:w-1/2 justify-center flex">
          <Image
            className="rounded-xl"
            src="/assets/images/foto-sama-silvi.jpeg"
            alt="Hero"
            width="347"
            height="464"
          />
        </div>
      </div>
      <div>
        <h2>Kejutan Spesial!</h2>
        <p className="mb-6">Coba klik tombolnya by wkwk</p>
        <div className="w-fit bg-black py-2 px-5 rounded-2xl text-white dark:bg-neutral-800 dark:text-white hover:bg-neutral-900 dark:hover:bg-neutral-700 shadow-sm">
          <Link href="https://bit.ly/3oprlgx">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center font-semibold"
            >
              Klik aku!
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Specials;
