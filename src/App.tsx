import { useState, useEffect } from 'react'

function PixelClaw({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className="animate-float">
      {/* Pixel art crab claw */}
      <rect x="10" y="2" width="2" height="2" fill="#B71C1C"/>
      <rect x="12" y="2" width="2" height="2" fill="#E53935"/>
      <rect x="14" y="2" width="2" height="2" fill="#E53935"/>
      <rect x="16" y="2" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="8" y="4" width="2" height="2" fill="#B71C1C"/>
      <rect x="10" y="4" width="2" height="2" fill="#E53935"/>
      <rect x="12" y="4" width="2" height="2" fill="#FF6B35"/>
      <rect x="14" y="4" width="2" height="2" fill="#FF6B35"/>
      <rect x="16" y="4" width="2" height="2" fill="#E53935"/>
      <rect x="18" y="4" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="6" y="6" width="2" height="2" fill="#B71C1C"/>
      <rect x="8" y="6" width="2" height="2" fill="#E53935"/>
      <rect x="10" y="6" width="2" height="2" fill="#FF6B35"/>
      <rect x="12" y="6" width="2" height="2" fill="#FFB800"/>
      <rect x="14" y="6" width="2" height="2" fill="#FFB800"/>
      <rect x="16" y="6" width="2" height="2" fill="#FF6B35"/>
      <rect x="18" y="6" width="2" height="2" fill="#E53935"/>
      <rect x="20" y="6" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="4" y="8" width="2" height="2" fill="#B71C1C"/>
      <rect x="6" y="8" width="2" height="2" fill="#E53935"/>
      <rect x="8" y="8" width="2" height="2" fill="#FF6B35"/>
      <rect x="10" y="8" width="2" height="2" fill="#FF6B35"/>
      <rect x="16" y="8" width="2" height="2" fill="#FF6B35"/>
      <rect x="18" y="8" width="2" height="2" fill="#FF6B35"/>
      <rect x="20" y="8" width="2" height="2" fill="#E53935"/>
      <rect x="22" y="8" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="2" y="10" width="2" height="2" fill="#B71C1C"/>
      <rect x="4" y="10" width="2" height="2" fill="#E53935"/>
      <rect x="6" y="10" width="2" height="2" fill="#FF6B35"/>
      <rect x="20" y="10" width="2" height="2" fill="#FF6B35"/>
      <rect x="22" y="10" width="2" height="2" fill="#E53935"/>
      <rect x="24" y="10" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="2" y="12" width="2" height="2" fill="#B71C1C"/>
      <rect x="4" y="12" width="2" height="2" fill="#E53935"/>
      <rect x="22" y="12" width="2" height="2" fill="#E53935"/>
      <rect x="24" y="12" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="4" y="14" width="2" height="2" fill="#B71C1C"/>
      <rect x="6" y="14" width="2" height="2" fill="#E53935"/>
      <rect x="20" y="14" width="2" height="2" fill="#E53935"/>
      <rect x="22" y="14" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="6" y="16" width="2" height="2" fill="#B71C1C"/>
      <rect x="8" y="16" width="2" height="2" fill="#E53935"/>
      <rect x="18" y="16" width="2" height="2" fill="#E53935"/>
      <rect x="20" y="16" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="8" y="18" width="2" height="2" fill="#B71C1C"/>
      <rect x="10" y="18" width="2" height="2" fill="#E53935"/>
      <rect x="12" y="18" width="2" height="2" fill="#E53935"/>
      <rect x="14" y="18" width="2" height="2" fill="#E53935"/>
      <rect x="16" y="18" width="2" height="2" fill="#E53935"/>
      <rect x="18" y="18" width="2" height="2" fill="#B71C1C"/>
      
      <rect x="10" y="20" width="2" height="2" fill="#B71C1C"/>
      <rect x="12" y="20" width="2" height="2" fill="#E53935"/>
      <rect x="14" y="20" width="2" height="2" fill="#E53935"/>
      <rect x="16" y="20" width="2" height="2" fill="#B71C1C"/>
    </svg>
  )
}

