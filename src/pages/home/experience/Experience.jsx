const Experience = () => {
    const stats = [
        { value: "100+", label: "Training Session" },
        { value: "10+", label: "Team Members" },
        { value: "3+", label: "Year of Experience" },
        { value: "15+", label: "Project Completed" },
    ];
    return (
        <>
            <section className="text-center pt-25 pb-5">
                <div className="">
                    <h3 className="text-4xl font-bold mx-100 leading-snug">We have Experience, That Matter’s a lot! </h3>
                    <p className="text-gray-500 py-3 mx-120">united by thhe team, concert on risk factors to reduce the sympotomus</p>
                </div>

                <div className="w-full flex justify-center py-20">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-10">
                        {stats.map((item, index) => (
                            <div key={index} className="flex items-center gap-10">
                                {index !== 0 && (
                                    <div className="hidden md:block h-20 w-[1px] bg-blue-800"></div>
                                )}

                                {/* Stat Item */}
                                <div className="text-center">
                                    <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                                        {item.value}
                                    </h2>
                                    <p className="text-sm md:text-base text-gray-800">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Experience