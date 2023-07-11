import React from 'react'
import Title from "../../../../../components/Title";
import Image from "../../../../../components/Image";
import Paragraph from "../../../../../components/Paragraph";

function Cerita() {
  return (
    <div className="flex flex-col  p-4 items-center bg-cyan-50 gap-3 text-neutral-900">
      <div className="flex flex-col  text-justify p-2 sm:px-16 md:px-28 lg:px-32 sm:py-10 bg-champagne_pink">
        <div className="flex flex-col items-center">
          <Title text="Putri Tandampalik" />
          <Image src="/images/putri_tandampalik.jpg" alt="Putri Tandampalik" />
        </div>
        {/* Paragraf mulai */}
        <Paragraph par="Sang raja bernama Datu Luwu ini memiliki seorang anak perempuan cantik yang bernama Putri Tandampalik. Kecantikannya sangat tersohor, perilakunya juga sangat anggun dan berwibawa. Kecantikan dan perilakunya tersebut pun akhirnya sampai terdengar di kerajaan Bone." />
        <Paragraph par="Raja Bone yang mendengar kabar bahwa ada seorang anak raja yang cantik rupawan dan berperilaku baik tersebut tertarik untuk melamar sang puteri dengan anaknya. Hal tersebut nyatanya membuat Datu Luwu merasa bimbang sebab pada masa itu tidak dibenarkah menikah dengan pemuda dari negeri atau kerajaan lain." />
        <Paragraph par="Namun jika lamaran tersebut ditolak, Datu Luwu merasa khawatir akan terjadi perang antara rakyat dan kerajaan yang menyebabkan rakyat menjadi menderita. Akhirnya untuk menghindari adanya konflik, Datu Luwu pun menerima pinangan untuk anaknya dari sang putera mahkota dari Kerajaan Bone." />
        <Paragraph par="Hanya saja sebelum pernikahan tersebut digelar, ada sebuah tragedi yang menimpa sang puteri. Sekujur tubuh sang puteri mengeluarkan cairan kental yang menjijikkan dan akhirnya Putri Tandampalik pun diungsikan ke sebuah pulau bernama Pulau Wajo sebelum kedua kerajaan ini bertemu untuk membahas masalah lamaran." />
        <Paragraph par="Datu Luwu memberikan anaknya sebuah keris sebagai tanda bahwa ia tidak akan pernah melupakan anaknya apapun yang terjadi di kemudian hari. Di pulau terpencil tersebut yang menjadi tempat baru bagi sang puteri, ia duduk di tepian danau." />
        <Image src="/images/putri_tandampalik1.jpg" alt="Sang Putri dan seekor kerbau" />
        <Paragraph par="Ketika sedang asyik duduk, tiba-tiba ada seekor kerbau berwarna putih yang menghampirinya. Tiba-tiba sang kerbau menjilati kaki sang putri. Setelah itu cairan berbau busuk dari tubuhnya pun hilang dan kulitnya kembali mulus." />
        <Paragraph par="Akhirnya sejak saat itu Putri Tandampalik menganggap kerbau tersebut merupakan mukjizat baginya dan merupakan sahabat bagi sang puteri sehingga Putri Tandampalik memerintahkan untuk tidak pernah menyembelih kerbau." />
        <Paragraph par="Meski kondisinya sudah sembuh, namun saat itu Sang Putri masih belum kembali ke kerajaan. Di suatu malam ketika tidur, Putri Tandampalik bermimpi bertemu dengan seorang pria tampan." />
        <Paragraph par="“Siapa namamu dan mengapa kamu ada di pulau ini?” tanya sang pria tampan tersebut." />
        <Paragraph par="Kemudian sang puteri menceritakan semuanya dan bertanya kepada pemuda itu," />
        <Paragraph par="“Siapakah kau dan darimanakah asalmu?”" />
        <Paragraph par="Sang pemuda tidak menjawab dan balik bertanya," />
        <Paragraph par="“Maukah kau menjadi istriku?”" />
        <Paragraph par="Belum terjawab, sang putri terbangun dari tidurnya." />
        <Paragraph par="Di sisi lain, sang putera mahkota kerajaan Bone sedang asyik berburu di hutan dan akhirnya terpisah dari rombongannya. Sang putera mahkota pun tersesat dan karena sudah merasa kondisinya semakin malam dan belum juga menemukan rombongannya, ia pun memutuskan berteduh di sebuah rumah di hutan tersebut." />
        <Paragraph par="Ternyata rumah itu merupakan rumah yang dihuni oleh Putri Tandampalik. Namun sang putra mahkota saat itu belum tahu kalau sang puteri merupakan gadis yang dijodohkan dengannya. Di sisi lain, ketika melihat sang pemuda, Putri Tandampalik merasa pernah bertemu dengannya." />
        <Paragraph par="Putri Tandampalik pun ingat bahwa pemuda tersebut merupakan seseorang yang hadir di mimpinya semalam. Akhirnya mereka pun akrab sejak saat itu." />
        <Paragraph par="Suatu hari Putri Tandampalik pulang ke kerajaannya karena merasa sudah sembuh, begitu pula dengan putera mahkota. Sang putera mahkota pun mengungkap kepada ayahnya bahwa di hutan ia jatuh hati dengan seorang putri dan ingin meminangnya." />
        <Image src="/images/putri_tandampalik2.jpg" alt="Sang Putri dan sang Putera Mahkota" />
        <Paragraph par="Karena merasa anaknya serius mencintai seorang putri tersebut, sang ayahpun melamar sang putri dan betapa terkejutnya karena ternyata sang putri yang dicintai anaknya adalah seorang putri yang jauh-jauh hari hendak dijodohkan dengan putera mahkota. Mereka berdua pun menikah dan hidup Bahagia." />

        <h1 className="pt-12 font-semibold">Apa pesan moral cerita rakyat Putri Tandampalik?</h1>
        <Paragraph par="Pesan moral yang bisa dipelajari dari cerita rakyat Putri Tandampalik adalah bahwa setiap orang akan diberikan ujian oleh Tuhan dan harus bertahan serta bersabar menghadapi segala ujian yang ada. Perihal jodoh, akan ada cara Tuhan yang bahkan tak pernah disangka-sangka untuk mempertemukan seseorang dengan jodohnya karena sejatinya jodoh tidak akan tertukar." />
      </div>
    </div>
  )
}

export default Cerita 