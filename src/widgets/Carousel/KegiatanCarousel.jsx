import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true, // Enable arrows
};

const KegiatanCarousel = () => {
  return (
    <div className="mx-auto mt-24 w-full px-4 md:w-7/12 lg:mt-0 sm:px-24">
      <style>
        {`
          .slick-prev:before, .slick-next:before {
            color: black; /* Warna hitam untuk arrow */
          }
          .slick-dots li button:before {
            color: black; /* Warna hitam untuk dots */
          }
          .slick-dots li.slick-active button:before {
            color: black; /* Warna hitam untuk dots yang aktif */
          }
        `}
      </style>
      <Slider {...settings}>
        <div>
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader floated={false} className="relative h-72">
              <img
                alt="Card Image"
                src="/img/MeetKKN1.jpg"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="small" color="blue-gray" className="font-normal">Pertemuan Pertama</Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
              >
                Pembahasan Fiksasi Bidang dan RAB
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-500 text-justify">
                Pada pertemuan kelompok KKN Sisdamas Kelompok 201 yang dilaksanakan pada tanggal 12 Juni, kami membahas secara mendalam mengenai fiksasi bidang dan penyusunan Rencana Anggaran Biaya (RAB) untuk berbagai program kerja yang akan dilaksanakan selama periode KKN di Desa Babakanpeuteuy, Kecamatan Cicalengka, Kabupaten Bandung Timur.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader floated={false} className="relative h-72">
              <img
                alt="Card Image"
                src="/img/MeetKKN1.jpg"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="small" color="blue-gray" className="font-normal">Pertemuan Kedua</Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
              >
                Evaluasi Tengah Kegiatan
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-500 text-justify">
                Pada pertemuan kedua, kami mengevaluasi progres kegiatan yang telah berjalan dan menyusun strategi untuk menyelesaikan kegiatan sesuai dengan rencana.
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
            <CardHeader floated={false} className="relative h-72">
              <img
                alt="Card Image"
                src="/img/gedunguin.jpg"
                className="h-full w-full"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="small" color="blue-gray" className="font-normal">Pertemuan Ketiga</Typography>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-3 mt-2 font-bold"
              >
                Penutupan dan Laporan Akhir
              </Typography>
              <Typography className="mb-6 font-normal text-blue-gray-500 text-justify">
                Pada pertemuan ketiga, kami menyusun laporan akhir dan mengadakan acara penutupan dengan masyarakat setempat untuk merayakan keberhasilan program kerja yang telah dilaksanakan.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </Slider>
    </div>
  );
}

export default KegiatanCarousel;
