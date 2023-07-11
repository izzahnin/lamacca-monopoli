import React from 'react'
import Title from "../../../../../components/Title";
import Image from "../../../../../components/Image";
import Paragraph from "../../../../../components/Paragraph";

function Cerita() {
  return (
    <div className="flex flex-col  p-4 items-center bg-cyan-50 gap-3 text-neutral-900">
      <div className="flex flex-col  text-justify p-2 sm:px-16 md:px-28 lg:px-32 sm:py-10 bg-champagne_pink">
        <div className="flex flex-col items-center">
          <Title text="Cerita Rakyat I Laurang" />
          <Image src="/images/laurang.jpg" alt="I Laurang" />
        </div>
        {/* Paragraf mulai */}
        <Paragraph par="Dikisahkan dalam cerita ini bahwa I Laurang merupakan sosok anak yang lahir dengan kondisi seperti udang." />
        <Paragraph par="Ketika I Laurang kecil, ibunya sangat suka menceritakan kisah tentang raja yang memiliki tujuh puteri kepada I Laurang. Tak disangka, kisah tersebut ternyata kisah nyata dan I Laurang mengetahui bahwa ada seorang raja yang memiliki tujuh puteri." />
        <Paragraph par="I Laurang berbicara kepada ibunya bahwa dirinya ingin menikah dengan salah satu puteri raja tersebut. Dengan rasa malu, orang tua I Laurang mencoba melamar puteri raja sesuai apa yang diinginkan oleh I Laurang." />
        <Paragraph par="Akan tetapi enam dari tujuh puteri tersebut menolak lamaran I Laurang. Namun masih ada si bungsu yang bisa memberi harapan dan ternyata si bungsu menerima lamaran I Laurang." />
        <Paragraph par="Mendengar kabar tersebut, I Laurang pun sangat berbahagia. Ia keluar dari cangkang kulit udang yang selama ini membungkus dirinya. Ternyata paras I Laurang sangat tampan. Karena ketampanan tersebut, saudara istrinya merasa iri kepada si bungsu yang dipersunting I Laurang." />
        <Paragraph par="Merasa kesal dengan si bungsu, saudaranya memiliki suatu rencana. Suatu hari I Laurang diutus untuk pergi berdagang dan harus meninggalkan istrinya. Namun I Laurang sadar dengan tabiat buruk saudara istrinya sehingga ia mewanti-wanti istrinya agar berhati-hati." />
        <Paragraph par="Sebelum pergi, I Laurang memberikan sebuah telur dan pinang agar selalu dibawa sang istri. Pada suatu malam, saudara si bungsu menculiknya dan kemudian membuangnya di lautan. Singkat cerita, berkat sebuah telur dan pinang pemberian I Laurang, si bungsu pun selamat." />
        <Paragraph par="Ia bertemu kembali dengan I Laurang dan pulang ke istana bersama-sama. Di istana, si bungsu menceritakan kejadian yang dialaminya kepada ayahandanya. Mengetahui kejahatan keenam putrinya tersebut, sontak sang Raja menjadikan keenam putrinya tersebut sebagai pelayan istana." />

        <h1 className="pt-12 font-semibold">Apa pesan moral cerita rakyat Putri Tandampalik?</h1>
        <ul className="pl-3 list-disc list-inside">
          <li>Larangan menilai seseorang hanya dari penampilan fisiknya</li>
          <li>Larangan untuk tamak</li>
          <li>Seseorang tidak boleh iri dengan apa yang dimiliki oleh orang lain</li>
        </ul>
      </div>
    </div>
  )
}

export default Cerita