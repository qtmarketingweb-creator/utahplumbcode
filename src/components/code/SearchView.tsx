'use client'
interface SearchEntry { ch: number; ct: string; id: string; h: string; b: string; ut: string; u: boolean; uc: string }
interface SearchProps { query: string; filter: string; index: SearchEntry[]; onSelectChapter: (n: number) => void }
export default function SearchView({ query, filter, index, onSelectChapter }: SearchProps) {
  if (!query.trim()) return null
  const lq = query.toLowerCase()
  const hits = index.filter(s => {
    const txt = `${s.id} ${s.h} ${s.b} ${s.ut}`.toLowerCase()
    if (!txt.includes(lq)) return false
    if (filter === 'utah') return s.u
    return true
  })
  return (
    <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-2">
      <div className="text-[11px] font-mono text-gray-400 mb-2">{hits.length} results{hits.length !== 1 ? 's' : ''}</div>
      {hits.slice(0,30).map((s,i) => (
        <button key={i} onClick={() => onSelectChapter(s.ch)}
          className={`text-left px-4 py-3 border border-gray-100 rounded-lg bg-white hover:border-gray-300 border-l-2 ${s.u ? 'border-l-brand' : 'border-l-transparent'}`}>
          <div className="text-[10px] font-mono text-brand mb-1">§ {s.id} — Ch.{s.ch} {s.u && "(UTAH)"}</div>
          <div className="text-[13px] font-medium text-gray-900 mb-1">{s.h}</div>
          <div className="text-[12px] text-gray-500">{s.b.substring(0,120)}...</div>
        </button>
      ))}
    </div>
  )
}
