'use client'

import { useState, useMemo } from 'react'
import { CHAPTERS, buildSearchIndex } from '@/data/chapters'
import Sidebar from './code/Sidebar'
import ChapterView from './code/ChapterView'
import SearchView from './code/SearchView'
import BookmarkView from './code/BookmarkView'
import StudyMode from './StudyMode'
import CalculatorView from './calculators/CalculatorView'
import AIPanel from './ai/AIPanel'

export type TabId = 'code' | 'search' | 'calc' | 'bookmarks' | 'study'
export type Bookmark = { ch: number; id: string; h: string; ct: string }

export default function CodeApp() {
  const [activeTab, setActiveTab] = useState<TabId>('code')
  const [currentChapter, setCurrentChapter] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchFilter, setSearchFilter] = useState('all')
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(localStorage.getItem('ipc_bookmarks') || '[]') } catch { return [] }
  })
  const [activeCalc, setActiveCalc] = useState<'gas' | 'water' | 'dfu'>('gas')

  const searchIndex = useMemo(() => buildSearchIndex(), [])

  function selectChapter(n: number) {
    setCurrentChapter(n)
    setActiveTab('code')
  }

  function handleSearch(q: string) {
    setSearchQuery(q)
    if (q.trim()) setActiveTab('search')
    else setActiveTab('code')
  }

  function toggleBookmark(bm: Bookmark) {
    setBookmarks(prev => {
      const exists = prev.findIndex(b => b.ch === bm.ch && b.id === bm.id)
      const next = exists >= 0 ? prev.filter((_, i) => i !== exists) : [...prev, bm]
      try { localStorage.setItem('ipc_bookmarks', JSON.stringify(next)) } catch {}
      return next
    })
  }

  function isBookmarked(ch: number, id: string) {
    return bookmarks.some(b => b.ch === ch && b.id === id)
  }

  const TABS: { id: TabId; label: string }[] = [
    { id: 'code', label: 'Code' },
    { id: 'search', label: 'Search' },
    { id: 'calc', label: 'Calculators' },
    { id: 'bookmarks', label: 'Bookmarks' },
    { id: 'study', label: 'Study' },
  ]

  return (
    <div className="flex flex-col h-screen bg-white font-sans overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center gap-3 px-5 h-[46px] bg-steel flex-shrink-0">
        <button
          onClick={() => selectChapter(1)}
          className="text-white font-mono font-medium text-lg tracking-[3px]"
        >
          UTAH<span className="text-brand">PLUMB</span>CODE
        </button>
        <div className="text-[10px] text-gray-500 font-mono border-l border-gray-700 pl-3 leading-tight">
          2021 IPC · Utah Amendments · IFGC<br />
          Utah Code Title 15A Ch. 3
        </div>
        <div className="ml-auto flex gap-2 items-center">
          <button
            onClick={() => setActiveTab('bookmarks')}
            className="text-[11px] font-mono text-gray-500 border border-gray-700 px-3 py-1 rounded hover:border-brand hover:text-brand transition-colors"
          >
            ☆ Saved
          </button>
          <button className="text-[11px] font-mono bg-brand text-white px-3 py-1 rounded hover:bg-brand-dark transition-colors">
            Unlock Full
          </button>
        </div>
      </div>

      {/* Nav tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50 flex-shrink-0">
        {TABS.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`text-[11px] font-mono px-4 py-2 border-b-2 transition-colors ${
              activeTab === t.id
                ? 'text-brand border-brand font-medium'
                : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="flex gap-2 px-4 py-2 bg-gray-50 border-b border-gray-100 flex-shrink-0">
        <div className="flex-1 flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 h-[34px] focus-within:border-brand transition-colors">
          <svg className="opacity-30 flex-shrink-0" width="13" height="13" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Search all 13 chapters + Utah amendments..."
            value={searchQuery}
            onChange={e => handleSearch(e.target.value)}
            className="border-none bg-transparent text-[13px] text-gray-800 flex-1 outline-none placeholder-gray-400"
          />
        </div>
        <select
          value={searchFilter}
          onChange={e => setSearchFilter(e.target.value)}
          className="text-[11px] font-mono bg-white border border-gray-200 text-gray-500 px-2 py-1 rounded-lg cursor-pointer"
        >
          <option value="all">All Chapters</option>
          <option value="utah">Utah Only</option>
          {CHAPTERS.map(ch => (
            <option key={ch.n} value={String(ch.n)}>Ch.{ch.n} — {ch.t}</option>
          ))}
        </select>
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          chapters={CHAPTERS}
          currentChapter={currentChapter}
          onSelectChapter={selectChapter}
          onSelectCalc={(calc) => { setActiveCalc(calc); setActiveTab('calc') }}
        />

        {/* Content area */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {activeTab === 'code' && (
            <ChapterView
              chapter={CHAPTERS.find(c => c.n === currentChapter)!}
              isBookmarked={isBookmarked}
              onToggleBookmark={toggleBookmark}
            />
          )}
          {activeTab === 'search' && (
            <SearchView
              query={searchQuery}
              filter={searchFilter}
              index={searchIndex}
              onSelectChapter={selectChapter}
            />
          )}
          {activeTab === 'calc' && (
            <CalculatorView activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
          )}
          {activeTab === 'bookmarks' && (
            <BookmarkView
              bookmarks={bookmarks}
              onSelectChapter={selectChapter}
              onRemove={(ch, id) => toggleBookmark({ ch, id, h: '', ct: '' })}
            />
          )}
          {activeTab === 'study' && (
            <StudyMode onSelectChapter={selectChapter} />
          )}
        </div>

        {/* AI Panel */}
        <AIPanel />
      </div>
    </div>
  )
}
