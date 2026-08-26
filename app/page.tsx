'use client';
import Script from 'next/script';
import { bodyHtml } from './bodyContent';

export default function Home() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <Script src="/schengen-logic.js" strategy="afterInteractive" />
    </>
  );
}