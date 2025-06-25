import React, { useState, useMemo, useEffect } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/components/ui/select';
import { format } from 'date-fns';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Checkbox } from '@/components/ui/checkbox.jsx';
import { ScrollArea } from '@/components/ui/scroll-area.jsx';

function generateTimeSlots(start = 8, end = 22) {
  const slots = [];
  for (let hour = start; hour < end; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    slots.push(`${hour.toString().padStart(2, '0')}:30`);
  }
  slots.push(`${end.toString().padStart(2, '0')}:00`);
  return slots;
}

export default function ReservationPicker({ onChange }) {
  // State'ler
  const [pickupDate, setPickupDate] = useState(new Date());
  const [dropoffDate, setDropoffDate] = useState(new Date());
  const [pickupTime, setPickupTime] = useState('08:00');
  const [dropoffTime, setDropoffTime] = useState('08:00');
  const [pickupLoc, setPickupLoc] = useState('');
  const [dropoffLoc, setDropoffLoc] = useState('');
  const [isDifferent, setIsDifferent] = useState(false);

  const timeSlots = generateTimeSlots();

  function handleToggle(checked) {
    setIsDifferent(checked);
  }

  // Değişiklikleri dışarı bildir
  useEffect(() => {
    onChange &&
      onChange({
        pickupDate,
        pickupTime,
        dropoffDate,
        dropoffTime,
        pickupId: pickupLoc,
        dropoffId: isDifferent ? dropoffLoc : pickupLoc,
      });
  }, [
    pickupDate,
    pickupTime,
    dropoffDate,
    dropoffTime,
    pickupLoc,
    isDifferent,
    dropoffLoc,
    onChange,
  ]);

  return (
    <div className="flex bg-background w-[75vw] p-[3vh] rounded-xl gap-[3vh]">
      {/* Lokasyon Seçimi */}
      <div className=" flex flex-col rounded-lg flex-[1]">
        <div className="flex flex-row gap-[1vh]">
          <Select value={pickupLoc} onValueChange={setPickupLoc}>
            <SelectTrigger className="w-full pt-[6vh] flex-1 relative pl-[1vw] pb-[2vh] text-lg [&>svg]:hidden bg-card border-none">
              <label className="flex gap-[1vh] font-semibold text-sm absolute top-1 items-center left-3">
                <FaMapMarkerAlt />
                Alış Noktası
              </label>
              <SelectValue placeholder="İlçe seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="!text-sm text-[#777788]">İstanbul</SelectLabel>
                <SelectItem value="1" className="cursor-pointer">
                  Maltepe
                </SelectItem>
                <SelectItem value="2" className="cursor-pointer">
                  Beşiktaş
                </SelectItem>
                <SelectItem value="3" className="cursor-pointer">
                  Bakırköy
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="!text-sm text-[#777788]">Bursa</SelectLabel>
                <SelectItem value="4" className="cursor-pointer">
                  Osmangazi
                </SelectItem>
                <SelectItem value="5" className="cursor-pointer">
                  Nilüfer
                </SelectItem>
                <SelectItem value="6" className="cursor-pointer">
                  Yıldırım
                </SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel className="!text-sm text-[#777788]">Ankara</SelectLabel>
                <SelectItem value="7" className="cursor-pointer">
                  Çankaya
                </SelectItem>
                <SelectItem value="8" className="cursor-pointer">
                  Keçiören
                </SelectItem>
                <SelectItem value="9" className="cursor-pointer">
                  Yenimahalle
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {isDifferent && (
            <Select value={dropoffLoc} onValueChange={setDropoffLoc}>
              <SelectTrigger className="w-full pt-[6vh] flex-1 relative pl-[1vw] pb-[2vh] text-lg [&>svg]:hidden bg-card border-none">
                <label className="flex gap-[1vh] font-semibold text-sm absolute top-1 items-center left-3">
                  <FaMapMarkerAlt />
                  İade Noktası
                </label>
                <SelectValue placeholder="İlçe seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel className="!text-sm text-[#777788]">İstanbul</SelectLabel>
                  <SelectItem value="1" className="cursor-pointer">
                    Maltepe
                  </SelectItem>
                  <SelectItem value="2" className="cursor-pointer">
                    Beşiktaş
                  </SelectItem>
                  <SelectItem value="3" className="cursor-pointer">
                    Bakırköy
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="!text-sm text-[#777788]">Bursa</SelectLabel>
                  <SelectItem value="4" className="cursor-pointer">
                    Osmangazi
                  </SelectItem>
                  <SelectItem value="5" className="cursor-pointer">
                    Nilüfer
                  </SelectItem>
                  <SelectItem value="6" className="cursor-pointer">
                    Yıldırım
                  </SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel className="!text-sm text-[#777788]">Ankara</SelectLabel>
                  <SelectItem value="7" className="cursor-pointer">
                    Çankaya
                  </SelectItem>
                  <SelectItem value="8" className="cursor-pointer">
                    Keçiören
                  </SelectItem>
                  <SelectItem value="9" className="cursor-pointer">
                    Yenimahalle
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>

        <div className="flex items-center gap-3 p-[2vh]">
          <Checkbox id="terms" checked={isDifferent} onCheckedChange={handleToggle} />
          <label htmlFor="terms">Aracı Farklı Lokasyonda Bırakacağım</label>
        </div>
      </div>
      {/* Alım */}
      <div className="flex items-start  flex-1">
        <div className="flex-[2] relative justify-center items-start flex flex-col">
          <label className="flex absolute top-1 left-3 items-center gap-2 mb-2 text-sm font-semibold ">
            <CalendarIcon className="w-5 h-5" />
            Alım Tarihi
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="w-full h-[8vh] pt-[4vh] justify-start bg-card rounded-l rounded-r-none border-r"
              >
                {format(pickupDate, 'dd MMM yyyy')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-card z-50 mt-[1vh]" align="start">
              <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex-1 relative justify-center items-start flex flex-col">
          <label className="flex absolute top-1 left-3 items-center gap-2 mb-2 text-sm font-semibold ">
            <ClockIcon className="w-5 h-5" />
            Alım Saati
          </label>
          <Select value={pickupTime} onValueChange={setPickupTime}>
            <SelectTrigger className="w-full h-[8vh] pt-[4vh] justify-start rounded-r rounded-l-none bg-card border-none [&>svg]:hidden">
              <SelectValue placeholder="Saat seçin" />
            </SelectTrigger>
            <SelectContent position="item-aligned" className="max-h-64 scroll-smooth">
              <ScrollArea className="h-64">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* İade */}
      <div className="flex items-start  flex-1">
        <div className="flex-[2] relative justify-center items-start flex flex-col">
          <label className="flex absolute top-1 left-3 items-center gap-2 mb-2 text-sm font-semibold ">
            <CalendarIcon className="w-5 h-5" />
            Alım Tarihi
          </label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="w-full h-[8vh] pt-[4vh] justify-start bg-card rounded-l rounded-r-none border-r shadow-sm"
              >
                {format(dropoffDate, 'dd MMM yyyy')}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-card z-50 mt-[1vh]" align="start">
              <Calendar mode="single" selected={dropoffDate} onSelect={setDropoffDate} />
            </PopoverContent>
          </Popover>
        </div>
        <div className="flex-1 relative justify-center items-start flex flex-col">
          <label className="flex absolute top-1 left-3 items-center gap-2 mb-2 text-sm font-semibold ">
            <ClockIcon className="w-5 h-5" />
            Alım Saati
          </label>
          <Select value={dropoffTime} onValueChange={setDropoffTime}>
            <SelectTrigger className="w-full h-[8vh] pt-[4vh] justify-start rounded-r rounded-l-none bg-card border-none [&>svg]:hidden">
              <SelectValue placeholder="Saat seçin" />
            </SelectTrigger>
            <SelectContent className="max-h-64">
              <ScrollArea className="h-64">
                {timeSlots.map((slot) => (
                  <SelectItem key={slot} value={slot}>
                    {slot}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
