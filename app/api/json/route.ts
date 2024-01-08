import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nama } = req.body;

    // Simpan data ke file info.json
    //     fs.appendFile("./info.json", JSON.stringify({ nama }) + "\n", (err) => {
    //       if (err) {
    //         console.error("Terjadi kesalahan saat menyimpan data:", err);
    //         res
    //           .status(500)
    //           .json({ message: "Terjadi kesalahan saat menyimpan data" });
    //       } else {
    //         console.log("Data berhasil disimpan ke file info.json");
    //         res.status(200).json({ message: "Data berhasil disimpan" });
    //       }
    //     });
    //   } else {
    //     res.status(405).json({ message: "Metode HTTP tidak diizinkan" });
    //   }
    console.log(nama);
  }
}
