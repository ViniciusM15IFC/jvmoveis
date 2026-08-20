import { MapPin } from "lucide-react";

import { WhatsAppIcon } from "../ui/WhatsAppIcon";

export function Contato() {
    return (
        <section
            id="contato"
            className="scroll-mt-24 px-8 md:px-16 py-20 bg-black text-center border-t border-orange-500/30"
        >
            <div className="max-w-2xl mx-auto bg-neutral-950 px-8 py-12">

                <p className="font-display text-2xl text-orange-500 mb-1">
                    FALE CONOSCO!
                </p>

                <div className="w-12 h-1 bg-orange-500 mx-auto mb-10" />

                <div className="grid sm:grid-cols-2 gap-4 mb-8">

                    <a
                        href="https://wa.me/5548991077606"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-black px-5 py-4 hover:bg-orange-500/10 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                            <WhatsAppIcon
                                className="text-black"
                                size={22}
                            />
                        </div>

                        <div className="text-left">
                            <p className="font-display text-sm">
                                Valmir Bueno
                            </p>
                            <p className="text-neutral-400 text-xs">
                                48 99107-7606
                            </p>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/5549989122538"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-black px-5 py-4 hover:bg-orange-500/10 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                            <WhatsAppIcon
                                className="text-black"
                                size={22}
                            />
                        </div>

                        <div className="text-left">
                            <p className="font-display text-sm">
                                Junior Neves
                            </p>
                            <p className="text-neutral-400 text-xs">
                                49 98912-2538
                            </p>
                        </div>
                    </a>

                </div>

                <div className="flex items-center justify-center gap-2 text-neutral-300 pt-6 border-t border-orange-500/20">
                    <MapPin
                        className="text-orange-500"
                        size={18}
                    />

                    <span className="text-sm">
                        Bairro Santa Lúcia
                    </span>
                </div>

            </div>
        </section>
    );
}