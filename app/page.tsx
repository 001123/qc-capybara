import { createClient } from "@/utils/supabase/server";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const { data: capys } = await supabase.from("capy").select();

  return (
    <main className="min-h-screen bg-white">
      <div className="p-4">
        <h1 className="mb-4 text-5xl text-center font-semibold text-orange-500">
          (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Capybaraaaa
        </h1>
        <div className="space-y-3">
          <h2 className="text-center">
            Liên hệ:{" "}
            <a
              title="Bấm để truy cập"
              className="text-blue-500 font-semibold"
              href="https://www.facebook.com/buikhuongduy.t2"
              target="_blank"
            >
              👉 Bùi Khương Duy
            </a>
          </h2>
          <h2 className="text-center">
            Notion:{" "}
            <a
              title="Bấm để truy cập"
              className="text-blue-500 font-semibold"
              href="https://www.notion.so/khuongduy1897/Testing-Notes-1a70128c1ee580709dc3d3b67cdfac87?pvs=4"
              target="_blank"
            >
              📝 Testing - Notes
            </a>
          </h2>
          <div className="text-center">
            Các tính năng vẫn đang trong giai đoạn phát triển ^.^
          </div>
        </div>
      </div>

      <div className="p-4 bg-red-100">
        <div className="max-w-4xl  mx-auto my-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {capys?.map((capy) => (
            <div
              key={capy.id}
              className="cursor-pointer bg-white p-2 rounded-2xl hover:transform hover:scale-105 transition-transform duration-300 shadow-md"
            >
              <div className="relative">
                {capy?.desc && (
                  <div className=" top-0 left-0 bg-orange-400 text-white p-2 rounded-md shadow-md">
                    <p>{capy.desc}</p>
                  </div>
                )}
                <Image
                  src={`/capy/${getRandomInt(1, 15)}.jpg`}
                  alt={capy.name}
                  width={300}
                  height={200}
                />
              </div>
              <div className="mt-2 text-center font-semibold">
                Bé: {capy.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
