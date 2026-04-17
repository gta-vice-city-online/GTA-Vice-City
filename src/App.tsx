import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Globe, Shield, Menu, X, Monitor, ChevronRight } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAdModal, setShowAdModal] = useState(true);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-black text-white relative font-sans">
      {/* Ad Modal Popup */}
      <AnimatePresence>
        {showAdModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="relative max-w-lg w-full bg-[#111111] border border-magenta-500/40 rounded-3xl p-8 shadow-[0_0_80px_rgba(219,39,119,0.2)]"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-magenta-500/10 rounded-2xl mb-8 neon-border-magenta">
                  <Gamepad2 size={40} className="text-magenta-500" />
                </div>
                
                <h2 className="text-3xl font-black italic uppercase text-white mb-2 marker-font tracking-tight">
                  SITWISE <span className="text-cyan-400">ACCESS</span>
                </h2>
                <p className="text-gray-500 text-xs uppercase tracking-[0.3em] mb-8">Verification Required</p>
                
                {/* Modal Ad Placeholder */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 aspect-video flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   <div className="relative z-10 flex flex-col items-center">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">Advertisement</div>
                      <div className="text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors uppercase italic">Banner Ad 480x270</div>
                      <div className="mt-4 px-4 py-1.5 border border-white/10 rounded-full text-[10px] text-gray-400 group-hover:text-white transition-colors">Visit Site</div>
                   </div>
                </div>

                <div className="space-y-4">
                  <button 
                    onClick={() => setShowAdModal(false)}
                    className="w-full py-5 bg-gradient-to-r from-magenta-600 to-magenta-500 hover:from-magenta-500 hover:to-magenta-400 text-white font-black italic uppercase tracking-widest rounded-2xl transition-all shadow-[0_10px_20px_rgba(219,39,119,0.3)] active:scale-[0.98] flex items-center justify-center gap-3 group"
                  >
                    Enter Vice City
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
                    By entering you agree to our terms of service
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Scanline effect for retro feel */}
      <div className="scanline pointer-events-none fixed inset-0 z-50 opacity-20" />
      
      {/* Mini Header */}
      <header className="flex-none z-[60] bg-[#030303] border-b border-magenta-500/30 px-6 py-3 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-magenta-500 to-cyan-500 rounded flex items-center justify-center neon-border-magenta">
            <Gamepad2 className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter marker-font text-white drop-shadow-lg hidden sm:block">
            VICE <span className="text-cyan-400">CITY</span> <span className="text-magenta-500 text-sm ml-2">ONLINE</span>
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative flex bg-[#050505] p-2 sm:p-4 md:p-6 overflow-hidden">
        <div className="w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-6 relative">
          
          {/* Left Column: Game Area */}
          <div className="flex-grow flex flex-col min-w-0">
            {/* Game Container */}
            <div className="flex-grow rounded-xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] bg-black relative min-h-[400px]">
              <iframe 
                src="https://quenq.com/apps/vice-city/" 
                className="w-full h-full border-none"
                allowFullScreen
                title="GTA Vice City Online"
              ></iframe>
            </div>
            
            {/* Controls & Quick Info Bar */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 group cursor-default">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest transition-colors">Global Server</span>
                </div>
                <div className="flex items-center gap-2 group cursor-default">
                  <Shield className="w-4 h-4 text-magenta-400" />
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest transition-colors">Secure Connection</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter bg-white/5 px-3 py-1 rounded border border-white/10">
                  Press <span className="text-cyan-400">F11</span> for Fullscreen
                </span>
                <div className="hidden xl:block text-[10px] text-gray-400 uppercase font-medium">
                  WASD: MOVE | SHIFT: SPRINT | SPACE: HANDBRAKE
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Ad Sidebar */}
          <aside className="w-full lg:w-72 flex-none space-y-6 flex flex-col overflow-y-auto lg:overflow-visible">
            {/* Sidebar Ad Container */}
            <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
              <div className="px-4 py-2 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">Sponsored</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse"></div>
              </div>
              
              <div className="p-4 space-y-4">
                {/* Vertical Banner Placeholder */}
                <div className="aspect-[3/4] bg-black border border-white/5 rounded-xl flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden transition-all hover:border-magenta-500/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-magenta-500/5 to-transparent"></div>
                  <div className="z-10 text-center p-4">
                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-4">Display Ad</p>
                    <div className="text-lg font-black italic marker-font text-white/10 group-hover:text-white/30 transition-colors uppercase leading-tight">
                      Promote <br/>Your <br/>Brand <br/>Here
                    </div>
                  </div>
                </div>

                {/* Square Banner Placeholder */}
                <div className="aspect-square bg-black border border-white/5 rounded-xl flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden transition-all hover:border-cyan-500/30">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
                  <div className="z-10 text-center p-4">
                    <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-2">Square Ad</p>
                    <div className="text-sm font-black italic marker-font text-white/10 group-hover:text-white/30 transition-colors uppercase">
                      300x300 Space
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-white/5 border-t border-white/5">
                <button className="w-full py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all">
                  Remove Ads (PRO)
                </button>
              </div>
            </div>

            {/* Quick Server Info Card */}
            <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-2xl p-5 shadow-xl">
               <h4 className="text-[11px] font-black italic uppercase text-magenta-500 mb-4 tracking-tighter">Live Activity</h4>
               <div className="space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] text-gray-500 uppercase font-bold">Latency</span>
                     <span className="text-[10px] text-cyan-400 font-mono">14ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] text-gray-500 uppercase font-bold">Resolution</span>
                     <span className="text-[10px] text-white font-mono uppercase">Dynamic 4K</span>
                  </div>
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] text-gray-500 uppercase font-bold">FPS</span>
                     <span className="text-[10px] text-green-400 font-mono">60 Stable</span>
                  </div>
               </div>
               
               <div className="mt-6 pt-4 border-t border-white/5">
                 <div className="flex items-center gap-3">
                   <Monitor size={14} className="text-gray-600" />
                   <div className="flex-grow h-1 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                        animate={{ width: ['20%', '95%', '85%', '99%'] }}
                        transition={{ repeat: Infinity, duration: 10 }}
                        className="h-full bg-gradient-to-r from-magenta-500 to-cyan-500" 
                      />
                   </div>
                 </div>
               </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Simplified Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-[#050505]/fb backdrop-blur-2xl flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-magenta-600 rounded flex items-center justify-center">
                    <Gamepad2 className="text-white w-5 h-5" />
                  </div>
                  <span className="text-xl font-bold marker-font text-white uppercase">Vice City</span>
              </div>
              <button 
                className="p-2 bg-white/5 rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-3xl font-bold uppercase tracking-widest marker-font">
              <button onClick={() => setMobileMenuOpen(false)} className="text-left hover:text-cyan-400 transition-colors">Play Game</button>
              <button className="text-left hover:text-magenta-400 transition-colors">Controls</button>
              <button className="text-left hover:text-cyan-400 transition-colors">Settings</button>
            </div>
            
            <div className="mt-auto flex flex-col gap-4">
              <div className="h-[1px] bg-white/10 w-full" />
              <div className="flex justify-between items-center text-gray-500 text-xs uppercase tracking-tighter">
                <span>&copy; {new Date().getFullYear()} VICE CITY ONLINE</span>
                <span>V4.2</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal Footer Branding */}
      <footer className="flex-none py-1.5 px-6 border-t border-white/5 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center opacity-30 hover:opacity-100 transition-opacity">
          <p className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">
            OPTIMIZED FOR HIGH-LATENCY ENVIRONMENTS
          </p>
          <div className="flex gap-4">
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">LEGACY BUILD</span>
            <span className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">LICENSE: FAN PROJECT</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
