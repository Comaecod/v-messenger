import React from 'react';
import DesktopSiderbar from './DesktopSidebar';

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full'>
      <DesktopSiderbar />
      <main className='lg:pl-20 h-full'>{children}</main>
    </div>
  );
}

export default Sidebar;
