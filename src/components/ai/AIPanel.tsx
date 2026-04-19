'use client'
import { useState } from 'react'
interface Message { role: 'user' | 'assistant'; content: string }
const SUGGESTIONS = ['What is the min slope for horizontal drain?','How to size water service for a 3-bed house?','Utah seismic strapping for water heaters?','Utah backflow installation requirements?']
export default function AIPanel() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  async function send(text: string) {
    if (!text.trim() || loading) return
    const um = { role: 'user' as const, content: text }
    setMessages(p => [...p, um])
    setInput('')
    setLoading(true)
    try {
      const r = await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[...messages,um]})})
      const d = await r.json()
      setMessages(p => [...p,{role:'assistant',content:d.text||'Error'}])
    } catch { setMessages(p => [...p,{role:'assistant',content:'Unavailable'}]) }
    finally { setLoading(false) }
  }
  return (
    <div className="w-[232px] flex-shrink-0 border-l border-gray-100 flex flex-col bg-white">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[11px] font-mono font-medium text-gray-800">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />AI Code Assistant
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
        {messages.length===0 && <div className="text-[12px] text-gray-500">Ready. Ask anything about the 2021 IPC or Utah amendments.</div>}
        {messages.map((m,i) => <div key={i} className={`text-[12px] leading-relaxed ${m.role==='user' ? 'bg-gray-50 rounded-lg px-3 py-2 text-gray-800' : 'text-gray-600 px-0.5'}`}>{m.content}</div>)}
        {loading && <div className="flex gap-1 items-center px-0.5 py-1"><span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" /></div>}
      </div>
      {messages.length===0 && <div className="flex flex-col gap-1 px-3 pb-2">
        {SUGGESTIONS.map((s,i) => <button key={i} onClick={() => send(s)} className="text-[11px] text-left bg-gray-50 border border-gray-100 rounded-lg px-2 py-1.5 text-gray-500 hover:border-brand transition-colors leading-tight">{s} ↗</button>)}
      </div>}
      <div className="p-2.5 border-t border-gray-100 flex gap-2 items-end">
        <textarea value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(input) } }}
          placeholder="Ask a code question..." className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-[12px] bg-gray-50 text-gray-800 resize-none outline-none h-[50px] leading-relaxed focus:border-brand" />
        <button onClick={() => send(input)} disabled={loading||!input.trim()}
          className="w-[30px] h-[30px] bg-brand rounded-lg flex items-center justify-center flex-shrink-0 self-end hover:bg-brand-dark disabled:opacity-50">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="#fff"><path d="M2 8L14 2L8 14L7 9L2 8Z"/></svg>
        </button>
      </div>
    </div>
  )
}
