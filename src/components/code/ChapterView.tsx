'use client'
import { useRef, useEffect } from 'react'
import { Chapter, Section } from '@/data/chapters'
import { Bookmark } from '@/components/CodeApp'
interface Props { chapter: Chapter; isBookmarked: (ch: number, id: string) => boolean; onToggleBookmark: (bm: Bookmark) => void }
export default function ChapterView({ chapter, isBookmarked, onToggleBookmark }: Props) {
  const topRef = useRef<HTMLDivElement>(null)
  useEffect(() => { topRef.current?.scrollTo({ top: 0 }) }, [chapter.n])
  return (
    <div ref={topRef} className="flex-1 overflow-y-auto px-6 py-5">
      <div className="border-b border-gray-200 pb-3 mb-4">
        <div className="text-[10px] font-mono text-brand tracking-[1.5px] uppercase mb-1">Chapter {String(chapter.n).padStart(2, '0')} — 2021 IPC</div>
        <div className="text-2xl font-medium text-gray-900 mb-1">{chapter.t}</div>
      </div>
      {chapter.ss.map(s => (
        <div key={s.id} className={`mb-2 px-4 py-3 rounded-r-lg border border-gray-100 border-l-2 bg-white ${
          s.utah ? 'border-l-brand' : 'border-l-gray-200'
        }`}>
          {s.utah && <span className="bg-brand text-white text-[9px] font-mono px-1.5 py-0.5 rounded mb-1 inline-flex uppercase">Utah Amendment</span>}
          <button onClick={() => onToggleBookmark({ ch: chapter.n, id: s.id, h: s.h, ct: chapter.t })}
            className={`float-right text-[11px] font-mono border-none bg-none cursor-pointer ml-2 ${isBookmarked(chapter.n, s.id) ? 'text-brand' : 'text-gray-300 hover:text-brand'}`}>
            {isBookmarked(chapter.n, s.id) ? '★' : '☆'}
          </button>
          <div className="text-[11px] font-mono text-brand font-medium mb-0.5">{s.id}</div>
          <div className="text-[13px] font-medium text-gray-900 mb-1">{s.h}</div>
          {s.b && <div className="text-[12.5px] text-gray-600 leading-relaxed whitespace-pre-line">{s.b}</div>}
          {s.utah && s.ut && <div className="mt-2 px-3 py-2 bg-orange-50 rounded text-[12px] text-gray-800 leading-relaxed border-l-2 border-brand"><div className="text-[10px] font-mono text-brand font-medium mb-1">{s.uc}</div>{s.ut}</div>}
        </div>
      ))}
    </div>
  )
}
