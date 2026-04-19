import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic()

const SYSTEM_PROMPT = `You are an expert AICode Assistant for Utah licensed plumbers. You have complete knowledge of the 2021 IPC, IFGC, and ALL Utah statewide amendments (Utah Code Title 15A Chapter 3 Part 3).

Key Utah amendments:
§15A-3-302: Adds Utah Certified Backflow Tester, Deep Seal Trap (≥4"), Dual Source Connection. Replaces Cross Connection (adds "potential connection"), Potable Water (→Utah Code Title 19 Ch.4&5).
§15A-3-303: Backflow assembly testing within 10 DAYS of installation. Air test plastic pipe permitted (max 6 psi, 15 min). Tester must be Utah Certified Backflow Assembly Tester per R309-305.
Always: (1) Cite specific IPC section numbers. (2) Flag Utah amendments. (3) Be concise.`

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    })
    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    return NextResponse.json({ text })
  } catch (error) {
    return NextResponse.json({ error: 'AI unavailable' }, { status: 500 })
  }
}
