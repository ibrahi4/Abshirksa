import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Star, Truck, CheckCircle2, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Professional Furniture Movers in Saudi Arabia | Al-Reefi Moving",
  description: "Top-rated house & office relocation services in Riyadh, Jeddah, Dammam. Professional packing, dismantling, and assembly with full warranty. Call 0536796607",
  keywords: [
    "furniture movers riyadh",
    "moving company jeddah",
    "house relocation dammam",
    "relocation services saudi arabia",
    "best movers in riyadh"
  ],
  alternates: { canonical: `${siteConfig.url}/en` },
};

export default function EnglishPage() {
  const waEnMsg = encodeURIComponent("Hi Al-Reefi Moving! I need a quote for moving furniture in Saudi Arabia.");

  return (
    <div dir="ltr" className="font-sans antialiased text-slate-800 bg-background">
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white overflow-hidden min-h-[85vh] flex items-center pt-16 pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/herosection.webp"
            alt="Professional Movers in Saudi Arabia"
            fill
            priority
            className="object-cover opacity-35 object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 w-full">
          <div className="max-w-3xl space-y-7 text-left">
            
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-400/40 px-4 py-2 text-xs md:text-sm font-bold text-amber-300 backdrop-blur-md">
              <Clock className="h-4 w-4 text-amber-400" />
              <span>Special Offer: 15% OFF for Expats This Month</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
              Stress-Free <br />
              <span className="text-brand-secondary">Furniture Moving</span> <br />
              Across Saudi Arabia
            </h1>

            <p className="text-base md:text-xl text-slate-200 leading-relaxed max-w-xl">
              Professional house & office relocation in Riyadh, Jeddah, Dammam & all KSA cities. Safe packing, disassembly, assembly & 100% insurance warranty.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button asChild size="lg" className="w-full sm:w-auto bg-brand-secondary text-brand-dark hover:bg-brand-secondary/90 font-bold h-14 px-8 rounded-2xl text-base shadow-xl">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call Now: {siteConfig.phone}
                </a>
              </Button>
              <Button asChild size="lg" variant="whatsapp" className="w-full sm:w-auto font-bold h-14 px-8 rounded-2xl text-base shadow-xl">
                <a href={`${siteConfig.whatsapp}?text=${waEnMsg}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Quote
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm">
                <ShieldCheck className="h-6 w-6 text-brand-secondary shrink-0" />
                <div>
                  <div className="font-bold text-white text-sm">Full Insurance</div>
                  <div className="text-xs text-slate-300">100% Items Guaranteed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm">
                <Star className="h-6 w-6 text-green-400 shrink-0" />
                <div>
                  <div className="font-bold text-white text-sm">4.9/5 Rating</div>
                  <div className="text-xs text-slate-300">+5000 Happy Clients</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-2xl backdrop-blur-sm">
                <Truck className="h-6 w-6 text-blue-400 shrink-0" />
                <div>
                  <div className="font-bold text-white text-sm">Modern Fleet</div>
                  <div className="text-xs text-slate-300">Covering All KSA</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl font-black text-brand-dark">Our Relocation Services</h2>
            <p className="text-slate-600">Everything you need for a smooth and effortless move in KSA.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "House & Villa Relocation", desc: "Complete home moving including bedrooms, kitchens, and living rooms with high-quality packing materials.", img: "/images/services/bg-naql-athath.webp" },
              { title: "Dismantling & Assembly", desc: "Expert technicians for assembling IKEA, European & custom furniture, curtains and AC units.", img: "/images/services/bg-fak-tarkeeb.webp" },
              { title: "Professional Packing & Storage", desc: "Bubble wrap, heavy-duty cartons and climate-controlled storage facilities for your valuables.", img: "/images/services/bg-taghleef.webp" },
            ].map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-shadow p-6 space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English CTA */}
      <section className="py-16 bg-brand-dark text-white text-center">
        <div className="container mx-auto px-4 max-w-2xl space-y-6">
          <h2 className="text-3xl font-black">Ready to Move Your Furniture?</h2>
          <p className="text-slate-300">Get a free inspection and instant English price estimate right now.</p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-secondary text-brand-dark font-bold px-8 h-14">
              <a href={`tel:${siteConfig.phone}`}>Call Us: {siteConfig.phone}</a>
            </Button>
            <Button asChild size="lg" variant="whatsapp" className="font-bold px-8 h-14">
              <a href={`${siteConfig.whatsapp}?text=${waEnMsg}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}