function FlowDiagram() {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <svg viewBox="0 0 800 400" className="w-full h-auto">
        {/* Background grid */}
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,107,53,0.05)" strokeWidth="0.5"/>
          </pattern>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E53935"/>
            <stop offset="50%" stopColor="#FF6B35"/>
            <stop offset="100%" stopColor="#FFB800"/>
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect width="800" height="400" fill="url(#grid)"/>
        
        {/* Users box */}
        <rect x="20" y="160" width="120" height="60" rx="8" fill="#12121A" stroke="#FF6B35" strokeWidth="2"/>
        <text x="80" y="195" textAnchor="middle" fill="#E5E5E5" className="text-sm" style={{fontFamily: 'JetBrains Mono'}}>Users</text>
        
        {/* Arrow 1: Users to Contract */}
        <path d="M 140 190 L 260 190" stroke="url(#flowGradient)" strokeWidth="3" fill="none" className="flow-line" filter="url(#glow)"/>
        <polygon points="260,185 275,190 260,195" fill="#FF6B35"/>
        <text x="200" y="175" textAnchor="middle" fill="#888" fontSize="11" style={{fontFamily: 'JetBrains Mono'}}>Deposit USDC</text>
        
        {/* CLAWZ Contract */}
        <ellipse cx="380" cy="190" rx="100" ry="50" fill="#12121A" stroke="#E53935" strokeWidth="2"/>
        <text x="380" y="185" textAnchor="middle" fill="#FF6B35" fontSize="14" fontWeight="bold" style={{fontFamily: 'Press Start 2P'}}>CLAWZ</text>
        <text x="380" y="205" textAnchor="middle" fill="#E5E5E5" fontSize="12" style={{fontFamily: 'JetBrains Mono'}}>Contract</text>
        
        {/* Arrow back to Users (97.5% minted) */}
        <path d="M 280 210 L 140 250" stroke="url(#flowGradient)" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
        <text x="170" y="270" fill="#FFB800" fontSize="10" style={{fontFamily: 'JetBrains Mono'}}>*97.5% USDC value</text>
        <text x="170" y="285" fill="#FFB800" fontSize="10" style={{fontFamily: 'JetBrains Mono'}}>minted as CLAWZ</text>
        
        {/* LP Incentives box */}
        <rect x="560" y="40" width="140" height="50" rx="8" fill="#12121A" stroke="#FFB800" strokeWidth="2"/>
        <text x="630" y="70" textAnchor="middle" fill="#E5E5E5" fontSize="12" style={{fontFamily: 'JetBrains Mono'}}>LP Incentives</text>
        
        {/* Arrow to LP */}
        <path d="M 460 155 Q 510 80 560 65" stroke="#FFB800" strokeWidth="2" fill="none" className="flow-line"/>
        <text x="530" y="95" fill="#888" fontSize="10" style={{fontFamily: 'JetBrains Mono'}}>25% of Fee</text>
        
        {/* Team box */}
        <rect x="560" y="280" width="140" height="50" rx="8" fill="#12121A" stroke="#FFB800" strokeWidth="2"/>
        <text x="630" y="310" textAnchor="middle" fill="#E5E5E5" fontSize="12" style={{fontFamily: 'JetBrains Mono'}}>Team</text>
        
        {/* Arrow to Team */}
        <path d="M 460 225 Q 510 280 560 305" stroke="#FFB800" strokeWidth="2" fill="none" className="flow-line"/>
        <text x="530" y="270" fill="#888" fontSize="10" style={{fontFamily: 'JetBrains Mono'}}>25% of Fee</text>
        
        {/* Contract retention indicator */}
        <text x="380" y="260" textAnchor="middle" fill="#E53935" fontSize="10" style={{fontFamily: 'JetBrains Mono'}}>50% retained</text>
        <text x="380" y="275" textAnchor="middle" fill="#666" fontSize="9" style={{fontFamily: 'JetBrains Mono'}}>(increases USDC/CLAWZ ratio)</text>
      </svg>
    </div>
  )
}

