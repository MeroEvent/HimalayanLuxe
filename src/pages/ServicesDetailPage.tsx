import { motion } from 'framer-motion';
import { useMemo } from 'react';
import SimpleCTA from '../components/common/SimpleCTA';
import { useServices } from '../hooks/useServices';

export default function ServicesDetailPage() {
    const { data: dbServices, isLoading, error } = useServices();

    const services = useMemo(() => {
        if (!dbServices) return [];
        return dbServices.map(s => ({
            title: s.title,
            subtitle: s.subtitle,
            description: s.description,
            features: s.features || [],
            image: s.image_url,
        }));
    }, [dbServices]);

    if (isLoading) {
        return (
            <div className="relative min-h-screen pt-32 pb-0">
                <section className="relative w-full px-8 md:px-16 py-20">
                    <div className="max-w-[1400px] mx-auto">
                        <div className="text-center mb-20">
                            <div className="h-4 w-32 mx-auto rounded bg-white/5 animate-pulse mb-6" />
                            <div className="h-12 w-64 mx-auto rounded bg-white/5 animate-pulse mb-8" />
                            <div className="h-6 w-96 mx-auto rounded bg-white/5 animate-pulse" />
                        </div>
                        <div className="space-y-32">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="grid md:grid-cols-2 gap-12">
                                    <div className="space-y-4">
                                        <div className="h-4 w-24 rounded bg-white/5 animate-pulse" />
                                        <div className="h-10 w-48 rounded bg-white/5 animate-pulse" />
                                        <div className="h-20 w-full rounded bg-white/5 animate-pulse" />
                                    </div>
                                    <div className="aspect-[4/5] rounded-[32px] bg-white/5 animate-pulse" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div className="relative min-h-screen pt-32 pb-0 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-white/60 mb-4">Failed to load services</p>
                    <button onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-full border border-gold/30 text-gold text-sm hover:bg-gold/10 transition-colors">
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen pt-32 pb-0">
            <section className="relative w-full px-8 md:px-16 py-20">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-20"
                    >
                        <span className="liquid-gold-text text-xs tracking-[0.4em] uppercase font-medium mb-6 block">
                            What We Offer
                        </span>
                        <h1 className="font-serif text-white/95 text-[clamp(32px,5vw,72px)] leading-[1.1] font-normal tracking-tight mb-8">
                            Our <span className="liquid-gold-text">Services</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-3xl mx-auto leading-relaxed">
                            Comprehensive luxury event services tailored to your vision
                        </p>
                    </motion.div>

                    <div className="space-y-32">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                            >
                                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    <span className="liquid-gold-text text-xs tracking-[0.4em] uppercase font-medium mb-4 block">
                                        {service.subtitle}
                                    </span>
                                    <h2 className="font-serif text-white/95 text-4xl md:text-5xl mb-6">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                    {service.features.length > 0 && (
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white/70">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                    <button className="group relative overflow-hidden rounded-full border border-gold/30 px-8 py-4 transition-all duration-700 hover:border-gold hover:bg-gold/10">
                                        <span className="relative z-10 text-xs font-medium uppercase tracking-[0.2em] text-gold transition-colors duration-700 group-hover:text-white">
                                            Learn More
                                        </span>
                                    </button>
                                </div>
                                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden glass-card p-3">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover rounded-[28px]"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <SimpleCTA />
        </div>
    );
}
