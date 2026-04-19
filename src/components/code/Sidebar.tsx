'use client'

import { Chapter } from '@/data/chapters'

interface Props {
  chapters: Chapter[]
  currentChapter: number
  onSelectChapter: (n: number) => void
  onSelectCalc: (calc: 'gas' | 'water' | 'dfu') => void
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
      <div className="text-[9px] font-mono tracking-[1.5px] text-gray-400 uppercase px-4 pt-3 pb-1">Calculators</div>
      {(['gas', 'water', 'dfu'] as const).map(calc => (
        <button key={calc} onClick={() => onSelectCalc(calc)}
          className="w-full flex items-center gap-1.5 px-4 py-[5px] text-left text-[11.5px] text-gray-500 border-l-2 border-transparent hover:bg-gray-100 hover:text-gray-800 transition-all">
          <span className="text-[8px] font-mono text-green-800 bg-green-100 px-1 rounded flex-shrink-0">CALC</span>
          {calc === 'gas' ? 'Gas sizing' : calc === 'water' ? 'Water sizing' : 'DFU & storm'}
        </button>
      ))}
      <div className="text-[9px] font-mono tracking-[1.5px] text-gray-400 uppercase px-4 pt-3 pb-1">Legend</div>
      <div className="flex items-center gap-1.5 px-4 py-1 text-[11px] text-gray-400">
        <span className="w-[5px] h-[5px] bg-brand rounded-full flex-shrink-0" />
        Has Utah amendments
      </div>
    </div>
  )
}
