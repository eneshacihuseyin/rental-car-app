import { useState, useEffect } from 'react';
import { format, setMonth, setYear } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/components/ui/language-provider.jsx';
import { tr, enUS } from 'date-fns/locale';

export function DatePicker({ placeholder, selected, onSelect, startYearOffset, endYearOffset }) {
  const { t } = useTranslation();
  const lng = useLanguage();
  const today = new Date();
  const startDate = new Date(
    today.getFullYear() - startYearOffset,
    today.getMonth(),
    today.getDate()
  );
  const endDate = new Date(today.getFullYear() - endYearOffset, today.getMonth(), today.getDate());

  const [date, setDate] = useState(selected || null);
  const [visibleMonth, setVisibleMonth] = useState(date || endDate);
  const handleSelect = (selectedDate) => {
    if (!selectedDate) return;
    if (selectedDate >= startDate && selectedDate <= endDate) {
      setDate(selectedDate);
      setVisibleMonth(selectedDate);
      onSelect?.(selectedDate);
    }
  };

  const handleMonthChange = (monthIndex) => {
    const newMonth = setMonth(visibleMonth, Number(monthIndex));
    setVisibleMonth(newMonth);
  };

  const handleYearChange = (year) => {
    const newYear = setYear(visibleMonth, Number(year));
    setVisibleMonth(newYear);
  };

  const years = Array.from(
    { length: endDate.getFullYear() - startDate.getFullYear() + 1 },
    (_, i) => startDate.getFullYear() + i
  );
  const months = [
    t('signup.months.m1'),
    t('signup.months.m2'),
    t('signup.months.m3'),
    t('signup.months.m4'),
    t('signup.months.m5'),
    t('signup.months.m6'),
    t('signup.months.m7'),
    t('signup.months.m8'),
    t('signup.months.m9'),
    t('signup.months.m10'),
    t('signup.months.m11'),
    t('signup.months.m12'),
  ];

  useEffect(() => {
    if (selected) {
      setDate(selected);
      setVisibleMonth(selected);
    }
  }, [selected]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="flex-1 justify-start text-left font-normal">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, 'dd-MM-yyyy') : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col items-center w-[18vw] p-[3vh] gap-[3vh]">
        <div className="flex gap-2 flex-1 justify-between w-full">
          <Select onValueChange={handleMonthChange}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder={format(visibleMonth, 'MMMM')} />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 12 }).map((_, idx) => (
                <SelectItem key={idx} value={idx.toString()}>
                  {months[idx]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Year Select */}
          <Select onValueChange={handleYearChange}>
            <SelectTrigger className="flex-1">
              <SelectValue placeholder={visibleMonth.getFullYear().toString()} />
            </SelectTrigger>
            <SelectContent className="flex">
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Calendar
          className="flex-1 p-0"
          mode="single"
          locale={lng.language === 'tr' ? tr : enUS}
          selected={date}
          onSelect={handleSelect}
          initialFocus
          fromDate={startDate}
          toDate={endDate}
          month={visibleMonth}
          onMonthChange={(newMonth) => setVisibleMonth(newMonth)} // <<< Şu çok önemli!
        />
      </PopoverContent>
    </Popover>
  );
}
