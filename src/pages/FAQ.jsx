import React from 'react';
import Header from '@/layouts/header.jsx';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion.jsx';
import Footer from '@/layouts/footer.jsx';
import Animation from '@/layouts/Animation.jsx';

function Faq() {
  const { t } = useTranslation();
  const faqKeys = Array.from({ length: 13 }, (_, i) => i + 1);
  return (
    <Animation>
      <div className="hero select-none">
        <Header />
        <div className="hero w-[100vw] h-[40vh] bg-[url('/faq-bg.jpg')] bg-center bg-cover bg-no-repeat flex pt-[15vh] relative">
          <div className="absolute top-0 left-0 right-0 bottom-0 z-0 bg-[rgba(0,0,0,.5)]"></div>
        </div>
      </div>
      <div className="w-[100vw] h-[30vh] border-b p-[1vh_0_3vh_2vw] flex flex-col justify-center gap-[2vh]">
        <div className="title text-4xl font-bold">{t('faqs.title')}</div>
        <div className="title text-2xl w-3/4">{t('faqs.text')} </div>
      </div>
      <div className="faqs p-[3vh]">
        <Accordion type="single" collapsible className="flex flex-col gap-[3vh]">
          {faqKeys.map((_, index) => (
            <AccordionItem
              key={index}
              value={`faq_${index}`}
              className="border-none bg-card rounded-xl p-[2vh_2vw] shadow-md"
            >
              <AccordionTrigger className="text-xl font-semibold">
                {t(`faqs.faq.question_${index + 1}`)}
              </AccordionTrigger>
              <AccordionContent className="text-lg mt-[1vh] dark:text-gray-500 text-gray-700">
                {t(`faqs.faq.answer_${index + 1}`)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <Footer />
    </Animation>
  );
}

export default Faq;
