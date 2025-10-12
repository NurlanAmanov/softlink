import React from "react";
import { motion } from "framer-motion";
import heroimg from '../../assets/image/hero.gif'
function HomeAbout() {
  return (
    <section className="relative  text-black py-24 overflow-hidden">
      {/* Dekorativ Blur İşıqlar */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Sol tərəf — Mətn */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <p className="text-[#1a1a3d] uppercase tracking-widest font-semibold mb-3">
            Biz kimik?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Rəqəmsal innovasiyaları{" "}
            <span className="text-[#1a1a3d]">həyata keçiririk</span>
          </h2>

          <p className="text-black text-lg leading-relaxed mb-8">
            Softlink komandası olaraq biz müasir texnologiyalarla brendlərin
            və bizneslərin rəqəmsal transformasiyasını təmin edirik.
            Veb saytlar, mobil tətbiqlər, dizayn və texniki dəstək sahəsində
            hər bir layihəyə fərdi yanaşma tətbiq edirik.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-[#1a1a3d] text-white font-semibold px-8 py-4 rounded-xl hover:bg-transparent hover:text-black hover:border border-[#1a1a3d] transition-all duration-300">
              Daha ətraflı
            </button>

          </div>
        </motion.div>

        {/* Sağ tərəf — Şəkil / 3D mockup */}
        <div
          
          className="flex-1 xl:flex hidden lg:flex justify-center "
        >
          <div className="">
            <img
              src={heroimg}
              alt="About Softlink"
              className="w-full rounded-3xl "
            />
            {/* <div className="absolute -bottom-6 -left-6 bg-[#d4ff00] text-black font-bold px-6 py-3 rounded-xl shadow-lg">
              +50 uğurlu layihə
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
