'use client'

import { Chapter } from '@/data/chapters'

interface Props {
  chapters: Chapter[]
  currentChapter: number
  onSelectChapter: (n: number) => void
  onSelectCalc: (calc: 'gas' | 'water') => void
}

export default function Sidebar({ chapters, currentChapter, onSelectChapter, onSelectCalc }: Props) {
  return (
    <div className="w-[188px] flex-shrink-0 border-r border-gray-100 bg-gray-50 overflow-y-auto py-1">
      <div className="text-[9px] font-mono tracking-[1.5px] text-gray-400 uppercase px-4 pt-2 pb-1">Chapters</div>
      {chapters.map(ch => (
        <button key={ch.n} onClick={() => onSelectChapter(ch.n)}
          className={`w-full flex items-center gap-1.5 px-4 py-[5px] text-left text-[11.5px] border-l-2 transition-all ${
            ch.n === currentChapter ? 'bg-white text-gray-900 font-medium border-brand' : 'text-gray-500 border-transparent hover:bg-gray-100'
          }`}>
          <span className="text-[9px] font-mono text-brand flex-shrink-0 w-[18px]">{String(ch.n).padStart(2, '0')}</span>
          <span className="leading-tight">{ch.t}</span>
          {ch.u && <span className="ml-auto flex-shrink-0 w-[5px] h-[5px] bg-brand rounded-full" />}
        </button>
      ))}
    </div>
  )
}
