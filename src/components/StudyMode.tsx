'use client'

import { useState } from 'react'

interface Card { q: string; a: string; sec?: string; ch?: number }

const CARDS: Card[] = [
  { q: 'What is the minimum slope for horizontal drain pipe ≤2-1/2"?', a: '1/4 unit vertical in 12 units horizontal (2% slope), per IPC § 704.1.', sec: '704.1', ch: 7 },
  { q: 'What is the minimum slope for horizontal drain pipe 3" or larger?', a: '1/8 unit vertical in 12 units horizontal (1% slope), per IPC § 704.1.', sec: '704.1', ch: 7 },
  { q: 'In Utah, within how many days must a backflow preventer be tested after installation?', a: 'Within 10 days of being placed into service, per Utah Code § 15A-3-303.', sec: '312.10.2', ch: 3 },
  { q: 'In Utah, where must water heater seismic strapping be placed?', a: 'Upper one-third AND lower one-third of the appliances vertical dimensions, per Utah Code § 15A-3-305.', sec: '502.4', ch: 5 },
  { q: 'What is the minimum trap seal depth?', a: 'Not less than 2 inches, per IPC § 1002.4.', sec: '1002.4', ch: 10 },
  { q: 'What is the maximum trap seal depth?', a: 'Not more than 4 inches, per IPC § 1002.4.', sec: '1002.4', ch: 10 },
  { q: 'In Utah, what is the max flow rate for a private lavatory?', a: '1.5 gpm at 60 psi, per Utah Code § 15A-3-306.', sec: '604.4', ch: 6 },
  { q: 'In Utah, is a floor drain required in public restrooms?', a: 'Yes. Utah Code § 15A-3-304 added § 413.5: All public toilet rooms shall have at least one floor drain.', sec: '413.5', ch: 4 },
  { q: 'What is the min shower floor area?', a: '1,024 square inches, capable of encompassing a 30-inch circle, per IPC § 421.4.', sec: '421.4', ch: 4 },
  { q: 'In Utah, what distance requires a sewer connection?', a: 'Where the sewer is accessible and within 300 feet of the property line, per Utah Code § 15A-3-307.', sec: '701.2', ch: 7 },
]

interface Props { onSelectChapter: (n: number) => void }

export default function StudyMode({ onSelectChapter }: Props) {
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = CARDS[idx]
  function next() { setIdx((idx+1)%CARDS.length); setFlipped(false) }
  function prev() { setIdx((idx-1+CARDS.length)%CARDS.length); setFlipped(false) }
  return (
    <div className="flex-1 overflow-y-auto px-6 py-5">
      <div className="max-w-[520px] mx-auto flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-gray-400">Card {idx+1} of {CARDS.length}</span>
          <div className="flex gap-2">
            <button onClick={prev} className="text-[11px] font-mono px-3 py-1 border border-gray-200 rounded text-gray-500 hover:border-gray-400">← Prev</button>
            <button onClick={next} className="text-[11px] font-mono px-3 py-1 border border-gray-200 rounded text-gray-500 hover:border-gray-400">Next →</button>
          </div>
        </div>
        <button onClick={() => setFlipped(!flipped)}
          className="w-full text-left bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-gray-300 min-h-[180px] flex flex-col justify-between">
          <div>
            <div className="text-[9px] font-mono text-brand uppercase tracking-wider mb-2.5">{flipped ? 'Answer' : 'Question — click to reveal'}</div>
            <div className="text-[14px] font-medium text-gray-900 leading-relaxed">{flipped ? card.a : card.q}</div>
          </div>
          {flipped && card.ch && <button onClick={e => { e.stopPropagation(); onSelectChapter(card.ch!) }}
            className="text-[10px] font-mono text-brand mt-3 hover:underline self-start">→ Jump to § {card.sec}</button>}
        </button>
        <div className="flex justify-center gap-1 flex-wrap">
          {CARDS.map((_,i) => <button key={i} onClick={() => { setIdx(i); setFlipped(false) }} className={`w-2 h-2 rounded-full ${ i===idx ? 'bg-brand' : 'bg-gray-200'}`} />)}
        </div>
        <div className="text-center text-[11px] text-gray-400">{CARDS.length} flashcards — IPC facts, Utah amendments, calculators</div>
      </div>
    </div>
  )
}