function BorrowingFlow() {
  return (
    <div className="relative w-full max-w-3xl mx-auto py-4">
      <svg viewBox="0 0 600 250" className="w-full h-auto">
        <defs>
          <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E53935"/>
            <stop offset="100%" stopColor="#FF6B35"/>
          </linearGradient>
        </defs>
        
        {/* Users */}
        <ellipse cx="100" cy="125" rx="70" ry="40" fill="#12121A" stroke="#FF6B35" strokeWidth="2"/>
        <text x="100" y="130" textAnchor="middle" fill="#E5E5E5" fontSize="14" style={{fontFamily: 'JetBrains Mono'}}>Users</text>
        
        {/* Contract */}
        <ellipse cx="450" cy="125" rx="90" ry="50" fill="#12121A" stroke="#E53935" strokeWidth="2"/>
        <text x="450" y="115" textAnchor="middle" fill="#FF6B35" fontSize="11" fontWeight="bold" style={{fontFamily: 'Press Start 2P'}}>CLAWZ</text>
        <text x="450" y="140" textAnchor="middle" fill="#E5E5E5" fontSize="12" style={{fontFamily: 'JetBrains Mono'}}>Contract</text>
        
        {/* Step 1: Deposit USDC */}
        <path d="M 170 100 L 360 80" stroke="#FF6B35" strokeWidth="2" fill="none"/>
        <circle cx="265" cy="70" r="12" fill="#12121A" stroke="#FF6B35" strokeWidth="1"/>
        <text x="265" y="74" textAnchor="middle" fill="#FF6B35" fontSize="10" style={{fontFamily: 'Press Start 2P'}}>1</text>
        <text x="265" y="55" textAnchor="middle" fill="#888" fontSize="9" style={{fontFamily: 'JetBrains Mono'}}>Deposit USDC</text>
        
        {/* Step 2: Mint CLAWZ */}
        <path d="M 360 65 Q 400 30 450 50" stroke="#FFB800" strokeWidth="2" fill="none" strokeDasharray="4,2"/>
        <circle cx="420" cy="35" r="12" fill="#12121A" stroke="#FFB800" strokeWidth="1"/>
        <text x="420" y="39" textAnchor="middle" fill="#FFB800" fontSize="10" style={{fontFamily: 'Press Start 2P'}}>2</text>
        <text x="480" y="30" fill="#888" fontSize="9" style={{fontFamily: 'JetBrains Mono'}}>Mint CLAWZ</text>
        
        {/* Step 3: Deposit CLAWZ Collateral */}
        <path d="M 170 150 L 360 170" stroke="#E53935" strokeWidth="2" fill="none"/>
        <circle cx="265" cy="180" r="12" fill="#12121A" stroke="#E53935" strokeWidth="1"/>
        <text x="265" y="184" textAnchor="middle" fill="#E53935" fontSize="10" style={{fontFamily: 'Press Start 2P'}}>3</text>
        <text x="265" y="205" textAnchor="middle" fill="#888" fontSize="9" style={{fontFamily: 'JetBrains Mono'}}>Deposit CLAWZ Collateral</text>
        
        {/* Step 4: Borrow USDC */}
        <path d="M 360 185 Q 300 220 170 180" stroke="#FFB800" strokeWidth="2" fill="none" strokeDasharray="4,2"/>
        <circle cx="265" cy="220" r="12" fill="#12121A" stroke="#FFB800" strokeWidth="1"/>
        <text x="265" y="224" textAnchor="middle" fill="#FFB800" fontSize="10" style={{fontFamily: 'Press Start 2P'}}>4</text>
        <text x="320" y="235" fill="#888" fontSize="9" style={{fontFamily: 'JetBrains Mono'}}>Borrow USDC</text>
      </svg>
    </div>
  )
}

