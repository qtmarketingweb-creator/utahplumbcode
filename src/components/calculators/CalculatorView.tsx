'use client'

import { useState } from 'react'
import GasSizingCalc from './GasSizingCalc'
import WaterSizingCalc from './WaterSizingCalc'
import DFUSizingCalc from './DFUSizingCalc'

type Calc = 'gas' | 'water' | 'dfu'

interface Props {
  activeCalc: Calc
  setActiveCalc: (c: Calc) => void
}

export default function CalculatorView({ activeCalc, setActiveCalc }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="flex border-b border-gray-200 bg-gray-50 flex-shrink-0">
        {([
          { id: 'gas', label: 'Gas pipe sizing' },
          { id: 'water', label: 'Water service sizing' },
          { id: 'dfu', label: 'DFU / drainage sizing' },
        ] as { id: Calc; label: string }[]).map(c => (
          <button key={c.id} onClick={() => setActiveCalc(c.id)}
            className={`text-[11px] font-mono px-4 py-2 border-b-2 transition-colors ${
              activeCalc === c.id
                ? 'text-brand border-brand font-medium'
                : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}>
            {c.label}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-5">
        {activeCalc === 'gas' ? <GasSizingCalc /> : activeCalc === 'water' ? <WaterSizingCalc /> : <DFUSizingCalc />}
      </div>
    </div>
  )
}
