const About = () => {
    return (
        <div className="float about w-full mt-10 mb-3 px-3 flex flex-col sm:px-10 ">
            <h1 className="my-5 pt-20 text-[50px] font-bold sm:text-[45px] md:pt-40 lg:text-[60px] xl:pt-56 xl:pl-44 xl:text-[70px] text-start text-white">Nosotros</h1>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                {/* <Image src="https://images.pexels.com/photos/13760406/pexels-photo-13760406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={500} className="rounded-sm" /> */}
                <div className="mb-20 xl:pl-32 sm:w-[320] md:w-[650] xl:w-[850] flex flex-col justify-center items-center text-center">
                    <p className="text-start text-[18px] xl:text-[25px] leading-8 md:leading-[50px] text-white">
                        Bienvenido al Balneario El Profe Carachure, tu refugio en el corazón del vergel de Doña Martha. Escapa de la rutina y sumérgete en un mundo de diversión y relajación. Nuestras instalaciones, diseñadas para toda la familia, te ofrecen desde refrescantes piscinas hasta áreas verdes para disfrutar de un día inolvidable. ¡Ven y descubre por qué somos el destino favorito de quienes buscan un respiro en la naturaleza!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;