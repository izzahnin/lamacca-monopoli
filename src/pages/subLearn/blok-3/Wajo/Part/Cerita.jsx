import React from 'react'
import Image from "../../../../../components/Image";
import Paragraph from "../../../../../components/Paragraph";

function Cerita() {
  return (
    <div className="flex flex-col  p-4 items-center bg-cyan-50 gap-3 text-neutral-900">
      <div className="flex flex-col  text-justify p-2 sm:px-16 md:px-28 lg:px-32 sm:py-10 bg-champagne_pink">
        <div className="flex flex-col items-center">
          {/* <Title text="Putri Tandampalik" /> */}
          <Image src="/images/sawerigading.svg" alt="sawerigading" />
          <Image src="/images/sawerigading1.png" alt="sawerigading" />
          <Image src="/images/sawerigading2.png" alt="sawerigading" />

        </div>
        {/* Paragraf mulai */}
        <Paragraph par="Alkisah, di daerah Luwu, Sulawesi Selatan, hiduplah seorang raja bernama La Togeq Langiq atau lebih dikenal dengan panggilan Batara Lattu’. Sang Raja mempunyai dua istri, yaitu satu dari golongan manusia biasa (penduduk dunia nyata) bernama We Datu Sengeng, anak La Urumpassi dan We Padauleng ditompottikka dan satu lagi berasal dari bangsa jin.  Dari perkawinan dengan We Datu Sengeng lahir sepasang anak kembar emas, yakni seorang laki-laki bernama Sawerigading, dan seorang perempuan bernama We Tenriabeng.  " />
        <Paragraph par="Mengenai masa hidup Sawerigading terdapat berbagai versi di kalangan ahli sejarah. Menurut versi Towani-Tolotang di Sidenreng, Sawerigading lahir pada tahun 564 M. Jika versi ini dihadapkan dengan beberapa versi lain, maka data ini tidak terlalu jauh perbedaanya. Untuk lebih jelasnya, berikut ini akan dikemukakan tiga versi mengenai masa hidup Sawerigading, yaitu : " />

        <ol className='pt-2'>
          <li className="list-decimal list-inside">Versi Sulawesi Tenggara, abad V; </li>
          <li className="list-decimal list-inside">Versi Gorontalo, 900 dikurangi 50 = 850; </li>
          <li className="list-decimal list-inside">Versi Kelantan - Terengganu, tahun 710.  </li>
        </ol>
        <Paragraph par="Sepertinya, versi Sulawesi Tenggara lebih dekat dengan versi yang dikemukakan oleh masyarakat Towani-Tolotang. Mereka menetapkan versi ini sebab menurut kepercayaan mereka Sawerigading sezaman dengan Nabi Muhammad, bahkan pernah bertemu. " />
        <Paragraph par="Berdasarkan ramalan Batara Guru (ayah Raja Luwu), Sawerigading dan We Tenriabeng kelak akan saling jatuh cinta dan menikah. Padahal menurut adat setempat, seseorang sangat pantang menikahi saudara kandung sendiri. Agar tidak melanggar adat tersebut, Raja Luwu pun membesarkan kedua anak kembarnya tersebut secara terpisah. Ia menyembunyikan anak perempuannya (We Tenriabeng) di atas loteng istana sejak masih bayi.  " />
        <Paragraph par="Waktu terus berjalan. Sawerigading tumbuh menjadi pemuda yang gagah dan tampan, sedangkan We Tenriabeng tumbuh menjadi gadis yang cantik jelita. Namun, sepasang anak kembar tersebut belum saling mengenal. " />
        <Paragraph par="Pada suatu hari, Sawerigading bersama sejumlah pengawal istana diutus oleh ayahnya berlayar ke Negeri Taranati (Ternate) untuk mewakili Kerajaan Luwu dalam sebuah pertemuan para pangeran. Namun sebenarnya tujuan utama Sawerigading diutus pergi jauh ke Ternate karena saudara kembarnya We Tenriabeng akan dilantik menjadi bissu dalam sebuah upacara umum, yang tentu saja tidak boleh dihadirinya karena dikhawatirkan akan bertemu dengan We Tenriabeng. " />
        <Paragraph par="Dalam perjalanan menuju ke Negeri Ternate, Sawerigading mendapat kabar dari seorang pengawalnya bahwa ia mempunyai saudara kembar yang cantik jelita. Sawerigading tersentak kaget mendengar kabar tersebut. " />
        <Paragraph par="“Apa katamu? Aku mempunyai saudara kembar perempuan?” tanya Sawerigading dengan kaget. “Benar, Pangeran! Saudaramu itu bernama Tenriabeng. Ia disembunyikan dan dipelihara di atas loteng istana sejak masih kecil,” ungkap pengawal itu. " />
        <Paragraph par="Sekembalinya dari Ternate, Sawerigading langsung mencari saudara kembarnya yang disembunyikan di atas loteng istana. Tak pelak lagi, Sawergading langsung jatuh cinta saat melihat saudara kembarnya itu dan memutuskan untuk menikahinya. Raja Luwu Batara Lattu’ yang mengetahui rahasia keluarga istana tersebut terbongkar segera memanggil putranya itu untuk menghadap. " />
        <Paragraph par="“Wahai, Putraku! Mengharap pendamping hidup untuk saling menentramkan hati bukanlah hal yang keliru. Tapi, perlu kamu ketahui bahwa menikahi saudara kandung sendiri merupakan pantangan terbesar dalam adat istiadat kita. Jika adat ini dilanggar, bencana akan menimpa negeri ini. Sebaiknya urungkanlah niatmu itu, Putraku!” bujuk Raja Luwu Batara Lattu'. " />
        <Paragraph par="page34- belum selesaiiii" />
        <Paragraph par="" />
        <Paragraph par="" />
        
        <Paragraph par="" /> 

        {/* <h1 className="pt-12 font-semibold">Apa pesan moral cerita rakyat Putri Tandampalik?</h1> */}
      </div>
    </div>
  )
}

export default Cerita