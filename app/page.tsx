import Hero from '@/components/Hero';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import AboutUs from '@/components/AboutUs';
import StudentTestimonials from '@/components/StudentTestimonials';
import UpcomingWorkshops from '@/components/UpcomingWorkshops';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Hero />
      <FeaturedPrograms />
      <AboutUs />
      <StudentTestimonials />
      <UpcomingWorkshops />
    </div>
  );
}