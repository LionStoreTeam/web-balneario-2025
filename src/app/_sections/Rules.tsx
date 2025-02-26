import { SparklesCore } from "@/components/ui/sparkles";

const rule = [
    {
        ruleContent: "Los niños deben estar supervisados por un adulto en todo momento.",
    },
    {
        ruleContent: "No correr alrededor de las albercas para evitar accidentes.",
    },
    {
        ruleContent: "Evitar juegos bruscos para prevenir lesiones o daños a terceros.",
    },
    {
        ruleContent: "Esperar un tiempo prudente después de sus alimentos para ingresar a la alberca.",
    },
    {
        ruleContent: "Prohibido ingerir alimentos y bebidadas alcoholicas en área de las albercas.",
    }

    // En la hoja de Reglamento hay un error ortográfico " ingerir ---aliementos--- "
]

const Rules = () => {
    return (
        <div className="float my-2 w-full">
            <div className="backbg py-10 h-auto w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-3xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
                    Reglamento
                </h1>
                <div className="w-[40rem] h-10 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    {/* Core component */}
                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
                <div className="p-2">
                    {rule.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 text-white text-start">
                            <span className="md:text-[22px] xl:text-[30px]">{index + 1}.</span>
                            <p className="leading-10 md:text-[22px] md:leading-[60px] xl:text-[30px] xl:leading-[70px]">{item.ruleContent}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Rules;