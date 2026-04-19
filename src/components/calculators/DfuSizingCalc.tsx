'use client'

import { useState } from 'react'
import {
  DRAIN_FIXTURES, findBuildingDrainSize, findHorizBranchSize, findStackSize,
  findStormDrainSize, roofAreaToGpm, BUILDING_DRAIN, HORIZ_BRANCH,
  DRAIN_PIPE_LABELS, STORM_DRAIN
} from '@/lib/dfuSizing'

type View = 'sanitary' | 'storm' | 'ref'

export default function DfuSizingCalc() {
  const [view, setView] = useState<View>('sanitary')
  const [qtys, setQtys] = useState<Record<string, number>>({})
  const [slope, setSlope] = useState<'1/8' | '1/4'>('1/4')
  const [stories, setStories] = useState<'three_or_less' | 'over_three'>('three_or_less')
  const [roofArea, setRoofArea] = useState(2000)
  const [rainfall, setRainfall] = useState(4.0)
  const [stormSlope, setStormSlope] = useState<'vertical' | '1/8' | '1/4'>('1/4')
  const totalDfu = DRAIN_FIXTURES.reduce((s, f) => s + (qtys[f.name] || 0) * f.dfu, 0)
  const drainSize = findBuildingDrainSize(totalDfu, slope)
  const drainCap = BUILDING_DRAIN[drainSize]?.[slope === '1/8' ? 0 : 1] ?? 0
  const branchSize = findHorizBranchSize(totalDfu)
  const stackSize = findStackSize(totalDfu, stories)
  const stormGpm = roofAreaToGpm(roofArea, rainfall)
  const stormSize = findStormDrainSize(stormGpm, stormSlope)
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="text-[10px] font-mono text-brand tracking-[1.5px] uppercase mb-1">IPC Tables 709.1 · 710.1 · 1106.2</div>
        <div className="text-xl font-medium text-gray-900 mb-0.5">DFU &Sanitary & Storm Drain</div>
        <div className="text-[11px] font-mono text-gray-400">Drainage fixture units · building drain · stack · storm</div>
      </div>
      <div className="flex border-b border-gray-200">
        {(['sanitary','storm','ref'] as View[]).map(t => <button key={t} onClick={() => setView(t)}
          className={`text-[11px] font-mono px-4 py-1.5 border-b-2 transition-colors ${view===t?'text-brand border-brand font-medium':'text-gray-400 border-transparent'}`}>
          {t==='sanitary'?'Sanitary drainage':t==='storm'?'Storm drainage':'Reference tables'}
        </button>)}
      </div>
      {view==='sanitary' && <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1"><label className="text-[12px] font-mono text-gray-500">Building drain slope</label>
            <select value={slope} onChange={e => setSlope(e.target.value as any)} className="text-sm border border-gray-200 rounded-lg px-2 py-1.5">
              <option value="1/4">1/4" per foot (standard)</option>
              <option value="1/8">1/8" per foot (3"+ only)</option>
            </select></div>
          <div className="flex flex-col gap-1"><label className="text-[12px] font-mono text-gray-500">Building height</label>
            <select value={stories} onChange={e => setStories(e.target.value as any)} className="text-sm border border-gray-200 rounded-lg px-2 py-1.5">
              <option value="three_or_less">3 stories or fewer</option>
              <option value="over_three">More than 3 stories</option>
            </select></div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y0">
          {DRAIN_FIXTURES.map(f => <div key={f.name} className="flex items-center gap-2 py-1 border-b border-gray-100 last:border-0">
              <span className="text-[11px] text-gray-600 flex-1 leading-tight">{f.name}</span>
              <span className="text-[10px] font-mono text-brand w-5 text-right flex-shrink-0">{f.dfu}</span>
              <input type="number" min={0} step={1} value={qtys[f.name]||0} onChange={e => setQtys(q => ({...q,[f.name]: +e.target.value||0}))}
                className="w4 text-[12px] border border-gray-200 rounded px-1 py-0.5 text-center flex-shrink-0" />
            </div>)}
        </div>
        <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-3">
          <div className="grid grid-cols-4 gap-2">
            {[{label:'Total DFU',value:totalDfu.toString(),unit:'drainage FU',cls:'text-gray-900'},{label:'Building drain',value:DRAIN_PIPE_LABELS[drainSize],unit:`at ${slope}"/ft · ${drainCap} DFU max`,cls:'text-green-800'},{label:'Horiz. branch',value:DRAIN_PIPE_LABELS[branchSize],unit:'per Table 710.1(2)',cls:'text-green-800'},{label:'Stack size',value:DRAIN_PIPE_LABELS[stackSize],unit:stories==='three_or_less'?'≤3 stories':'>3 stories',cls:'text-green-800'}].map(m=>(
              <div key={m.label} className="bg-white border border-gray-100 rounded-lg p-2.5">
                <div className="text-[11px] font-mono text-gray-400 mb-1">{m.label}</div>
                <div className={`text-[18px] font-medium ${m.cls}`}>{m.value}</div>
                <div className="text-[11px] font-mono text-gray-400 leading-tight">{m.unit}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[2,2.5,3,4,5,6,8,10,12].map(sz => {
              const cap=BUILDING_DRAIN[sz]?.[slope==='1/8'?0:1]; if(!cap) return null
              return <span key={sz} className={`text-[11px] font-mono px-2 py-1 rounded ${totalDfu<=cap?'bg-green-100 text-green-800':'bg-gray-100 text-gray-400'}`}>{DRAIN_PIPE_LABELS[sz]}: {cap}</span>
            })}
          </div>
        </div>
        <div className="text-[12px] text-gray-500 leading-relaxed px-3 py-2 bg-orange-50 border-l-2 border-brand rounded-r-lg">
          <strong className="text-brand">Utah § 15A-3-307:</strong> Connect to public sewer if within 300 feet of property line. § 1109 (combined sanitary+storm) is <strong>DELETED</strong> in Utah.
        </div>
      </div>}
      {view==='storm' && <div className="flex flex-col gap-4">
        <div className="grid grid-cols-3 gap-3">
          {[{label:'Roof area (sq ft)', val:roofArea,setter:setRoofArea,step:100},{label:'100yr rainfall (in/hr)', val:rainfall,setter:setRainfall,step:0.5}].map(f=><div key={f.label} className="flex flex-col gap-1">
            <label className="text-[12px] font-mono text-gray-500">{f.label}</label>
            <input type="number" value={f.val} onChange={e=>f.setter(+e.target.value)} step={f.step} className="text-sm border border-gray-200 rounded-lg px-2 py-1.5 w-full" />
          </div>)}
          <div className="flex flex-col gap-1"><label className="text-[12px] font-mono text-gray-500">Pipe type / slope</label>
            <select value={stormSlope} onChange={e=>setStormSlope(e.target.value as any)} className="text-sm border border-gray-200 rounded-lg px-2 py-1.5">
              <option value="vertical">Vertical leader</option>
              <option value="1/8">Horizontal 1/8"/ft</option>
              <option value="1/4">Horizontal 1/4"/ft</option>
            </select></div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-[9px] font-mono text-gray-400 uppercase tracking-wider mb-2">Utah 100-year hourly rainfall rates</div>
          <div className="grid grid-cols-3 gap-2">
            {[['Salt Lake City','1.8'],['Provo/Orem','1.8'],['Ogden','1.7'],['St. George','2.5'],['Cedar City','2.0'],['Logan','1.6'],['Moab','2.2'],['Vernal','1.6'],['Price','1.8']].map(([c,v])=><div key={c} className="flex justify-between text-[11px] border-b border-gray-200 py-0.5"><span className="text-gray-500">{c}</span><span className="font-mono text-gray-800 font-medium">{v} in/hr</span></div>)}
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-4 gap-2">
          {[{label:'Drainage area', value:roofArea.toLocaleString(),unit:'sq ft'},{label:'Rainfall rate',value:rainfall.toFixed(1),unit:'in/hr (100-yr)'},{label:'Design flow',value:stormGpm.toFixed(0),unit:'gpm'},{label:'Min pipe size', value:DRAIN_PIPE_LABELS[stormSize],unit:stormSlope==='vertical'?'vertical leader':`horiz. at ${stormSlope}"/ft`,cls:'text-green-800'}].map(m=>(
            <div key={m.label} className="bg-white border border-gray-100 rounded-lg p-2.5">
              <div className="text-[11px] font-mono text-gray-400 mb-1">{m.label}</div>
              <div className={`text-[18px] font-medium ${'cls' in m&&m.cls?m.cls:' text-gray-900'}`}>{m.value}</div>
              <div className="text-[11px] font-mono text-gray-400 leading-tight">{m.unit}</div>
            </div>
          ))}
        </div>
        <div className="text-[12px] text-gray-500 leading-relaxed px-3 py-2 bg-orange-50 border-l-2 border-brand rounded-r-lg">
          <strong className="text-brand">Utah § 15A-3-311:</strong> § 1109 (Combined Sanitary and Storm Sewer) is <strong>DELETED</strong>. Secondary emergency roof drains required (IPC § 1108.1).
        </div>
      </div>}
      {view==='ref' && <div className="flex flex-col gap-4">
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-[10px] font-mono text-brand uppercase tracking-wider mb-2">IPC Table 710.1(2) — Horizontal branches & stacks</div>
          <table className="w-full text-[11px]">
            <thead><tr className="border-b border-gray-200">{['Size','Horiz. branch','Stack ≤3','Stack >3'].map(h=><th key={h} className="text-left text-[10px] font-mono text-gray-400 pb-1.5 pr-2 font-normal uppercase">{h}</th>)}</tr></thead>
            <tbody>{[1.25,1.5,2,2.5,3,4,5,6,8].map(sz=>{
              const r=HORIZ_BRANCH[sz]; if(!r) return null
              return <tr key={sz} className="border-b border-gray-100 last:border-0"><td className="py-1 pr-2 font-mono font-medium text-gray-800">{DRAIN_PIPE_LABELS[sz]}</td><td className="py-1 pr-2 font-mono text-gray-600">{r.branch}</td><td className="py-1 pr-2 font-mono text-gray-600">{r.stack3}</td><td className="py-1 font-mono text-gray-600">{r.stackOver3}</td></tr>
            })}</tbody>
          </table>
        </div>
        <div className="bg-gray-50 rounded-lg p-3">
          <div className="text-[10px] font-mono text-brand uppercase tracking-wider mb-2">IPC Table 710.1(1) — Building drains & sewers</div>
          <table className="w
-full text-[11px]">
            <thead><tr className="border-b border-gray-200">{['Size','1/8"/ft','1/4"/ft'].map(h=><th key={h} className="text-left text-[10px] font-mono text-gray-400 pb-1.5 pr-2 font-normal uppercase">{h}</th>)}</tr></thead>
            <tbody>{[2,2.5,3,4,5,6,8,10,12].map(sz=>{
              const r=BUILDING_DRAIN[sz]; if(!r) return null
              return <tr key={sz} className="border-b border-gray-100 last:border-0"><td className="py-1 pr-2 font-mono font-medium text-gray-800">{DRAIN_PIPE_LABELS[sz]}</td><td className="py-1 pr-2 font-mono text-gray-600">{r[0]}</td><td className="py-1 font-mono text-gray-600">{r[1]}</td></tr>
            })}</tbody>
          </table>
        </div>
        <div className="text-[12px] text-gray-500 leading-relaxed px-3 py-2 bg-orange-50 border-l-2 border-brand rounded-r-lg">
          <strong className="text-brand">Sizing method (IPC §§ 709–710):</strong> (1) Assign DFU values from Table 709.1. (2) Total DFUs. (3) Table 710.1(2) for horiz branch & stack. (4) Table 710.1(1) for building drain. Min slope: 1/4"/ft for pipe ≤2-1/2", 1/8"/ft for 3"+ (IPC § 704.1).
        </div>
      </div>}
    </div>
  )
}
