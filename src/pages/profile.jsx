import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center scale-105" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <section className="relative bg-white py-16">
        <div className="relative mb-6 -mt-40 flex w-full px-4 min-w-0 flex-col break-words bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="relative flex gap-6 items-start">
                <div className="-mt--2 w-40">
                  <Avatar
                    src="/img/logokkn.png"
                    alt="Profile picture"
                    variant="circular"
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col mt-8">
                  <Typography variant="h4" color="blue-gray">
                    KKN SIDAMAS 201
                  </Typography>
                  <Typography variant="paragraph" color="gray" className="!mt-0 font-normal">
                    kkn201babakanpeuteuy@gmail.com
                  </Typography>
                </div>
              </div>
              <div className="mt-10 mb-10 flex lg:flex-col justify-between items-center lg:justify-end lg:mb-0 lg:px-4 flex-wrap lg:-mt-5">
                <Button className="bg-gray-900 w-fit lg:ml-auto">Connect</Button>
                <div className="flex justify-start py-4 pt-8 lg:pt-4">
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      999+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Friends
                    </Typography>
                  </div>
                  <div className="mr-4 p-3 text-center">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      204
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Photos
                    </Typography>
                  </div>
                  <div className="p-3 text-center lg:mr-4">
                    <Typography
                      variant="lead"
                      color="blue-gray"
                      className="font-bold uppercase"
                    >
                      1000+
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-blue-gray-500"
                    >
                      Comments
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Gambar dan teks diselaraskan dalam satu div kontainer */}
            <div className="flex flex-col lg:flex-row justify-between items-start mt-10">
              <img
                src="/img/gedunguin.jpg"
                alt="UIN SGD"
                className="w-full lg:w-1/3 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mr-6"
              />
              <div className="flex flex-col space-y-2 lg:w-2/3">
                <div className="flex items-center gap-2">
                  <MapPinIcon className="-mt-px h-10 w-4 text-blue-gray-500" />
                  <Typography className="font-medium text-blue-gray-500">
                    Bandung Jawa Barat Indonesia
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                  <Typography className="font-medium text-blue-gray-500">
                    Student
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-500" />
                  <Typography className="font-medium text-blue-gray-500">
                    University Islam Negri Sunan Gunung Djati Bandung
                  </Typography>
                </div>
                <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  Para Mahasiswa UIN SGD Bandung yang datang dari berbagai Jurusan dan berasal dari daerah asal yang berbeda yang kemudian di pertemukan di KKN Sisdamas 2024 untuk mengabdi dan mengimplementasikan Tri Darma Perguruan Tinggi nya dengan penuh dedikasi.
                </Typography>
        
              </div>
              </div>
            </div>

            {/* <div className="mb-10 py-6">
              <div className="flex w-full flex-col items-start lg:w-1/2">
                <Typography className="mb-6 font-normal text-blue-gray-500">
                  Para Mahasiswa UIN SGD Bandung yang datang dari berbagai Jurusan dan berasal dari daerah asal yang berbeda yang kemudian di pertemukan di KKN Sisdamas 2024 untuk mengabdi dan mengimplementasikan Tri Darma Perguruan Tinggi nya dengan penuh dedikasi.
                </Typography>
                <Button variant="text">Show more</Button>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Profile;