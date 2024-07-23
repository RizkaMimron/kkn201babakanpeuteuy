import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import KegiatanCarousel from "@/widgets/Carousel/KegiatanCarousel";
import OurTeamSlider from "@/widgets/Carousel/OurTeamCarousel";
import OurTeamsCarousel from "@/widgets/Carousel/OurTeamCarousel";



export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 ">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto ">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-2 text-center lg:w-2/10">


            <section className="flex items-center justify-between flex-wrap sm:text-center">
  <div className="flex-1 text-left ">
   
    <Typography
      variant="h2"
      color="white"
      className="opacity-80"
      style={{ fontSize: '40px', fontFamily: 'Arial, sans-serif' }}

    >
      "Selamat Datang di Website Resmi KKN (Kuliah Kerja Nyata) SISDAMAS 201"
    </Typography>

    <Typography
      variant="lead"
      color="white"
      className="opacity-80"
    >
      UIN Sunan Gunung Djati Bandung
    </Typography>
  </div>

  <img
    src="/img/logokkn.jpg" // Path ke gambar logokkn.jpg
    alt=""
    style={{
      maxWidth: '200px', // Sesuaikan ukuran gambar jika diperlukan
      height: 'auto',
      marginLeft: '20px', // Tambahkan jarak antara teks dan gambar
    }}
  />
  
</section>


              
            
            </div>
          </div>
        </div>
      </div>

      
      <section className="-mt-32 bg-[#0F172A] px-4 pb-1 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          {/* <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Working with us is a pleasure
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
                <br />
                <br />
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </Typography>
              <Button variant="filled">read more</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/7.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="small" color="blue-gray" className="font-normal">Enterprise</Typography>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 mt-2 font-bold"
                  >
                    Top Notch Services
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div> */}
        </div>
        
      </section>

      
      <section className="mb-8 font-normal text-white text-center">
      

        {/* <OurTeamSlider/> */}
        <div className="container mx-auto">
          <div className="my-16">
            
          <h1 className="text-white font-bold text-center text-4xl">Staf <Khusus></Khusus></h1>

          <p className="text-white text-center text-xl mt-5  sm:w-full">Kelompok Kita Ya Gimana Kita  Lahhh</p>

          </div>
          {/* <PageTitle section="" heading="Our Team">
          Ini Adalah Jajaran Tim Kelompok 201 KKN Sisdamas
          </PageTitle> */}
          <OurTeamsCarousel teamData={teamData}/>
          {/* <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position,major,  socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                major={major}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div> */}
        </div>

        
      </section>
        <Typography
                variant="h3"
                className="mb-10 mt-10 font-bold text-center"
                color="white" >           
                Semua Aktivitas
              </Typography>
     
              
            <section className="md:pl-20 lg:px-20">
            <div className="mt-10 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-gray-900 p-2 text-center shadow-lg">
                <InformationCircleIcon className="h-8 w-8 text-white " />
              </div>
              
              <Typography
                variant="h4"
                className="mb-3 font-bold"
                color="white"
              >
               Dokumentasi Seluruh Kegiatan
              </Typography>

              
              <Typography
  className="mb-6 font-normal text-white text-justify"
  style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '1rem', borderRadius: '0.5rem' }}
>
  
  Dokumentasi ini mengisahkan rangkaian aktivitas yang penuh makna selama periode KKN, berfokus pada pemberdayaan masyarakat setempat melalui program-program pengembangan sosial dan ekonomi yang mengakar dan bermakna. Setiap program dirancang untuk memberikan dampak positif dan berkelanjutan, Setiap senyum warga yang merekah menjadi bukti nyata dari usaha mereka, menguatkan tekad untuk terus berkontribusi dan meninggalkan warisan positif di Desa Babakanpeuteuy.

  <br />
  <br />
  Dalam kebersamaan yang terjalin, KKN Sisdamas Kelompok 201 tidak hanya memberikan ilmu dan bantuan, tetapi juga menerima pelajaran berharga dari kearifan lokal. Semangat gotong royong dan kehangatan masyarakat menjadi bahan bakar yang menyulut api semangat dalam diri setiap anggota kelompok. Dengan segala usaha dan kerja keras, mereka berharap bahwa program-program ini akan terus memberikan manfaat, melanjutkan perjalanan menuju masa depan yang lebih cerah dan berdaya.
</Typography>

              <Button variant="filled">Lanjutkan Membaca Dokumentasi</Button>
            </div>
            {/* <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
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
                  
                  <Typography className="font-normal text-blue-gray-500">
                    
                  Pada pertemuan kelompok KKN Sisdamas Kelompok 201 yang dilaksanakan pada tanggal 12 Juni, kami membahas secara mendalam mengenai fiksasi bidang dan penyusunan Rencana Anggaran Biaya (RAB) untuk berbagai program kerja yang akan dilaksanakan selama periode KKN di Desa Babakanpeuteuy, Kecamatan Cicalengka, Kabupaten Bandung Timur.
                  </Typography>
                </CardBody>
              </Card>
            </div> */}
            <KegiatanCarousel/> 
          </div>
      </section>
  
      <section className="relative bg-[#0F172A] py-24 px-4">
        {/* <div className="container mx-auto text-white">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle section="Kontak Kami" heading="">
          Kirimkan Pesan Anda. Karena pertemuan Adalah Kabar !
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Full Name" />
              <Input variant="outlined" size="lg" label="Email Address" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullwidth="true">
              Send Message
            </Button>
          </form>
        </div> */}
      </section>
      <div className="bg-white flex justify-center py-6">
        <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold">Ikuti Sosial Media Kami</h1>
        <p className="text-blue-gray-500 px-14 sm:px-0">Kenali Lebih Dekat Dengan Kelompok 201 KKN SISDAMAS</p>
        <div className="py-2 flex justify-center gap-3 sm:gap-5">
          <a href="https://youtube.com/@ieu_imron_volleyball/" target="_blank" className="hover:text-red-500">
          <i className="fa-brands text-xl  fa-youtube" />
          </a>
          <a href="https://www.instagram.com/kkn201_babakanpeuteuy/" target="_blank"  className="hover:text-pink-500">
          <i className="fa-brands text-xl  fa-instagram" />
          </a>
          <a href="https://www.tiktok.com/@kkn201_uinbdg/" target="_blank" className="hover:text-purple-500">
          <i className="fa-brands text-xl  fa-tiktok" />
          </a>
        </div>
        </div>

        </div>
        <div className="py-2 bg-white border-t-[1px] border-gray-200">
          <p className="text-center text-gray-500 text-sm">Copyright © 2024 | Rizka M Imron</p>

      </div>
      {/* <div className="bg-white">
        <Footer />
      </div> */}
    </>
  );
}

export default Home;
