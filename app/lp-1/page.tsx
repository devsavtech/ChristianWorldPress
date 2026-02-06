"use client";

import { HeroSection } from '@/components/lp-1/herosection'
import BookSection from '@/components/bestsellingbooks'
import FAQ from '@/components/lp-1/faq'
import { ContactSection } from "@/components/contact-section";
import Brands from "@/components/brands";
import { DistributionSection } from "@/components/distribution-section";
import { Popup } from "@/components/lp-1/popup";
import { PartnersSection } from "@/components/partners-section";
import { Navbar } from "@/components/lp-1/navbar";
import { Footer } from "@/components/lp-1/footer";
import { useState, useEffect } from "react";

export default function NewPage() {
  const [showPopup, setShowPopup] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading completion
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen">
      {/* Page Loader */}
      {isLoading && (
        <div 
          className="fixed top-0 left-0 w-full h-full z-[9999] flex items-center justify-center"
          style={{
            backgroundColor: '#0c0a09'
          }}
        >
          <div className="spinner text-center p-8">
            <img 
              src="/logo/Chrisitan World Press Logo.png" 
              alt="Christian World Press Logo"
              className="w-[150px] h-auto mb-6"
              onError={(e) => {
                // Fallback if image fails to load
                e.currentTarget.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'text-2xl font-bold animate-pulse';
                fallback.textContent = 'Christian World Press';
                e.currentTarget.parentNode?.appendChild(fallback);
              }}
            />
            {/* Loading Progress Bar - Match image width */}
            <div className="w-[150px] h-1.5 bg-[#3d3b37] rounded-full overflow-hidden mx-auto">
              <div className="h-full bg-[#8b0000] rounded-full" 
                   style={{ 
                     width: '0%',
                     animation: 'loadingBarOnce 1.5s ease-in-out forwards'
                   }}>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Navbar />
      <HeroSection />
      <Brands />
      
         <BookSection
          sectionTitle="Best Selling Books"
          sectionId="bestsellers"
          booksData={[
            {
              id: 1,
              image: "/newreleasebooks/thebookofenoch.jpg",
              title: "The Book of Enoch",
              author: "Timothy Alberino",
              rating: 4.8,
              reviews: 684,
              price: 19.99,
              link: "https://www.amazon.com/Book-Enoch-Commentary-Watchers-Complete/dp/B0D7J15TXS/ref=sr_1_13?dib=eyJ2IjoiMSJ9.iNK1In4EmipccTOZdXwdLB09sei1q8DZHqZ0XIVDbIp19UQb5rtePc_HLhRKD_XabU3v5SAML-YD0sbASFp3pa6A3wgnSAN5tCLLi8UTcaDLKF3ZsjrxCD8_maynY25auBhbvHVHaK56ocTmj487-1KyX3ULRWbPFvzucBkO-UW2fJrfTTS1nm7K7e97R87pUJX-ufu98mbHsGEd0cJJaSGzdMo5iDIGVw0Pc4KV9KSR6FzMe9pTilhLdcIFBoUazMaZ9efA6RUr3vxAy4gnjI-w8jq2WX6s1doRzM13L7I.YKa6zyPYTZpiSM3asWw6kAZqlfeRoRn7umAiWRBBMxI&dib_tag=se&keywords=independently+published+books&qid=1768432318&sr=8-13",
            },
            //  {
            //   id: 12,
            //   image: '/newreleasebooks/thebookofenoch.jpg',
            //   title: 'The Life Framework',
            //   author: 'Shannon L Carter',
            //   rating: 5,
            //   reviews: 1,
            //   price: 18.98,
            //   link: 'https://www.amazon.com/dp/B0GD4N9M2D?ref=cm_sw_r_ffobk_cp_ud_dp_2QHZ4PZASGNSANM6J74J&ref_=cm_sw_r_ffobk_cp_ud_dp_2QHZ4PZASGNSANM6J74J&social_share=cm_sw_r_ffobk_cp_ud_dp_2QHZ4PZASGNSANM6J74J&bestFormat=true'
            // },
            {
              id: 2,
              image: "/newreleasebooks/thewisdomofsolomon.jpg",
              title: "The Wisdom of Solomon",
              author: "NR Publishers",
              rating: 4.5,
              reviews: 67,
              price: 7.99,
              link: "https://www.amazon.com/Wisdom-Solomon-Christian-Writings-Commentaries/dp/B0DJBBN56G/ref=sr_1_2?crid=3M59MG0JS096Z&dib=eyJ2IjoiMSJ9.QKhSLZN1TySaI6ODCh1FTuwrwhPrnr9ksOSxANV2xSczGdtIKYoI57E5PBM4PDsKuijCbLAcOG4aShcSn5wBNyiO-Jd71Ww14UiCRDFdtCXwKNusexElgZOqsn9MQOH3Cu7w1PQRTlDuDYCthgBI7Ij_7hrQyu-wlJZp_sLnuIpjf8yPFWHSvyKYyaxXKEzkbEw1Lhn548VMBDIkKtuz9KRpSXLIJ3dY8Yl2OA4q7rk.VYBDbWxuq_Uk6QAIjTbiziwol2mQsUqoUfR14PgC7S0&dib_tag=se&keywords=christians+book+by+independent+publisher&qid=1768423364&sprefix=christians+book+by+independent+publisher%2Caps%2C406&sr=8-2",
            },
            {
              id: 3,
              image: "/newreleasebooks/apttmh_.jpg",
              title: "A Date with Destiny",
              author: "Yisrael Love",
              rating: 5,
              reviews: 3,
              price: 9.99,
              link: "https://www.amazon.com/APTTMH-All-Praises-Most-High/dp/B0DYK94NJJ/ref=sr_1_5?dib=eyJ2IjoiMSJ9.KYtsIOEPnHfqAw6dx-LuKE0LzqjdKvidflipfOezfBc68XChn10PBqAoLo588zrIlFplZCbgWIj52354aQmbU4HU18sQwJUvjSuhjxWq5k8-5kJC6RiNLqzHvBu-EU1y0GtAJ_uzpJ7yNbaY7tMeezb4OBYGFUbb-v-9ZmtQw4AcPb7HM7JSBIvgG9fD7hHJ.yAJ8cDZGLC3pkHSa6gEu2ZBPObmMXTOGYAyf4HMxfVw&dib_tag=se&qid=1770054531&refinements=p_27%3A%28self+published%29&s=books&sr=1-5&utm_source=chatgpt.com",
            },
            {
              id: 4,
              image: "/newreleasebooks/dayswithjesus.jpg",
              title: "Days With Jesus",
              author: "Jim Jackson",
              rating: 5,
              reviews: 35,
              price: 17.99,
              link: "https://www.amazon.com/Days-Jesus-Greatest-History-Everything/dp/B0F3JT1V57/ref=sr_1_12?dib=eyJ2IjoiMSJ9.aYToraoB_v_R__xAGQAcdwNDL5IpUGeNNTyTFqQsrVYT7V4anw1wA-whlju8z6iz9mWKtrSTWWXN_Pv_oIYOieOjDyrvv_xuvyxw3Pyy2DZBuOqCrQo1ck4fsmkRuPAXfqV57p17BjITHTMD0KbNNmFDnz55TEkgJRYPIEQcPsBCueE5OzFcguVg6f6KvkI8wd4jXIplGC71QvzN7TJoB9bvaZ0AQy8Emes1OGUCx4oSSW8tOmeiOGBQYorANBRm_Kv6EuwB_uxUI6ZqOlaSZsiIshpPEcFP480DZWFGEto.95hdl00GNUrUiPjy6_1G3xu9sdS-h9Dk3WjIXlX1k5M&dib_tag=se&keywords=Independently+Published+books&qid=1770054694&s=books&sr=1-12",
            },
            {
              id: 5,
              image: "/newreleasebooks/adatewithdestiny.jpg",
              title: "A Date With Destiny",
              author: "ori Ridenour",
              rating: 5,
              reviews: 1,
              price: 7.99,
              link: "https://www.amazon.com/Date-Destiny-January-25/dp/B0BRYXZKZC/ref=sr_1_18_sspa?crid=D7HLCOIFP7LM&dib=eyJ2IjoiMSJ9.v6VCg8jqEPXcZV2N85dVhasgqTFWEdGC9r2OeKl85yTAW-vTyErxXSrYJnsrT3O9Q2YbJ3udib_JtsfoRTySI0M5JYS9BWTFgsgPBViV0mUmIEFUr0ecAr651lSCioBW5Y8SE8ckBemaJwoUV8HkX98dxUKx2OambYlad3QdQToKUD7auQyk2Haaga5ad4J2smBTNL9NFdh4gpd6-68QeObwV50w7tZq2V11RsThv1A.pdNP5X_0_UOTDokcvk_A7F6Pf5NZv_IeGRCTexl45XQ&dib_tag=se&keywords=christians+Christmas+independently+book+published&qid=1770056605&s=books&sprefix=christians+christmas+independently+book+published%2Cstripbooks%2C286&sr=1-18-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1",
            },
            {
              id: 6,
              image: "/newreleasebooks/voiceoftheheart.jpg",
              title: "Voice of the Heart",
              author: "Greg Pai",
              rating: 5,
              reviews: 8,
              price: 27.95,
              link: "https://www.amazon.com/dp/B0DK5N1L97/ref=sspa_dk_detail_5?psc=1&pf_rd_p=953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_r=Y2BVJJS2SN2GF1KACED1&pd_rd_wg=24Sfn&pd_rd_w=OzPgD&content-id=amzn1.sym.953c7d66-4120-4d22-a777-f19dbfa69309&pd_rd_r=8611a057-d922-41ce-a019-f4868ab77f62&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
            }
          ]}
        />
        <BookSection
          sectionTitle="New Releases"
          sectionId="new-releases"
          booksData={[
            {
              id: 1,
              image: "/newreleasebooks/biblestories.jpg",
              title: "Bible Stories",
              author: "Bible Stories",
              rating: 5,
              reviews: 1,
              price: 11.99,
              link: "https://www.amazon.com/dp/B0GGBS3D3D/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B0GGBS3D3D&pd_rd_w=OzPgD&content-id=amzn1.sym.953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_p=953c7d66-4120-4d22-a777-f19dbfa69309&pf_rd_r=Y2BVJJS2SN2GF1KACED1&pd_rd_wg=24Sfn&pd_rd_r=8611a057-d922-41ce-a019-f4868ab77f62&s=books&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy",
            },
            {
              id: 2,
              image: "/newreleasebooks/biblestudyjounraladventcalender.jpg",
              title: "Bible Study Journal",
              author: "Susan Mayford",
              rating: 4.7,
              reviews: 144,
              price: 15.99,
              link: "https://www.amazon.com/dp/B0FF36YHM5/ref=sspa_dk_rhf_search_pt_sub_16/?_encoding=UTF8&ie=UTF8&psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9yaGZfc2VhcmNoX3BlcnNvbmFsaXplZA%3D%3D&pd_rd_w=x1pDe&pd_rd_wg=agDsp&pd_rd_r=f0744a1b-c96c-4a96-bc76-d8496761d30b&content-id=amzn1.sym.74b85f4a-bfbe-49a3-8252-7e9927a19318&ref_=sspa_dk_rhf_search_pt_sub",
            },
            {
              id: 3,
              image: "/newreleasebooks/bridgesoflove.jpg",
              title: "Bridges of Love",
              author: "Rebekah Davis",
              rating: 4.9,
              reviews: 30,
              price: 12.99,
              link: "https://www.amazon.com/Bridges-Love-Understanding-Message-Everyone/dp/B08MSVJLZ7/ref=sr_1_22_sspa?crid=4BQFQ1RE7MOC&dib=eyJ2IjoiMSJ9.CZHdf7AjCgLuj_IZtWZpvmn7mqBjDwd1hIVsyoRfzuHIH57WObprvN_GtYwLNVrYCwuaEmls0UqMQ7GDDA9LUEn4zakvjnhLMM1iBt2TOUcwktuqU-t7eioI6kXrC7FO5-bKaCO018j0emEvGBfYRNl8L_xE85BllfedEn2jDH4V4gPAsgQIFb9ebDf6-Ui5LM9_f7FzbYInj89xCAms7P7aJ7evgNLZpideonicHac.hMkbwCtKtJv8sCgrCbsdde3Itm8OElsTOrZeDCbf-bI&dib_tag=se&keywords=independently+published+books+on+christian&qid=1768431123&sprefix=independently+published+books+on+christian%2Caps%2C330&sr=8-22-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1",
            },
            // {
            //   id: 4,
            //   image: '/newreleasebooks/bridgesoflove.jpg',
            //   title: 'God Secret',
            //   author: 'KENNY YOUNGBLOOD',
            //   rating: 5,
            //   reviews: 1,
            //   price: 26.99,
            //   link: 'https://www.amazon.com/dp/1969506881?ref=cm_sw_r_ffobk_cp_ud_dp_MJGWR5EZ3S5HGTRPT7CB&ref_=cm_sw_r_ffobk_cp_ud_dp_MJGWR5EZ3S5HGTRPT7CB&social_share=cm_sw_r_ffobk_cp_ud_dp_MJGWR5EZ3S5HGTRPT7CB&bestFormat=true'
            // },
            // {
            //   id: 5,
            //   image: '/bestsellingbooks/inhisimage.jpg',
            //   title: 'In His Image',
            //   author: 'Sinikka Pember Coulter',
            //   rating: 5,
            //   reviews: 1,
            //   price: 19.98,
            //   link: 'https://www.amazon.com/dp/B08TJCFHWJ/ref=cm_sw_r_em_ap_atc_dp_Y2MHAQRMQQWNMQZ5EK85'
            // },
            // {
            //   id: 6,
            //   image: '/newreleasebooks/christianhymns.jpg',
            //   title: 'Insights from the Hearts of a Shepheard',
            //   author: 'Bronze Book Publishers',
            //   rating: 4.9,
            //   reviews: 62,
            //   price: 10.99,
            //   link: 'https://www.amazon.com/Christian-Hymns-Word-Search-Featuring/dp/B0DC4DHWMH/ref=sr_1_1?crid=3M59MG0JS096Z&dib=eyJ2IjoiMSJ9.QKhSLZN1TySaI6ODCh1FTuwrwhPrnr9ksOSxANV2xSczGdtIKYoI57E5PBM4PDsKuijCbLAcOG4aShcSn5wBNyiO-Jd71Ww14UiCRDFdtCXwKNusexElgZOqsn9MQOH3Cu7w1PQRTlDuDYCthgBI7Ij_7hrQyu-wlJZp_sLnuIpjf8yPFWHSvyKYyaxXKEzkbEw1Lhn548VMBDIkKtuz9KRpSXLIJ3dY8Yl2OA4q7rk.VYBDbWxuq_Uk6QAIjTbiziwol2mQsUqoUfR14PgC7S0&dib_tag=se&keywords=christians+book+by+independent+publisher&qid=1768423364&sprefix=christians+book+by+independent+publisher%2Caps%2C406&sr=8-1'
            // },
            {
              id: 7,
              image: "/newreleasebooks/dailydevotionalforwomen.jpg",
              title: "Daily Devotional",
              author: "Made Easy Press",
              rating: 4.7,
              reviews: 475,
              price: 14.99,
              link: "https://www.amazon.com/Daily-Devotional-Women-Christian-Inspiration/dp/B0DKJGN7RV/ref=pd_rhf_se_s_pd_sbs_rvi_d_sccl_2_18/137-7411125-7219123?pd_rd_w=6K9Pg&content-id=amzn1.sym.6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_p=6640a844-ab24-4352-ac9b-78899e683a5e&pf_rd_r=1XGY9RPF9F5BVHQ7WQJN&pd_rd_wg=agDsp&pd_rd_r=f0744a1b-c96c-4a96-bc76-d8496761d30b&pd_rd_i=B0DKJGN7RV&psc=1",
            },
            {
              id: 8,
              image: "/newreleasebooks/marriageontherock.jpg",
              title: "Marriage on the Rock",
              author: "Jimmy Evans",
              rating: 4.8,
              reviews: 540,
              price: 14.99,
              link: "https://www.amazon.com/Marriage-Rock-Couples-Discussion-Guide/dp/1790349907/ref=sr_1_10?crid=4BQFQ1RE7MOC&dib=eyJ2IjoiMSJ9.CZHdf7AjCgLuj_IZtWZpvmn7mqBjDwd1hIVsyoRfzuHIH57WObprvN_GtYwLNVrYCwuaEmls0UqMQ7GDDA9LULs0qnPR6IDSAksz4s6TrWRBkr-kyQnxPQg1ecRsfoky5-bKaCO018j0emEvGBfYRNl8L_xE85BllfedEn2jDH4V4gPAsgQIFb9ebDf6-Ui5LM9_f7FzbYInj89xCAms7P7aJ7evgNLZpideonicHac.LG21w20a4kS_i8UrLadOGOsjMqQoWbEk0oVUM4PbKqM&dib_tag=se&keywords=independently+published+books+on+christian&qid=1768430814&sprefix=independently+published+books+on+christian%2Caps%2C330&sr=8-10",
            },
            {
              id: 9,
              image: "/newreleasebooks/peacefortheanxiousheart.jpg",
              title: "Peace for the Anxious Heart",
              author: "Joey Jaymes",
              rating: 5,
              reviews: 1,
              price: 12.99,
              link: "https://www.amazon.com/Peace-Anxious-Heart-Christian-Devotional/dp/B0G8X7MHWJ/ref=sr_1_33_sspa?crid=3DUMYLF5HS1C9&dib=eyJ2IjoiMSJ9.rCW-oBGf9ZODBdyZawKlRxspvVaNY01mZAtJmO3j_87ujfbxMhMvQT245SLAj6Ni4n--vp8Be8ZIIosda9PmUcF-LdawU977MqxuLbowiBbczQQjs5QOvhUFFha0-fHZKUg5FdO3SDIkCch7DzyjHMb90VnSZCr4nJFELNswsXqsY8Wl9ZjkM9BdEBE8Txk_T2ZY4Iz-6pIjO_4LSk6_0D1wqU-GLooFeuGEtkOqs49usq-Dfd7OTjkaj5DHOh990bzWWhPhsVKqQfGXMSUksT-Wt8HWChAyNkVgilz4QrI.RgJDSuRU6AA7oWR3n_PmqSxh1O699TvSAIVKUcjodqM&dib_tag=se&keywords=christian+books&qid=1768416360&s=books&sprefix=christian+books%2Cstripbooks%2C503&sr=1-33-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1",
            },
            {
              id: 10,
              image: "/newreleasebooks/sacredmoments.jpg",
              title: "Sacred Moments",
              author: "Palmer Publishing",
              rating: 4.9,
              reviews: 137,
              price: 12.99,
              link: "https://www.amazon.com/dp/B0DX83D6YF/ref=sspa_dk_rhf_search_pt_sub_8/?_encoding=UTF8&ie=UTF8&psc=1&sp_csd=d2lkZ2V0TmFtZT1zcF9yaGZfc2VhcmNoX3BlcnNvbmFsaXplZA%3D%3D&pd_rd_w=x1pDe&pd_rd_wg=agDsp&pd_rd_r=f0744a1b-c96c-4a96-bc76-d8496761d30b&content-id=amzn1.sym.74b85f4a-bfbe-49a3-8252-7e9927a19318&ref_=sspa_dk_rhf_search_pt_sub",
            },
          ]}
        />
        <DistributionSection />
        
        <PartnersSection />

        <FAQ />
        <ContactSection />

      <Footer />
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </div>
  )
}