function MintSimulator() {
  const [usdcAmount, setUsdcAmount] = useState(1000)
  const [isSimulating, setIsSimulating] = useState(false)
  
  const mintingFee = usdcAmount * 0.025
  const clawzReceived = usdcAmount * 0.975
  const lpIncentives = mintingFee * 0.25
  const teamShare = mintingFee * 0.25
  const retained = mintingFee * 0.5
  
  const handleSimulate = () => {
    setIsSimulating(true)
    setTimeout(() => setIsSimulating(false), 1500)
  }
  
  return (
    <div className="gradient-border rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
      <h3 className="pixel-font text-lg md:text-xl text-center mb-6 shimmer-text">MINT SIMULATOR</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-gray-400 mb-2">USDC Amount to Deposit</label>
          <div className="flex items-center gap-4">
            <input 
              type="range" 
              min="100" 
              max="100000" 
              step="100"
              value={usdcAmount}
              onChange={(e) => setUsdcAmount(Number(e.target.value))}
              className="flex-1"
            />
            <div className="bg-[#1E1E2A] px-4 py-2 rounded-lg min-w-[140px] text-right">
              <span className="text-[#FFB800] font-bold">${usdcAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <button 
          onClick={handleSimulate}
          disabled={isSimulating}
          className={`w-full py-4 rounded-lg font-bold text-lg transition-all ${
            isSimulating 
              ? 'bg-gray-700 text-gray-400' 
              : 'bg-gradient-to-r from-[#E53935] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#FFB800] text-white animate-pulse-glow'
          }`}
        >
          {isSimulating ? 'SIMULATING...' : 'SIMULATE MINT'}
        </button>
        
        <div className={`space-y-3 transition-opacity duration-500 ${isSimulating ? 'opacity-50' : 'opacity-100'}`}>
          <div className="flex justify-between items-center p-3 bg-[#0A0A0F] rounded-lg">
            <span className="text-gray-400">CLAWZ Received</span>
            <span className="text-[#FF6B35] font-bold text-lg">{clawzReceived.toLocaleString()} CLAWZ</span>
          </div>
          
          <div className="border-t border-[#1E1E2A] pt-3 mt-3">
            <p className="text-xs text-gray-500 mb-2">Fee Breakdown (2.5% = ${mintingFee.toFixed(2)})</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#0A0A0F] p-2 rounded">
                <p className="text-[#FFB800] font-bold">${retained.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Retained (50%)</p>
              </div>
              <div className="bg-[#0A0A0F] p-2 rounded">
                <p className="text-[#FFB800] font-bold">${lpIncentives.toFixed(2)}</p>
                <p className="text-xs text-gray-500">LP (25%)</p>
              </div>
              <div className="bg-[#0A0A0F] p-2 rounded">
                <p className="text-[#FFB800] font-bold">${teamShare.toFixed(2)}</p>
                <p className="text-xs text-gray-500">Team (25%)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, suffix = '' }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="card-glow rounded-xl p-4 md:p-6 text-center hover:scale-105 transition-transform duration-300">
      <p className="text-gray-400 text-sm mb-2">{label}</p>
      <p className="text-2xl md:text-3xl font-bold">
        <span className="shimmer-text">{value}</span>
        <span className="text-gray-500 text-lg ml-1">{suffix}</span>
      </p>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="card-glow rounded-xl p-6 hover:border-[#FF6B35] transition-all duration-300 group">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="heading-font text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background effects */}
      <div className="noise-bg" />
      <div className="crt-overlay" />
      
      {/* Animated background orbs */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E53935 0%, transparent 70%)',
          left: '-200px',
          top: `${-100 + scrollY * 0.1}px`,
        }}
      />
      <div 
        className="fixed w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
          right: '-150px',
          top: `${300 - scrollY * 0.05}px`,
        }}
      />
      
      {/* Header */}
      <header className="relative z-10 border-b border-[#1E1E2A]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <PixelClaw size={40} />
            <span className="pixel-font text-lg text-[#FF6B35]">CLAWZ</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mechanics" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Mechanics</a>
            <a href="#simulator" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Simulator</a>
            <a href="#features" className="text-gray-400 hover:text-[#FF6B35] transition-colors">Features</a>
          </nav>
          <button className="px-4 py-2 bg-gradient-to-r from-[#E53935] to-[#FF6B35] rounded-lg font-bold text-sm hover:opacity-90 transition-opacity">
            Launch App
          </button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative z-10 py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <PixelClaw size={100} />
          </div>
          <h1 className="pixel-font text-3xl md:text-5xl mb-6 leading-relaxed">
            <span className="shimmer-text">CLAWZ</span>
          </h1>
          <p className="heading-font text-xl md:text-2xl text-gray-300 mb-4">
            Self-Sustaining DeFi Protocol
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8">
            Not just another token — a fully-backed, self-sustaining financial system designed to appreciate in value over time.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <StatCard label="Backing Ratio" value="1:1" suffix="USDC" />
            <StatCard label="Mint Fee" value="2.5" suffix="%" />
            <StatCard label="Fee Retained" value="50" suffix="%" />
            <StatCard label="Value Growth" value="+" suffix="Always" />
          </div>
        </div>
      </section>
      
      {/* Token Mechanics */}
      <section id="mechanics" className="relative z-10 py-16 px-4 bg-gradient-to-b from-transparent via-[#12121A]/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl text-center mb-4 text-[#FF6B35]">CORE MECHANICS</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Understanding how CLAWZ creates sustainable value appreciation through its fee distribution model.
          </p>
          
          <FlowDiagram />
          
          <div className="card-glow rounded-xl p-6 max-w-3xl mx-auto mt-8">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-[#FFB800] font-bold">*2.5% minting fee:</span> 50% of fees is retained in the contract 
              with deposited value to ensure the ratio of USDC per CLAWZ increases. The remaining 50% of fee is split 
              between LP incentives and team.
            </p>
          </div>
        </div>
      </section>
      
      {/* Borrowing Flow */}
      <section className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl text-center mb-4 text-[#FF6B35]">BORROWING FLOW</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            Use your CLAWZ as collateral to access USDC liquidity without selling.
          </p>
          
          <BorrowingFlow />
        </div>
      </section>
      
      {/* Mint Simulator */}
      <section id="simulator" className="relative z-10 py-16 px-4 bg-gradient-to-b from-transparent via-[#12121A]/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl text-center mb-4 text-[#FF6B35]">TRY IT OUT</h2>
          <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
            See exactly how your USDC converts to CLAWZ and where the fees go.
          </p>
          
          <MintSimulator />
        </div>
      </section>
      
      {/* Features */}
      <section id="features" className="relative z-10 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="pixel-font text-xl md:text-2xl text-center mb-12 text-[#FF6B35]">WHY CLAWZ?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon="🔒"
              title="Fully Backed"
              description="Every CLAWZ token is backed by USDC in the contract. No algorithmic tricks, just real value."
            />
            <FeatureCard 
              icon="📈"
              title="Appreciating Value"
              description="The retained fee mechanism ensures the USDC/CLAWZ ratio continuously increases over time."
            />
            <FeatureCard 
              icon="💧"
              title="LP Incentives"
              description="25% of fees go to liquidity providers, ensuring deep liquidity and tight spreads."
            />
            <FeatureCard 
              icon="🏦"
              title="Borrow Against"
              description="Use CLAWZ as collateral to borrow USDC. Access liquidity without selling your position."
            />
            <FeatureCard 
              icon="⚡"
              title="Instant Minting"
              description="Deposit USDC and receive CLAWZ immediately. No waiting periods or complex processes."
            />
            <FeatureCard 
              icon="🛡️"
              title="Transparent"
              description="All contract mechanics are on-chain and verifiable. No hidden fees or surprises."
            />
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card-glow rounded-2xl p-8 md:p-12">
            <PixelClaw size={80} />
            <h2 className="heading-font text-2xl md:text-3xl font-bold mt-6 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">Join the self-sustaining financial revolution.</p>
            <button className="px-8 py-4 bg-gradient-to-r from-[#E53935] to-[#FF6B35] rounded-lg font-bold text-lg hover:from-[#FF6B35] hover:to-[#FFB800] transition-all animate-pulse-glow">
              Enter the CLAWZ
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-[#1E1E2A] py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 text-xs">
            Requested by <a href="https://twitter.com/itsberlo" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF6B35] transition-colors">@itsberlo</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#FF6B35] transition-colors">@clonkbot</a>
          </p>
        </div>
      </footer>
    </div>
  )
}