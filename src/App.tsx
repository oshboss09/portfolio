import { lazy, Suspense, useState } from 'react';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { ImpactStrip } from './components/ImpactStrip';
import { IosToast } from './components/IosToast';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Skills } from './components/Skills';
import { CaseStudy } from './data/portfolio';

const CaseStudyModal = lazy(() =>
  import('./components/CaseStudyModal').then((m) => ({ default: m.CaseStudyModal }))
);
const CvModal = lazy(() =>
  import('./components/CvModal').then((m) => ({ default: m.CvModal }))
);
const SummaryModal = lazy(() =>
  import('./components/SummaryModal').then((m) => ({ default: m.SummaryModal }))
);
const ChatWidget = lazy(() =>
  import('./components/ChatWidget').then((m) => ({ default: m.ChatWidget }))
);

export default function App() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [summaryOpen, setSummaryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9FF] text-[#2E2E3A]">
      <ScrollProgressBar />
      <Navbar onOpenCv={() => setCvModalOpen(true)} />

      <main className="flex-1">
        <Hero onOpenCv={() => setCvModalOpen(true)} />
        <ImpactStrip />
        <About />
        <Experience />
        <Projects onSelectProject={(study) => setSelectedStudy(study)} />
        <Skills />
        <Education />
      </main>

      <Contact onOpenCv={() => setCvModalOpen(true)} />

      <MobileBottomBar />
      <IosToast onOpenSummary={() => setSummaryOpen(true)} />

      <Suspense fallback={null}>
        <ChatWidget />
        <CaseStudyModal
          study={selectedStudy}
          onClose={() => setSelectedStudy(null)}
        />
        <CvModal
          open={cvModalOpen}
          onClose={() => setCvModalOpen(false)}
        />
        <SummaryModal
          open={summaryOpen}
          onClose={() => setSummaryOpen(false)}
          onOpenCv={() => setCvModalOpen(true)}
        />
      </Suspense>
    </div>
  );
}
