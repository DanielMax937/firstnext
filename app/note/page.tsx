'use client';

import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState('Example Text');

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <section className="w-full max-w-3xl space-y-4">
        <h1 className="text-3xl font-semibold">Note</h1>
        <textarea
          className="min-h-[320px] w-full rounded-lg border border-gray-300 p-4 text-base outline-none focus:border-gray-600"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <pre className="w-full overflow-auto rounded-lg bg-gray-100 p-4 text-sm">
          {content}
        </pre>
      </section>
    </main>
  );
}
