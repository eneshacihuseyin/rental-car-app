import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.jsx';
import { LuUser } from 'react-icons/lu';
import { Button } from '@/components/ui/button.jsx';
import { useAuth } from '@/context/AuthContext.jsx';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { func } from 'prop-types';
function ProfileDropdown() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <LuUser className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="z-[1000]">
        <DropdownMenuItem>
          <Link to="/profile/me" className="text-sm w-full">
            {t('home.header.profile')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/profile/my-rentals" className="text-sm">
            {t('home.header.myRes')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to="/profile/change-password" className="text-sm">
            {t('home.header.changePass')}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={() => {
            window.location.pathname = '/';
            logout();
          }}
        >
          {t('home.header.logout')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ProfileDropdown;
