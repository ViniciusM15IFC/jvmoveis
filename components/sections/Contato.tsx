import {
    MessageCircle,
    MapPin,
} from "lucide-react";

export function Contato() {
    return (
        <section
            id="contato"
            className="scroll-mt-24 px-8 md:px-16 py-20 bg-black text-center border-t border-orange-500/30"
        >
            <div className="max-w-2xl mx-auto border-2 border-orange-500 rounded-3xl px-8 py-8">

                <p className="font-display text-xl text-orange-500 mb-6">
                    FALE CONOSCO!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-4">

                    <div className="flex items-center gap-2">
                        <MessageCircle
                            className="text-orange-500"
                            size={20}
                        />

                        <span className="font-display text-sm">
                            Valmir Bueno 48991077606
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MessageCircle
                            className="text-orange-500"
                            size={20}
                        />

                        <span className="font-display text-sm">
                            Junior Neves 49989122538
                        </span>
                    </div>

                </div>

                <div className="flex items-center justify-center gap-2 text-neutral-300">
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