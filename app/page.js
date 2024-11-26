import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

const DynamicAboutSection = dynamic(
  () => import('./components/homepage/about'),
  { ssr: false }
)
const DynamicContactSection = dynamic(
  () => import('./components/homepage/contact'),
  { ssr: false }
)
const DynamicEducation = dynamic(
  () => import('./components/homepage/education'),
  { ssr: false }
)
const DynamicExperience = dynamic(
  () => import('./components/homepage/experience'),
  { ssr: false }
)
const DynamicHeroSection = dynamic(
  () => import('./components/homepage/hero-section'),
  { ssr: false }
)
const DynamicProjects = dynamic(
  () => import('./components/homepage/projects'),
  { ssr: false }
)
const DynamicSkills = dynamic(
  () => import('./components/homepage/skills'),
  { ssr: false }
)

async function getData() {
  const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data = await res.json();

  const filtered = data.filter((item) => item?.cover_image).sort(() => Math.random() - 0.5);

  return filtered;
};

export default async function Home() {
  const blogs = await getData();

  return (
    <>
      <DynamicHeroSection />
      <DynamicAboutSection />
      <DynamicExperience />
      <DynamicSkills />
      <DynamicProjects />
      <DynamicEducation />
      {/* <Blog blogs={blogs} /> */}
      <DynamicContactSection />
    </>
  )
};
