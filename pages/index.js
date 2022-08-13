import Head from 'next/head';
import BannerSection from "../src/components/home/BannerSection";
import LogoSlider from "../src/components/home/LogoSlider";
import HomeVideo from "../src/components/home/HomeVideo";
import HomeBestSellers from "../src/components/home/HomeBestSellers";
import HomeFeatured from "../src/components/home/HomeFeatured";
import HomeDeals from "../src/components/home/HomeDeals";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoverpro</title>
      </Head>

      <BannerSection />
      <LogoSlider />
      <HomeVideo />
      <HomeBestSellers />
      <HomeDeals />
      <HomeFeatured />
      
    </div>
  )
}
