'use client'
import { Bookmark } from '@/components/CodeApp'
interface Props { bookmarks: Bookmark[]; onSelectChapter: (n: number) => void; onRemove: (ch: number, id: string) => void }
export default function BookmarkView({ bookmarks, onSelectChapter, onRemove }: Props) {
  if (!bookmarks.length) return (
    <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">No bookmarks yet. Click ☆ on any section.</div>
  )
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
      {bookmarks.map((b,i) => (
        <div key={i} className="px-4 py-3 border border-gray-100 border-l-2 border-l-brand rounded-r-lg bg-white cursor-pointer hover:bg-gray-50" onClick={() => onSelectChapter(b.ch)}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-[10px] font-mono text-brand mb-1">§ {b.id} — Ch.{b.ch}: {b.ct}</div>
              <div className="text-[13px] font-medium text-gray-900">{b.h}</div>
            </div>
            <button onClick={e => { e.stopPropagation(); onRemove(b.ch, b.id) }} className="text-[10px] font-mono text-gray-400 hover:text-red-500">Remove ✕</button>
          </div>
        </div>
      ))}
    </div>
  )
}
