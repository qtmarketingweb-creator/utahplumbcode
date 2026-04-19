'use client'

import { useState } from 'react'
import { btuToCfh, findPipeSize, getLengthKey, getTable, PIPE_SIZES, PIPE_LABELS } from '@/lib/gasSizing'

interface Run { name: string; btu: number; len: number }

export default function GasSizingCalc() {
  const [view, setView] = useState<'single' | 'system' | 'ref'>('single')
  const [gas, setGas] = useState<'ng' | 'lp'>('ng')
  const [pressure, setPressure] = useState<'low' | 'med'>('low')
  const [load, setLoad] = useState(100000)
  const [len, setLen] = useState(40)
  const [runs, setRuns] = useState<Run[]>([
    { name: 'Furnace', btu: 100000, len: 30 },
    { name: 'Water heater', btu: 40000, len: 25 },
    { name: 'Range', btu: 65000, len: 40 },
  ])
  const cfh = btuToCfh(load, gas)
  const result = findPipeSize(cfh, len, pressure)
  const lk = getLengthKey(len)
  const row = getTable(pressure)[lk] || getTable(pressure)[300]
  const utilPct = result.capacity ? Math.round((cfh / result.capacity) * 100) : 100
  const statusColor = !result.size ? 'text-red-600' : utilPct > 85 ? 'text-amber-600' : 'text-green-800'
  const TABS = ['single', 'system', 'ref'] as const
  return (<div></div>)
}
function SystemLoad({ runs }: any) { return <div>{runs.length}</div> }
function GasReference() { return <div /> }
