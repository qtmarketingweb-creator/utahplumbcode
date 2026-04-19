'use client'

import { useState } from 'react'
import { FIXTURES, wsfu2gpm, findPipeSize, PIPE_CAPACITY, PIPE_LABELS } from '@/lib/waterSizing'

export default function WaterSizingCalc() {
  const [qtys, setQtys] = useState<Record<string, number>>({})
  const [sysType, setSysType] = useState<'tank' | 'valve'>('tank')

  let totalW = 0
  FIXTURES.forEach(f => { totalW += (qtys[f.name] || 0) * f.wsfu })
  const peakGpm = wsfu2gpm(totalW, sysType)
  const minSz = findPipeSize(peakGpm)

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-[10px] font-mono text-brand tracking-[1.5px] uppercase mb-1">IPC Appendix E · Table E103.3</div>
        <div className="text-xl font-medium text-gray-900 mb-0.5">Water service sizing</div>
        <div className="text-[11px] font-mono text-gray-400">WSFU method · Enter fixture counts</div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[12px] font-mono text-gray-500">System type</label>
        <select value={sysType} onChange={e => setSysType(e.target.value as 'tank' | 'valve')}
          className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 w-48">
          <option value="tank">Flush tank (residential)</option>
          <option value="valve">Flushometer valve (commercial)</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {FIXTURES.map(f => (
          <div key={f.name} className="flex items-center gap-2 py-1 border-b border-gray-100">
            <span className="text-[11px] text-gray-600 flex-1">{f.name}</span>
            <span className="text-[10px] font-mono text-gray-400 w-8 text-right">{f.wsfu}</span>
            <input type="number" min={0} step={1} value={qtys[f.name] || 0}
              onChange={e => setQtys(q => ({ ...q, [f.name]: +e.target.value || 0 }))}
              className="w-12 text-[12px] border border-gray-200 rounded px-1.5 py-0.5 text-center" />
          </div>
        ))}
      </div>
      <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-3 gap-2">
        {[
          { label: 'Total WSFU', value: totalW.toFixed(1), unit: 'WSFU' },
          { label: 'Peak demand', value: peakGpm.toFixed(1), unit: 'gpm' },
          { label: 'Min pipe size', value: PIPE_LABELS[minSz], unit: 'copper type M' },
        ].map(m => (
          <div key={m.label} className="bg-white border border-gray-100 rounded-lg p-2.5">
            <div className="text-[11px] font-mono text-gray-400 mb-1">{m.label}</div>
            <div className="text-[18px] font-medium text-gray-900">{m.value}</div>
            <div className="text-[11px] font-mono text-gray-400">{m.unit}</div>
          </div>
        ))}
      </div>
      <div className="text-[12px] text-gray-500 leading-relaxed px-3 py-2 bg-orange-50 border-l-2 border-brand rounded-r-lg">
        <strong className="text-brand">Utah § 15A-3-306:</strong> Lavatory max 1.5 gpm at 60 psi. Shower max 2 gpm at 80 psi. Urinal max 0.5 gal/flush.
      </div>
    </div>
  )
}
