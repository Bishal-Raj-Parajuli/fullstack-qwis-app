import React from 'react';

interface MainContentWrapperProps {
  children: React.ReactNode; // children is required
}

export default function MainContentWrapper({ children }: MainContentWrapperProps) {
  return (
    <section className="mx-4 mt-16 py-5">
      {children}
    </section>
  );
}
