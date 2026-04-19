'use client'
import GasSizingCalc from './GasSizingCalc'
import WaterSizingCalc from './WaterSizingCalc'
import DfuSizingCalc from './DfuSizingCalc'

interface Props {
  activeCalc: 'gas' | 'water' | 'dfu'
  setActiveCalc: (c: 'gas' | 'water' | 'dfu') => void
}

export default function CalculatorView({ activeCalc, setActiveCalc }: Props) {
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="flex border-b border-gray-200 bg-gray-50 flex-shrink-0">
        {(['gas', 'water', 'dfu'] as const).map(c => (
          <button key={c} onClick={() => setActiveCalc(c)}
            className={`text-[11px] font-mono px-4 py-2 border-b-2 transition-colors ${
              activeCalc === c ? 'text-brand border-brand font-medium' : 'text-gray-500 border-transparent hover:text-gray-800'
            }`}>
            {c === 'gas' ? 'Gas pipe sizing' : c === 'water' ? 'Water service sizing' : 'DFU & storm drain'}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-5">
        {activeCalc === 'gas' ? <GasSizingCalc /> : activeCalc === 'water' ? <WaterSizingCalc /> : <DfuSizingCalc />}
      </div>
    </div>
  )
}
