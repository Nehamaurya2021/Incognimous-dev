// import folder
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Slider from "../../components/slider/Slider"
import LogoSection from "../../components/footertop/FooterTop"
import CyberServices from "../../pages/home/services/cyberservice/CyberServices"
import DesignServices from "../../pages/home/services/designservice/DesignServices"
import DevOpsServices from "../../pages/home/services/devopsservice/DevOpsServices"
import BlogCard from "../../components/blogcard/BlogCard"

// Import Api
import Projects from "../../api/LatestWork.json"
import blogsData from "../../api/BlogData.json"
import { useState } from "react"

const Home = () => {

    // Experience section
    const stats = [
        { value: "100+", label: "Training Session" },
        { value: "10+", label: "Team Members" },
        { value: "3+", label: "Year of Experience" },
        { value: "15+", label: "Project Completed" },
    ];

    // Services
    const [page, setPage] = useState("designservices");
    function RenderPage() {
        switch (page) {
            case "designservices":
                return <DesignServices />;
            case "devopsservices":
                return <DevOpsServices />;
            case "cyberservices":
                return <CyberServices />
            default:
                return <DesignServices />;
        }
    }

    // process
    const steps = [
        {
            id: "1.",
            title: "Discovery",
            points: ["Idea", "Data Analysis", "UX Research"]
        },
        {
            id: "2.",
            title: "Design",
            points: ["User Flow", "Wireframing", "UI Design", "Client Feedback"]
        },
        {
            id: "3.",
            title: "Development",
            points: ["Coding", "DB Design", "Debugging"]
        },
        {
            id: "4.",
            title: "Testing",
            points: ["Usability Testing", "Load Testing", "Device Testing"]
        },
        {
            id: "5.",
            title: "Deployment",
            points: ["Release"]
        }
    ]

    return (
        <>
            <Header />
            <Slider />
            <LogoSection />

            {/*<======================+++ Experience section +++=========================>*/}
            <section className="text-center pt-25 pb-5">
                <div className="">
                    <h2 className="text-4xl font-bold md:mx-110 leading-snug tracking-normal">We have Experience, That Matter’s a lot! </h2>
                    <p className="text-gray-500 py-3 md:mx-120">united by thhe team, concert on risk factors to reduce the sympotomus</p>
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

            {/*<======================+++ Latest Project section +++=========================>*/}

            <section className="w-full max-w-6xl mx-auto px-4 py-12">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-4xl font-bold">Latest Work</h2>

                    <button className="flex items-center gap-2 text-gray-800 hover:text-black">
                        <a href=" ">Explore More</a>
                        <a href=" " className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full">
                            →
                        </a>
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    {Projects.map((item, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl overflow-hidden shadow-md group"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
                            />

                            <div className="absolute bottom-4 left-4 text-white">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-sm opacity-80">{item.category}</p>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-40"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/*<======================+++ Our Sevices section +++=========================>*/}

            <section className="w-full max-w-6xl mx-auto px-4 py-12">
                <h2 className="text-2xl md:text-4xl font-bold">Our Services</h2>
                <div className="md:w-xl">
                    <p className="text-gray-500 py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ea nihil id esse, doloribus molestias dolores. Distinctio aut fugit itaque ex soluta quod, ad molestiae totam aperiam ut, officiis quidem!</p>
                </div>

                <div className="flex sm:flex-wrap gap-10 my-5 text-xl font-bold text-gray-500">
                    <div>
                        <button onClick={() => setPage("designservices")}>Design & Development</button>
                    </div>
                    <div>
                        <button onClick={() => setPage("devopsservices")}>DevOps</button>
                    </div>
                    <div>
                        <button onClick={() => setPage("cyberservices")}>Cyber Security</button>
                    </div>
                </div>

                {RenderPage()}
            </section>

            {/*<======================+++ Process section +++=========================>*/}

            <section className="text-center w-full max-w-6xl mx-auto px-4 py-12">

                <h2 className="text-2xl md:text-4xl font-bold">
                    Process that makes<br />work efficient
                </h2>

                <p className="mt-3 text-gray-500">
                    United by the team, concert on risk factors to reduce the symptomus
                </p>


                {/* MOBILE VERTICAL */}
                <div className="block md:hidden mt-12">
                    <div className="flex flex-col gap-10 items-start pl-6 border-l-2 border-gray-300">

                        {steps.map((step, i) => (
                            <div key={i} className="relative pl-6">

                                <span className="w-3 h-3 rounded-full bg-blue-500 absolute -left-1 top-1"></span>

                                <h3 className="text-gray-400 text-2xl font-bold">
                                    {step.id}
                                </h3>

                                <h4 className="font-semibold text-lg mt-2">
                                    {step.title}
                                </h4>

                                <ul className="mt-1 space-y-1 text-gray-600">
                                    {step.points.map((p) => <li key={p}>{p}</li>)}
                                </ul>

                            </div>
                        ))}

                    </div>
                </div>


                {/*  DESKTOP / TABLET HORIZONTAL */}
                <div className="hidden md:block relative mt-14">

                    <div className="absolute top-3 left-0 right-0 border border-gray-200"></div>

                    <div className="flex justify-between">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-white z-10"></div>

                                <h3 className="text-gray-400 text-2xl font-bold mt-8">
                                    {step.id}
                                </h3>

                                <h4 className="font-semibold text-lg mt-1">
                                    {step.title}
                                </h4>

                                <ul className="mt-2 space-y-1 text-gray-600">
                                    {step.points.map((p) => <li key={p}>{p}</li>)}
                                </ul>

                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/*<======================+++ Blog section +++=========================>*/}

            <section className="w-full px-6 md:px-16 lg:px-24 py-10">

                <div className="flex items-center justify-between">
                    <h2 className="text-2xl md:text-4xl font-bold">Blogs</h2>
                    <button className="flex items-center gap-2 text-gray-800 hover:text-black">
                        <a href="#">Explore More</a>
                        <a href="#" className="w-6 h-6 flex items-center justify-center border border-gray-600 rounded-full">
                            →
                        </a>
                    </button>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {blogsData.map((blog) => (
                        <BlogCard key={blog.id} {...blog} />
                    ))}
                </div>
            </section>

            {/*<======================+++ video section +++=========================>*/}

            <section className="w-full px-6 md:px-16 lg:px-24 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-4">Get Understand Through Video</h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="relative flex-1 flex justify-center">
                        <img
                            src="/Images/video.jpg"
                            alt="video"
                            className="w-full max-w-lg rounded-xl shadow-md"
                        />
                        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-blue-300 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-400 transition">
                            ▶
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}
export default Home